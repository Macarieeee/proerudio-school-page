const fs = require('node:fs');
const path = require('node:path');
const { execFile } = require('node:child_process');
process.chdir(path.resolve(__dirname, '..'));
const cache = 'migration/source';
const pages = JSON.parse(fs.readFileSync('src/data/wordpress.json', 'utf8'));
const issues = [];
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const plain = s => s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
async function download(url, file) {
  if (!fs.existsSync(file)) await new Promise((resolve, reject) => execFile('curl.exe', ['-L', '-sS', '--fail', '--retry', '1', '--max-time', '45', url, '-o', file], e => e ? reject(e) : resolve()));
  return fs.readFileSync(file, 'utf8');
}
async function pool(items, fn, size = 6) {
  let i = 0;
  await Promise.all(Array.from({ length: size }, async () => { while (i < items.length) { const item = items[i++]; await fn(item); } }));
}
function clean(html, page) {
  // Drop theme navigation and sharing widgets; article content stays intact.
  const widget = /<(div|section|nav)\b[^>]*class=(['"])[^'"]*\b(?:section-post-footer|section-post-related|share_wrapper|post-nav)\b[^'"]*\2[^>]*>/i;
  let match;
  while ((match = widget.exec(html))) {
    const tags = new RegExp(`<\\/?${match[1]}\\b[^>]*>`, 'gi');
    tags.lastIndex = match.index;
    let depth = 0;
    let tag;
    let end;
    while ((tag = tags.exec(html))) {
      depth += tag[0].startsWith('</') ? -1 : 1;
      if (depth === 0) { end = tags.lastIndex; break; }
    }
    if (!end) break;
    html = html.slice(0, match.index) + html.slice(end);
  }
  html = html.replace(/<(?:img|iframe)\b[^>]*>/gi, tag => {
    const lazy = /data-lazy-src=(['"])([^]*?)\1/i.exec(tag);
    if (lazy) tag = tag.replace(/\ssrc=(['"])([^]*?)\1/i, '').replace(/\sdata-lazy-src=(['"])([^]*?)\1/i, ` src="${lazy[2]}"`);
    return tag.replace(/data-lazy-srcset=/gi, 'srcset=').replace(/data-lazy-sizes=/gi, 'sizes=');
  });
  html = html.replace(/<(script|style|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<!--[^]*?-->/g, '');
  html = html.replace(/<form\b[^>]*>[\s\S]*?<\/form>/gi, () => {
    issues.push({ url: page.url, type: 'form', status: 'needs-backend', note: 'Original WordPress form requires its plugin and backend.' });
    return `<div class="migration-form"><p>Pentru a completa formularul, accesează pagina originală.</p><a href="${page.url}" data-original-form="true" target="_blank" rel="noopener noreferrer">Deschide formularul</a></div>`;
  });
  html = html.replace(/\[(?:useyourdrive|AFG_gallery)[^\]]*\]/gi, match => {
    issues.push({ url: page.url, type: 'gallery', shortcode: match, status: 'external-plugin' });
    return `<p><a href="${page.url}" data-original-form="true" target="_blank" rel="noopener noreferrer">Vezi galeria foto pe site-ul original</a></p>`;
  });
  return html.replace(/\[\/?(?:vc_[a-z_]+|mk_[a-z_]+|recaptcha|CP_CALCULATED_FIELDS_RESULT)[^\]]*\]/gi, '')
    .replace(/\s(?:style|width|height|align|on\w+)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/(?:href|src)\s*=\s*(["'])\s*javascript:[\s\S]*?\1/gi, '')
    .replace(/\b(src|href)=(['"])\/\//gi, '$1=$2https://')
    .replace(/<h1\b([^>]*)>/gi, '<h2$1>').replace(/<\/h1>/gi, '</h2>')
    .replace(/\sclass=(['"])([^'"]*)\1/gi, (_, q, classes) => /gallery/.test(classes) ? ' class="wordpress-gallery"' : '')
    .replace(/<p>\s*<\/p>/gi, '').trim();
}
(async () => {
  let done = 0;
  await pool(pages.filter(p => p.type === 'page' || p.type === 'post'), async page => {
    try {
      const html = await download(page.url, `${cache}/rendered-${page.id}.html`);
      page.seoTitle = /<title>([^<]+)<\/title>/i.exec(html)?.[1] || `${page.title} | Pro Erudio`;
      const main = /<main\b[^>]*>([\s\S]*?)<\/main>/i.exec(html)?.[1];
      if (main) page.html = clean(main, page);
      else issues.push({ url: page.url, type: 'content', status: 'api-fallback' });
    } catch (e) { issues.push({ url: page.url, type: 'fetch', status: 'api-fallback', error: e.message }); }
    if (++done % 50 === 0) console.log(`Rendered content: ${done}`);
  });
  const authorUrls = [...fs.readFileSync(`${cache}/author-sitemap.xml`, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  for (const url of authorUrls.filter(url => !pages.some(p => p.url === url))) {
    const html = await download(url, `${cache}/author-${new URL(url).pathname.split('/')[2]}.html`);
    const title = /<title>([^<]+)<\/title>/.exec(html)?.[1].split(' - ')[0] || 'Articole Pro Erudio';
    const main = /<main\b[^>]*>([\s\S]*?)<\/main>/i.exec(html)?.[1] || '';
    const page = { id: url, slug: new URL(url).pathname.replaceAll('/', '-'), path: new URL(url).pathname, url, type: 'archive', title, description: title, excerpt: '', date: '', image: '', preserved: false, html: '' };
    page.html = clean(main, page);
    pages.push(page);
  }
  const attachmentUrls = [...fs.readFileSync(`${cache}/attachment-sitemap.xml`, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  const media = [];
  let pageNumber = 1;
  while (true) {
    const batch = JSON.parse(await download(`https://www.proerudio.ro/wp-json/wp/v2/media?per_page=100&page=${pageNumber}&_fields=id,link,title,source_url,alt_text,caption,description`, `${cache}/all-media-${pageNumber}.json`));
    media.push(...batch);
    if (batch.length < 100) break;
    pageNumber++;
  }
  let attachmentsDone = 0;
  await pool(attachmentUrls, async url => {
    if (pages.some(p => p.url === url)) return;
    const m = media.find(m => m.link === url);
    if (!m) {
      try {
        const html = await download(url, `${cache}/attachment-${attachmentUrls.indexOf(url)}.html`);
        const main = /<main\b[^>]*>([\s\S]*?)<\/main>/i.exec(html)?.[1];
        if (!main) throw new Error('Missing attachment content');
        const title = /<title>([^<]+)<\/title>/.exec(html)?.[1].split(' - ')[0] || url.split('/').filter(Boolean).pop();
        const image = /data-lazy-src=(['"])([^]*?)\1/i.exec(main)?.[2] || /<img[^>]+src=(['"])([^]*?)\1/i.exec(main)?.[2] || '';
        const page = { id: `attachment-${attachmentUrls.indexOf(url)}`, slug: `attachment-${attachmentUrls.indexOf(url)}`, path: new URL(url).pathname, url, type: 'attachment', title, description: title, excerpt: '', date: '', image, preserved: false, html: '' };
        page.html = clean(main, page);
        pages.push(page);
      } catch (e) { issues.push({ url, type: 'attachment', status: 'fetch-failed', error: e.message }); }
    } else {
    pages.push({ id: `media-${m.id}`, slug: `media-${m.id}`, path: new URL(url).pathname, url, type: 'attachment', title: plain(m.title.rendered), description: plain(m.caption.rendered) || plain(m.title.rendered), excerpt: '', date: '', image: m.source_url, preserved: false, html: `<figure><img src="${m.source_url}" alt="${esc(m.alt_text || plain(m.title.rendered))}" loading="lazy" /><figcaption>${m.caption.rendered}</figcaption></figure>${m.description.rendered}` });
    }
    if (++attachmentsDone % 100 === 0) console.log(`Attachments: ${attachmentsDone}`);
  });
  fs.writeFileSync('src/data/wordpress.json', JSON.stringify(pages));
  fs.writeFileSync('migration/functional-review.json', JSON.stringify(issues, null, 2));
  const sitemapUrls = ['page-sitemap.xml', 'post-sitemap.xml', 'category-sitemap.xml', 'tag-sitemap.xml', 'author-sitemap.xml', 'attachment-sitemap.xml'].flatMap(file => [...fs.readFileSync(`${cache}/${file}`, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]));
  const missing = sitemapUrls.filter(url => !pages.some(p => p.url === url));
  fs.writeFileSync('migration/url-inventory.json', JSON.stringify({ source: 'https://www.proerudio.ro/', importedAt: new Date().toISOString(), total: pages.length, sitemapMissing: missing, entries: pages.map(({ html, ...p }) => p) }, null, 2));
  fs.writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(p => `<url><loc>${esc(p.url)}</loc></url>`).join('')}</urlset>`);
  console.log(JSON.stringify({ total: pages.length, media: media.length, sitemapMissing: missing, functionalIssues: issues.length }));
})().catch(e => { console.error(e); process.exitCode = 1; });
