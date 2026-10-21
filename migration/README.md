# Import Pro Erudio

Inventarul este în `url-inventory.json`. Conținutul public a fost extras din API-ul WordPress și din HTML-ul paginilor, inclusiv din tema Betheme. Sitemap-urile originale și răspunsurile sursă sunt păstrate în `source/`.

Importul acoperă 209 pagini, 72 articole, 100 arhive și 657 pagini media: 1.038 URL-uri. Nu lipsește niciun URL din sitemap-urile de pagini, articole, categorii, etichete, autori și atașamente verificate. Un atașament folosește `/?attachment_id=10566`; ruta React și regula Apache îl tratează separat de homepage.

Paginile React deja realizate și fișierele lor HTML importate au rămas nemodificate. Rutele originale ierarhice folosesc aceleași componente. Adresele scurte din prototip sunt aliasuri către URL-urile originale. Articolele noi folosesc culorile, tipografia și componentele existente.

## Build și verificare

`npm run build` generează site-ul pentru rădăcina domeniului. Fiecare URL are HTML cu text, titlu, descriere și canonical înainte de executarea JavaScript. Conținutul paginilor noi este încărcat separat, fără includerea tuturor textelor în bundle-ul aplicației.

`npm run build:github` generează varianta cu prefix `/proerudio-school-page/`. `npm run deploy` folosește această variantă pentru hosting-ul GitHub Pages existent.

`node scripts/verify-migration.cjs` verifică inventarul, unicitatea URL-urilor, fișierele HTML, conținutul și canonical-urile. `scripts/verify-browser.cjs` verifică rute reprezentative, navigarea aliasurilor, dimensiunea mobilă și erorile JavaScript folosind Playwright și Edge. Playwright a fost instalat temporar pentru verificare, fără modificarea dependențelor din package.json.

`dist/.htaccess` include redirecturi 301 pentru aliasuri și regula atașamentului cu parametru query. `dist/_redirects` include redirecturile pentru Netlify. Pe alte servere trebuie configurate regulile echivalente. Site-ul nu a fost publicat.

## Funcții care necesită integrare înainte de lansare

`functional-review.json` enumeră formularele WordPress și galeriile Flickr/Google Drive care depind de pluginuri și scripturi externe. Formularele nu sunt simulate: paginile noi afișează un link către formularul original. Aceste linkuri sunt utile în timpul dezvoltării; după înlocuirea site-ului pe același domeniu, este necesar un backend de formulare și integrarea galeriilor înainte de lansare. HTML-ul și configurațiile sursă rămân disponibile în arhivă.

Imaginile și fișierele încă folosesc URL-urile originale `/wp-content/uploads/`. Acest director trebuie păstrat la migrarea hosting-ului; importul nu a descărcat binar întreaga bibliotecă de media. Paginile media și linkurile lor au fost importate.

Unele articole din lista React existentă aveau URL-uri presupuse pentru anii școlari. Inventarul conține exclusiv paginile publicate efectiv. Pagina 2025–2026 folosește `/structura-anului-scolar/`; pentru 2022–2023 și 2019–2020 nu există articole corespunzătoare în inventarul WordPress. Conținutul listei existente nu a fost modificat.

## Surse și regenerare

`scripts/import-wordpress.cjs` creează inventarul de bază din răspunsurile API arhivate. `scripts/complete-migration.cjs` completează conținutul din HTML-ul public și adaugă arhivele autorilor și paginile media. Ambele folosesc fișierele cache existente. Pentru actualizări la o dată ulterioară trebuie reîmprospătate explicit răspunsurile API și cache-ul; rularea scripturilor nu reprezintă o sincronizare automată a conținutului WordPress.

Build-ul și verificarea TypeScript trec. Lint-ul complet al proiectului are trei erori preexistente în `ui/command.tsx`, `ui/textarea.tsx` și `tailwind.config.ts`; paginile existente nu au fost modificate pentru a le corecta.
