const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
process.chdir(path.resolve(__dirname, '..'));
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  const archive = require('../src/data/wordpress-manifest.json').find(p => p.type === 'archive');
  const urls = ['/', '/contact/', '/examen-cambridge-english-de-ce-sa-il-sustii/', '/cursuri-de-limba-engleza-pentru-copii-de-4-11-ani/curs-de-limba-engleza-join-us-in-englishland/', archive.path, '/home-cursuri-de-engleza/calitate-150x150/', '/?attachment_id=10566'];
  const results = [];
  fs.mkdirSync('migration/previews', { recursive: true });
  for (const url of urls) {
    await page.goto('http://127.0.0.1:4173' + url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1300);
    const result = await page.evaluate(() => ({ path: location.pathname, heading: document.querySelector('h1')?.textContent, canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'), loading: document.body.innerText.includes('Se încarcă pagina'), forms: document.querySelectorAll('form').length, overflow: document.documentElement.scrollWidth > innerWidth + 1, placeholderImages: [...document.querySelectorAll('.wordpress-content img')].filter(i => i.getAttribute('src')?.startsWith('data:image/svg')).length }));
    if (!result.heading || result.heading === '404' || result.loading || result.overflow || result.placeholderImages) throw new Error(JSON.stringify(result));
    results.push(result);
    if (url === '/contact/') await page.screenshot({ path: 'migration/previews/contact-desktop.png', fullPage: true });
    if (url.includes('examen-cambridge')) await page.screenshot({ path: 'migration/previews/article-desktop.png', fullPage: true });
  }
  await page.goto('http://127.0.0.1:4173/curs-de-limba-engleza-join-us-in-englishland/');
  await page.waitForTimeout(1000);
  if (!page.url().includes('/cursuri-de-limba-engleza-pentru-copii-de-4-11-ani/')) throw new Error('Alias does not resolve to original URL');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://127.0.0.1:4173/contact/');
  await page.waitForTimeout(1000);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
  if (overflow) throw new Error('Mobile horizontal overflow');
  await page.screenshot({ path: 'migration/previews/contact-mobile.png', fullPage: true });
  if (errors.length) throw new Error(errors.join('\n'));
  fs.writeFileSync('migration/browser-verification.json', JSON.stringify({ results, errors, mobileOverflow: overflow, aliasPassed: true }, null, 2));
  console.log('Browser checks passed: seven routes, canonical URLs, alias, mobile layout and no JavaScript errors.');
  await browser.close();
})().catch(e => { console.error(e); process.exitCode = 1; });
