const assert = require('node:assert/strict');
const fs = require('node:fs');
const { parseHTML } = require('linkedom');
const pages = require('../src/data/pages.json');
const aliases = require('../src/data/route-aliases.json');
const nav = fs.readFileSync('src/components/EnhancedHeader.tsx', 'utf8');
const routes = new Set([...nav.matchAll(/"(\/[^" ]*\/)"/g)].map(match => aliases[match[1]] || match[1]));
let checked = 0;
for (const route of routes) {
  const page = pages.find(page => page.path === route);
  if (!page) continue;
  const { document } = parseHTML(fs.readFileSync(`dist${route}index.html`, 'utf8'));
  const body = document.querySelector('.page-content');
  if (!body) continue;
  const seen = new Set();
  for (const image of body.querySelectorAll('img')) {
    if (image.closest('.photo-gallery, .team-card, .team-profile-header, .course-overview-card, .registration-course-card')) continue;
    const src = image.getAttribute('src').replace(/-\d+x\d+(?=\.(?:png|jpe?g|webp))/g, '');
    assert(!seen.has(src), `Repeated content image on ${route}: ${src}`);
    seen.add(src);
  }
  for (const link of body.querySelectorAll('[data-original-form]')) {
    assert(link.getAttribute('href').startsWith('https://www.proerudio.ro/'), `Form points back to local page: ${route}`);
  }
  const intro = body.querySelector('.mobile-page-intro:not(.mobile-page-intro-no-image)');
  if (intro) assert(intro.querySelector('img'), `Missing mobile artwork: ${route}`);
  checked++;
}
assert(checked >= 50, 'Expected at least 50 navigation pages to be checked');
const { document } = parseHTML(fs.readFileSync('dist/atelier-de-dansuri-populare/index.html', 'utf8'));
const event = document.querySelector('.page-content');
assert.equal(event.querySelectorAll('.event-facts > div').length, 4);
assert(!event.textContent.includes('2017'));
assert(!event.querySelector('img[src*="gravatar"], img[src*="puideom"]'));
console.log(`Content layout checks passed for ${checked} navigation pages.`);
