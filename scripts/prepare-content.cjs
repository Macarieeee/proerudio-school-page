const fs = require('node:fs');
const path = require('node:path');
process.chdir(path.resolve(__dirname, '..'));
const pages = JSON.parse(fs.readFileSync('src/data/wordpress.json', 'utf8'));
fs.mkdirSync('public/content', { recursive: true });
const manifest = pages.map(({ html, ...page }, index) => {
  const contentFile = `${index}.html`;
  fs.writeFileSync(`public/content/${contentFile}`, html);
  return { ...page, seoTitle: page.seoTitle || `${page.title} | Pro Erudio`, contentFile };
});
fs.writeFileSync('src/data/wordpress-manifest.json', JSON.stringify(manifest));
console.log(`Prepared ${pages.length} separate content files.`);
