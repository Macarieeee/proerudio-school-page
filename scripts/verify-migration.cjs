const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
process.chdir(path.resolve(__dirname, '..'));
const pages = require('../src/data/wordpress.json');
const manifest = require('../src/data/wordpress-manifest.json');
const inventory = require('../migration/url-inventory.json');
assert.deepEqual(inventory.sitemapMissing, []);
assert.equal(new Set(pages.map(p => p.url)).size, pages.length);
assert.equal(manifest.length, pages.length);
for (const p of manifest) {
  assert(fs.existsSync(`public/content/${p.contentFile}`), p.path);
  const queryId = new URL(p.url).searchParams.get('attachment_id');
  const html = fs.readFileSync(path.join('dist', queryId ? `query-pages/attachment-${queryId}` : '.' + decodeURIComponent(p.path), 'index.html'), 'utf8');
  assert(html.includes(`rel="canonical" href="${p.url}"`), p.path);
  assert(html.includes('<main>'), p.path);
  assert(!html.includes('<form '), `Unsupported form on ${p.path}`);
  assert(!html.includes('lovable.dev'), `Placeholder SEO on ${p.path}`);
}
console.log(`Verified ${pages.length} unique URLs, static HTML, canonical tags and content files; zero sitemap omissions.`);
