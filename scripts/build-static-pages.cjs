const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
process.env.NODE_ENV = 'production';
process.chdir(path.resolve(__dirname, '..'));
(async () => {
  const pages = require('../src/data/pages.json');
  const aliases = require('../src/data/route-aliases.json');
  const { render } = await import(pathToFileURL(path.resolve('dist-ssr/render-pages.js')));
  const template = fs.readFileSync('dist/index.html', 'utf8').replace(/<meta\s+(?:property|name)="(?:og:|twitter:)[^"]*"[^>]*>/gi, '');
  const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const base = (process.env.VITE_BASE_PATH || '/').replace(/\/$/, '');
  const localize = html => html.replace(/href="([^"]+)"/g, (match, href) => {
    const url = new URL(href, 'https://www.proerudio.ro');
    if (!['proerudio.ro', 'www.proerudio.ro'].includes(url.hostname)) return match;
    const route = url.pathname.replace(/\/$/, '') + '/';
    const target = aliases[route] || route;
    return pages.some(page => page.path === target) ? `href="${base}${target}${url.search}${url.hash}"` : match;
  });
  const directoryFor = route => {
    const directory = path.resolve('dist', '.' + decodeURIComponent(route));
    if (directory !== path.resolve('dist') && !directory.startsWith(path.resolve('dist') + path.sep)) throw Error(`Invalid route: ${route}`);
    fs.mkdirSync(directory, { recursive: true });
    return directory;
  };
  for (const page of pages) {
    const title = page.seoTitle || `${page.title} | Pro Erudio`;
    const metadata = `<link rel="canonical" href="${escape(page.url)}" /><meta property="og:title" content="${escape(title)}" /><meta property="og:url" content="${escape(page.url)}" /><meta property="og:description" content="${escape(page.description)}" />${page.image ? `<meta property="og:image" content="${escape(page.image)}" />` : ''}`;
    const html = template.replace(/<title>[^]*?<\/title>/, `<title>${escape(title)}</title>`)
      .replace(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${escape(page.description)}" />`)
      .replace('</head>', `${metadata}</head>`)
      .replace('<div id="root"></div>', () => `<div id="root">${localize(render(page.folder, page.path, base))}</div>`);
    fs.writeFileSync(path.join(directoryFor(page.path), 'index.html'), html);
  }
  const redirects = Object.entries(aliases).filter(([from]) => !pages.some(p => p.path === from));
  let htaccess = 'Options -MultiViews\nDirectoryIndex index.html\n<IfModule mod_rewrite.c>\nRewriteEngine On\n';
  for (const [from, to] of redirects) {
    htaccess += `RewriteRule ^${from.slice(1).replace(/\/$/, '')}/?$ ${base}${to} [R=301,L]\n`;
    fs.writeFileSync(path.join(directoryFor(from), 'index.html'), `<!doctype html><html lang="ro"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${base}${to}"><title>Pro Erudio</title></head><body><a href="${base}${to}">Deschide pagina</a></body></html>`);
  }
  fs.writeFileSync('dist/.htaccess', htaccess + '</IfModule>\n');
  fs.writeFileSync('dist/_redirects', redirects.map(([from,to])=>`${base}${from} ${base}${to} 301`).join('\n')+'\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p=>`  <url><loc>${escape(p.url)}</loc></url>`).join('\n')}\n</urlset>\n`;
  fs.writeFileSync('public/sitemap.xml', sitemap);
  fs.writeFileSync('dist/sitemap.xml', sitemap);
  console.log(`Generated ${pages.length} native pages and ${redirects.length} redirects.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
