const fs = require('node:fs');
const path = require('node:path');
process.chdir(path.resolve(__dirname, '..'));
const pages = require('./public-content.cjs').publicPages(JSON.parse(fs.readFileSync('src/data/wordpress.json', 'utf8')));
const template = fs.readFileSync('dist/index.html', 'utf8').replace(/<meta\s+(?:property|name)="(?:og:|twitter:)[^"]*"[^>]*>/gi, '');
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const base = (process.env.VITE_BASE_PATH || '/').replace(/\/$/, '');
const localize = html => html.replace(/href=(["'])https?:\/\/(?:www\.)?proerudio\.ro([^"']*)\1/gi, (match, q, suffix) => {
  if (!pages.some(p => p.path === suffix) || match.includes('wp-content')) return match;
  return `href=${q}${base}${suffix}${q}`;
});
for (const page of pages) {
  const queryId = new URL(page.url).searchParams.get('attachment_id');
  const directory = path.resolve('dist', queryId ? `query-pages/attachment-${queryId}` : '.' + decodeURIComponent(page.path));
  if (!directory.startsWith(path.resolve('dist') + path.sep) && directory !== path.resolve('dist')) throw new Error(`Invalid path ${page.path}`);
  fs.mkdirSync(directory, { recursive: true });
  const title = page.seoTitle || `${page.title} | Pro Erudio`;
  const metadata = `<link rel="canonical" href="${escape(page.url)}" /><meta property="og:title" content="${escape(title)}" /><meta property="og:url" content="${escape(page.url)}" /><meta property="og:description" content="${escape(page.description)}" />${page.image ? `<meta property="og:image" content="${escape(page.image)}" />` : ''}`;
  const html = template.replace(/<title>[^]*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${escape(page.description)}" />`)
    .replace('</head>', `${metadata}</head>`)
    .replace('<div id="root"></div>', `<div id="root"><main><h1>${escape(page.title)}</h1>${localize(page.html)}</main></div>`);
  fs.writeFileSync(path.join(directory, 'index.html'), html);
}
console.log(`Static HTML generated for ${pages.length} original URLs.`);
const original = slug => pages.find(p => p.slug === slug)?.path;
const importedSource = fs.readFileSync('src/pages/ImportedWordPressPage.tsx', 'utf8');
const aliases = [...importedSource.matchAll(/slug: "([^"]+)"/g)].map(m => [`/${m[1]}/`, original(m[1])]).filter(([from, to]) => to && from !== to);
aliases.push(['/articole/', '/articole-pro-erudio/'], ['/cursuri-vara/storytime/', original('storytime-copii-4-7-ani')]);
let htaccess = 'Options -MultiViews\nDirectoryIndex index.html\n<IfModule mod_rewrite.c>\nRewriteEngine On\n';
for (const [from, to] of aliases) {
  htaccess += `RewriteRule ^${from.slice(1).replace(/\/$/, '')}/?$ ${base}${to} [R=301,L]\n`;
  const directory = path.resolve('dist', '.' + from);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), `<!doctype html><html lang="ro"><head><meta charset="utf-8"><link rel="canonical" href="https://www.proerudio.ro${to}"><meta http-equiv="refresh" content="0;url=${base}${to}"><title>Pro Erudio</title></head><body><a href="${base}${to}">Deschide pagina</a></body></html>`);
}
for (const page of pages) {
  const id = new URL(page.url).searchParams.get('attachment_id');
  if (id) htaccess += `RewriteCond %{QUERY_STRING} (^|&)attachment_id=${id}(&|$)\nRewriteRule ^$ query-pages/attachment-${id}/index.html [L]\n`;
}
htaccess += '</IfModule>\n';
fs.writeFileSync('dist/.htaccess', htaccess);
fs.writeFileSync('dist/_redirects', aliases.map(([from, to]) => `${base}${from} ${base}${to} 301`).join('\n') + '\n');
