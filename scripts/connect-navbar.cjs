const fs = require('node:fs');
const pages = require('../src/data/wordpress-manifest.json');
const file = 'src/components/EnhancedHeader.tsx';
let source = fs.readFileSync(file, 'utf8');
const slugs = [
  'da-valoare-diplomelor-tale', 'echipa-pro-erudio', 'cariere', 'fa-o-fapta-buna',
  'test-de-plasare', 'inscriere-cursuri-pro-erudio', 'inscriere-cursuri-pentru-copii-si-adolescenti', 'galerii-foto', 'articole-pro-erudio',
  'curs-de-limba-engleza-join-us-in-englishland', 'curs-de-limba-engleza-join-us-for-english',
  'curs-de-limba-engleza-head-for-ketpet', 'curs-de-limba-engleza-head-for-fce-cae-cpe', 'curs-de-limba-engleza-head-for-ielts', 'curs-de-limba-engleza-pentru-tineri-head-for-toefl',
  'modul-optional-de-pregatire-pentru-examenele-cambridge-english', 'cambridge-mock-tests', 'cursuri-interactive-de-conversatie-cu-profesori-internationali',
  'cursuri-de-limba-germana-pentru-copii-si-adolescenti', 'parler-francais-cest-cool', 'cursuri-de-dezvoltare-personala-copii', 'descopera-magia-dansului', 'cursuri-de-limba-japoneza-pentru-copii',
  'storytime-copii-4-7-ani', 'storytime-copii-8-11-ani', 'animal-kingdom', 'english-summer-courses', 'a-world-of-words', 'summer-fun-with-my-favourite-teacher',
  'english-through-songs-copii-9-12-ani', 'be-dramatic-copii-9-12-ani', 'a-world-of-words-2', 'editors-club',
  'english-summer-boost', 'english-over-a-glass-of-lemonade-copii-13-18-ani', 'cinematics-copii-13-18-ani',
  'sprechen-sie-deutsch-copii-5-8-ani', 'sprechen-sie-deutsch-copii-9-13-ani', 'apprendre-en-samusant', 'hola-spaniola', 'japonia-cool',
  'happy-confident-me', 'curs-de-dezvoltare-emotionala-cu-psiholog', 'arts-and-crafts', 'calatorie-in-pasi-de-dans',
  'atelier-de-dansuri-de-craciun', 'atelier-de-dansuri-populare', 'ateliere-de-dezvoltare-emotionala-pentru-copii-1', 'halloween-party', 'bring-a-friend-week', 'atelierul-lui-mos-craciun', 'seara-filmului', 'simulare-cambridge-english-exams', 'mos-nicolae-vine-cu-surprize-la-pro-erudio', 'playday-pro-erudio',
  'jurnal-de-tabara-ramsgate-2019', 'english-explorers-camp-cheia-2019', 'english-explorer-camp-2016', 'jurnal-de-tabara-wycliff-college-2016', 'jurnal-de-tabara-english-adventure-camp-2015', 'tabara-in-anglia-2018', 'jurnal-de-tabara-english-explorers-camp-2021',
];
let index = 0;
source = source.replace(/c\("([^"\n]*)"(?:,\s*"[^"\n]*")?\)/g, (match, label) => {
  const slug = slugs[index++];
  const page = pages.find(p => p.slug === slug && (p.type === 'page' || p.type === 'post'));
  if (!page) throw new Error(`Missing page for ${label}: ${slug}`);
  return `c("${label}", "${page.path}")`;
});
if (index !== slugs.length) throw new Error(`Unexpected navigation count ${index}`);
source = source.replace('type Child = { label: string; to?: string };', 'type Child = { label: string; to: string };')
  .replace('const c = (label: string, to?: string): Child', 'const c = (label: string, to: string): Child')
  .replace('to: "/cursuri-engleza"', 'to: "/cursuri-de-limba-engleza-pentru-copii-si-adolescenti/"')
  .replace('to: "/cursuri-copii"', 'to: "/alte-cursuri-pentru-copii/"')
  .replace('to: "/cursuri-vara"', 'to: "/cursuri-de-vara/"')
  .replace('to: "/evenimente"', 'to: "/evenimente/"')
  .replace('to: "/tabere"', 'to: "/tabere/"')
  .replace('to: "/contact"', 'to: "/contact/"')
  .replace('label: "Jurnale de tabără – foto & video", align:', 'label: "Jurnale de tabără – foto & video", to: "/galerii-foto/", align:')
  .replaceAll('to="/inscriere"', 'to="/inscriere-cursuri-pro-erudio/"');
fs.writeFileSync(file, source);
console.log(`Connected ${index} submenu entries, main categories and registration buttons.`);
