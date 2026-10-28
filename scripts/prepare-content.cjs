const fs = require('node:fs');
const path = require('node:path');
process.chdir(path.resolve(__dirname, '..'));
const sourcePages = JSON.parse(fs.readFileSync('src/data/wordpress.json', 'utf8'));
const pages = require('./public-content.cjs').publicPages(sourcePages);
const team = pages.find(page => page.slug === 'echipa-pro-erudio');
const members = [...team.html.matchAll(/<h4>\s*<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>\s*<\/h4>/g)].map(([, url, name]) => {
  const to = new URL(url, 'https://www.proerudio.ro').pathname;
  const profile = pages.find(page => page.path === to);
  // Use the same portrait as formatTeamProfile, rather than the old team photo.
  const figure = profile?.html.match(/<figure\b[^>]*>[\s\S]*?<\/figure>/i)?.[0];
  const photo = figure?.match(/<img\b[^>]*>/i)?.[0];
  const image = photo?.match(/\ssrc=["']([^"']+)["']/i)?.[1];
  if (!image) throw new Error(`Missing profile portrait: ${to}`);
  return { label: name.replace(/<[^>]*>/g, '').trim(), to, image };
});
fs.writeFileSync('src/data/team-members.json', JSON.stringify(members, null, 2));
fs.mkdirSync('public/content', { recursive: true });
// Remove only generated HTML files so unpublished pages cannot remain accessible.
for (const file of fs.readdirSync('public/content')) {
  if (/^\d+\.html$/.test(file)) fs.unlinkSync(path.join('public/content', file));
}
const manifest = pages.map(({ html, ...page }) => {
  const index = sourcePages.findIndex(source => source.url === page.url);
  const contentFile = `${index}.html`;
  fs.writeFileSync(`public/content/${contentFile}`, html);
  return { ...page, seoTitle: page.seoTitle || `${page.title} | Pro Erudio`, contentFile };
});
fs.writeFileSync('src/data/wordpress-manifest.json', JSON.stringify(manifest));
const escapeXml = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
fs.writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${escapeXml(page.url)}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Prepared ${pages.length} separate content files.`);
