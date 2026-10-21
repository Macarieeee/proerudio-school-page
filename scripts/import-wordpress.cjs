const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
process.chdir(root);
const cache = 'migration/source';
fs.mkdirSync(cache, { recursive: true });
function read(file) { return JSON.parse(fs.readFileSync(fs.existsSync(file) ? file : `${cache}/${file}`, 'utf8')); }
function download(url, file) {
  if (!fs.existsSync(file)) execFileSync('curl.exe', ['-L', '-sS', '--fail', '--retry', '2', url, '-o', file]);
  return read(file);
}
const pages = ['wp-pages-probe.json', 'wp-pages-2.json', 'wp-pages-3.json'].flatMap(read);
const posts = read('wp-posts-probe.json');
const decode = s => s.replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, h, d) => String.fromCodePoint(parseInt(h || d, h ? 16 : 10))).replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const text = s => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const ids = new Set();
for (const p of [...pages, ...posts]) {
  if (p.featured_media) ids.add(p.featured_media);
  for (const m of decode(p.content.rendered).matchAll(/\[(?:gallery|vc_single_image|vc_gallery|vc_images_carousel)[^\]]*?(?:ids|images|image)=["']([\d, ]+)["']/g)) for (const id of m[1].split(',')) ids.add(Number(id.trim()));
}
const media = {};
const idList = [...ids].filter(Boolean);
for (let i = 0; i < idList.length; i += 100) {
  const batch = download(`https://www.proerudio.ro/wp-json/wp/v2/media?per_page=100&include=${idList.slice(i, i + 100).join(',')}`, `${cache}/media-${i}.json`);
  for (const m of batch) media[m.id] = { src: m.source_url, alt: m.alt_text || text(m.title.rendered) };
}
const issues = [];
function clean(source, p) {
  let html = source.replace(/\[[^\]]+\]/g, match => decode(match));
  const image = id => media[id] ? `<img src="${media[id].src}" alt="${media[id].alt.replace(/"/g, '&quot;')}" loading="lazy" />` : '';
  html = html.replace(/\[vc_single_image\b([^\]]*)\]/g, (_, attrs) => image(/image=["'](\d+)["']/.exec(attrs)?.[1] || (attrs.includes('featured_image') ? p.featured_media : 0)));
  html = html.replace(/\[(?:gallery|vc_gallery|vc_images_carousel)\b([^\]]*)\]/g, (_, attrs) => {
    const list = /(?:ids|images)=["']([\d, ]+)["']/.exec(attrs)?.[1];
    return list ? `<div class="wordpress-gallery">${list.split(',').map(id => image(id.trim())).join('')}</div>` : '';
  });
  html = html.replace(/\[vc_video\b([^\]]*)\]/g, (_, attrs) => {
    const url = /link=["']([^"']+)["']/.exec(attrs)?.[1];
    return url ? `<p><a href="${url}">Vezi videoclipul</a></p>` : '';
  });
  html = html.replace(/\[(?:contact-form-7|gravityform|formidable|ninja_form|forminator_form|wpforms|caldera_form)\b[^\]]*\]/gi, match => {
    issues.push({ url: p.link, type: 'form', shortcode: match });
    return `<div class="migration-form"><p>Formularul acestei pagini este disponibil pe site-ul original.</p><a href="${p.link}" data-original-form="true" target="_blank" rel="noopener noreferrer">Deschide formularul original</a></div>`;
  });
  html = html.replace(/\[(\/?[a-z_][\w-]*)\b[^\]]*\]/gi, (match, tag) => {
    if (!/^\/?(?:vc_|mk_|rev_slider|caption|button|divider|highlight|dropcap|clear)/.test(tag)) issues.push({ url: p.link, type: 'shortcode', shortcode: match });
    return '';
  });
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '').replace(/(?:href|src)\s*=\s*(["'])\s*javascript:[\s\S]*?\1/gi, '').replace(/\s(?:style|width|height|align)=["'][^"']*["']/gi, '').replace(/<p>\s*<\/p>/gi, '').trim();
}
const importedFile = fs.readFileSync('src/pages/ImportedWordPressPage.tsx', 'utf8');
const preservedSlugs = [...importedFile.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
const preserved = new Set(preservedSlugs);
preserved.add('8-motive-sa-mi-trimit-copilul-tabara');
preserved.add('storytime-copii-4-7-ani');
const entries = [...pages, ...posts].map(p => ({
  id: p.id, slug: p.slug, path: new URL(p.link).pathname, url: p.link,
  type: p.type, title: text(p.title.rendered), excerpt: text(p.excerpt.rendered),
  date: p.date, image: media[p.featured_media]?.src || '',
  description: p.yoast_head_json?.description || text(p.excerpt.rendered) || text(p.content.rendered).slice(0, 160),
  html: clean(p.content.rendered, p), categories: p.categories || [], tags: p.tags || [], author: p.author,
  preserved: preserved.has(p.slug) || new URL(p.link).pathname === '/',
}));
for (const [file, kind] of [['wp-categories.json', 'category'], ['wp-tags.json', 'tag']]) {
  for (const term of read(file)) {
    const matching = entries.filter(p => p.type === 'post' && p[kind === 'category' ? 'categories' : 'tags'].includes(term.id));
    entries.push({ id: `${kind}-${term.id}`, slug: `${kind}-${term.slug}`, path: new URL(term.link).pathname, url: term.link, type: 'archive', title: text(term.name), description: text(term.description) || `Articole Pro Erudio: ${text(term.name)}`, excerpt: '', date: '', image: '', preserved: false, html: `<p>${text(term.description)}</p><ul>${matching.map(p => `<li><a href="${p.url}">${p.title}</a></li>`).join('')}</ul>` });
  }
}
const authors = [...new Set(posts.map(p => p.author))];
for (const id of authors) {
  let author;
  try { author = download(`https://www.proerudio.ro/wp-json/wp/v2/users/${id}`, `${cache}/author-${id}.json`); }
  catch { continue; }
  const url = `https://www.proerudio.ro/author/${author.slug}/`;
  const matching = entries.filter(p => p.author === id);
  entries.push({ id: `author-${id}`, slug: `author-${author.slug}`, path: new URL(url).pathname, url, type: 'archive', title: author.name, description: author.description || `Articole de ${author.name}`, excerpt: '', date: '', image: '', preserved: false, html: `<ul>${matching.map(p => `<li><a href="${p.url}">${p.title}</a></li>`).join('')}</ul>` });
}
fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/wordpress.json', JSON.stringify(entries));
fs.writeFileSync('migration/functional-review.json', JSON.stringify(issues, null, 2));
const sitemapUrls = ['page-sitemap.xml', 'post-sitemap.xml', 'category-sitemap.xml', 'tag-sitemap.xml', 'author-sitemap.xml'].flatMap(file => [...fs.readFileSync(fs.existsSync(file) ? file : `${cache}/${file}`, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => decode(m[1])));
const missing = sitemapUrls.filter(url => !entries.some(p => p.url === url));
fs.writeFileSync('migration/url-inventory.json', JSON.stringify({ source: 'https://www.proerudio.ro/', importedAt: new Date().toISOString(), pages: pages.length, posts: posts.length, archives: entries.filter(p => p.type === 'archive').length, sitemapMissing: missing, entries: entries.map(({ html, ...p }) => p) }, null, 2));
fs.writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.map(p => `<url><loc>${p.url.replace(/&/g, '&amp;')}</loc></url>`).join('')}</urlset>`);
for (const file of ['wp-pages-probe.json', 'wp-pages-2.json', 'wp-pages-3.json', 'wp-posts-probe.json', 'wp-categories.json', 'wp-tags.json', 'sitemap-probe.xml', 'page-sitemap.xml', 'post-sitemap.xml', 'category-sitemap.xml', 'tag-sitemap.xml', 'author-sitemap.xml']) if (fs.existsSync(file)) fs.renameSync(file, `${cache}/${file}`);
console.log(JSON.stringify({ pages: pages.length, posts: posts.length, total: entries.length, media: Object.keys(media).length, missing, functionalIssues: issues.length }, null, 2));
