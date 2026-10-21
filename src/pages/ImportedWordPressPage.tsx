import RelatedContentCards from '@/components/RelatedContentCards';
import { expandImportedCardGrid } from '@/lib/expand-card-grids';
import { cardForPage, formatRelatedCollections } from '@/lib/related-content';
import pageManifest from '@/data/wordpress-manifest.json';
import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpenCheck, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import classroomImage from "@/assets/about-classroom.jpg";

const wordpressFiles = import.meta.glob<string>("../import/*.html", {
  eager: true,
  query: "?raw",
  import: "default",
});

export type ImportedPageDefinition = {
  slug: string;
  file: string;
  title: string;
  eyebrow: string;
  summary: string;
};

export const importedPages: ImportedPageDefinition[] = [
  { slug: "da-valoare-diplomelor-tale", file: "da-valoare-diplomelor-tale.html", title: "Dă valoare diplomelor tale", eyebrow: "Pro Erudio", summary: "Performanța academică devine mai valoroasă atunci când este susținută de competențe reale de comunicare în limba engleză." },
  { slug: "cariere", file: "cariere.html", title: "Cariere la Pro Erudio", eyebrow: "Echipa Pro Erudio", summary: "Transformă dragostea pentru copii și pasiunea pentru educație într-o profesie care contează." },
  { slug: "fa-o-fapta-buna", file: "fa-o-fapta-buna.html", title: "Fă o faptă bună", eyebrow: "Pro Erudio", summary: "Ajută-ne să oferim acces la educație copiilor motivați care au nevoie de sprijin." },
  { slug: "curs-de-limba-engleza-join-us-in-englishland", file: "curs-de-limba-engleza-join-us-in-englishland.html", title: "Curs de limba engleză – JOIN US IN ENGLISHLAND", eyebrow: "Cursuri pentru copii de 4–11 ani", summary: "Primii pași în limba engleză, într-un mediu prietenos, interactiv și potrivit vârstei." },
  { slug: "curs-de-limba-engleza-join-us-for-english", file: "curs-de-limba-engleza-join-us-for-english.html", title: "Curs de limba engleză – JOIN US FOR ENGLISH", eyebrow: "Cursuri pentru copii de 4–11 ani", summary: "Engleză învățată natural prin comunicare, activități și progres constant." },
  { slug: "curs-de-limba-engleza-head-for-ketpet", file: "curs-de-limba-engleza-head-for-ketpet.html", title: "Curs de limba engleză HEAD FOR KET/PET", eyebrow: "Cursuri pentru copii de 12–19 ani", summary: "Pregătire structurată pentru examenele Cambridge English A2 Key și B1 Preliminary." },
  { slug: "curs-de-limba-engleza-head-for-fce-cae-cpe", file: "curs-de-limba-engleza-head-for-fce-cae-cpe.html", title: "Curs de limba engleză HEAD FOR FCE/CAE/CPE", eyebrow: "Cursuri pentru copii de 12–19 ani", summary: "Pregătire avansată pentru certificările Cambridge English recunoscute internațional." },
  { slug: "curs-de-limba-engleza-head-for-ielts", file: "curs-de-limba-engleza-head-for-ielts.html", title: "Curs de limba engleză HEAD FOR IELTS", eyebrow: "Cursuri pentru copii de 12–19 ani", summary: "Strategie, practică și feedback pentru scorul IELTS de care ai nevoie." },
  { slug: "curs-de-limba-engleza-pentru-tineri-head-for-toefl", file: "curs-de-limba-engleza-pentru-tineri-head-for-toefl.html", title: "Curs de limba engleză pentru tineri HEAD FOR TOEFL", eyebrow: "Cursuri pentru copii de 12–19 ani", summary: "Pregătire completă pentru formatul TOEFL iBT și admiterea la instituții internaționale." },
  { slug: "modul-optional-de-pregatire-pentru-examenele-cambridge-english", file: "modul-optional-de-pregatire-pentru-examenele-cambridge-english.html", title: "Modul opțional de pregătire pentru examenele Cambridge English", eyebrow: "Pregătire examene Cambridge", summary: "Consolidare și simulări înaintea examenelor Cambridge English." },
  { slug: "cambridge-mock-tests", file: "cambridge-mock-tests.html", title: "Cambridge Mock Tests", eyebrow: "Pregătire examene Cambridge", summary: "Simulări în condiții de examen pentru evaluarea realistă a nivelului și a progresului." },
  { slug: "cursuri-interactive-de-conversatie-cu-profesori-internationali", file: "cursuri-interactive-de-conversatie-cu-profesori-internationali.html", title: "Cursuri interactive cu profesori internaționali", eyebrow: "Pregătire examene Cambridge", summary: "Conversație autentică, fluență și încredere alături de traineri internaționali." },
];


const wordpressMedia: Record<string, string> = {
  "11736": "https://www.proerudio.ro/wp-content/uploads/2021/10/18765591_1103021813132659_1325564205651648286_n_35905043594_o.jpg",
  "11735": "https://www.proerudio.ro/wp-content/uploads/2021/10/18740171_1103023309799176_4038041239255339180_n_36692422906_o.jpg",
  "11734": "https://www.proerudio.ro/wp-content/uploads/2021/10/18700334_1103016859799821_23369677984505047_n_36692423086_o.jpg",
  "11733": "https://www.proerudio.ro/wp-content/uploads/2021/10/18740812_1103022756465898_9074289970655314622_n_36569593442_o.jpg",
  "11800": "https://www.proerudio.ro/wp-content/uploads/2021/10/36569675332_20a9724da9_c.jpg",
  "11801": "https://www.proerudio.ro/wp-content/uploads/2021/10/36569675522_dbd826dc30_c.jpg",
  "11803": "https://www.proerudio.ro/wp-content/uploads/2021/10/35905043594_bd1d073f79_c.jpg",
  "11804": "https://www.proerudio.ro/wp-content/uploads/2021/10/36692422906_aed4a875a2_c.jpg",
  "11805": "https://www.proerudio.ro/wp-content/uploads/2021/10/36600283611_445c22d2e4_c.jpg",
  "11806": "https://www.proerudio.ro/wp-content/uploads/2021/10/36569593442_878f95e67a_c.jpg",
  "11813": "https://www.proerudio.ro/wp-content/uploads/2021/10/36739503115_d6b623ba4b_c.jpg",
  "11818": "https://www.proerudio.ro/wp-content/uploads/2021/10/36739502265_0d3c144ebe_c.jpg",
  "11817": "https://www.proerudio.ro/wp-content/uploads/2021/10/36739502575_c5958ab62e_c.jpg",
  "11815": "https://www.proerudio.ro/wp-content/uploads/2021/10/36739502775_360cfd605a_c.jpg",
  "11816": "https://www.proerudio.ro/wp-content/uploads/2021/10/35929955663_dee2dc0350_c.jpg",
  "11814": "https://www.proerudio.ro/wp-content/uploads/2021/10/35905085534_471a92432e_c.jpg",
  "11821": "https://www.proerudio.ro/wp-content/uploads/2021/10/36739502175_7225108617_c.jpg",
};

const renderWordPressGallery = (ids: string) => {
  const images = ids.split(",").map((id) => ({ id: id.trim(), src: wordpressMedia[id.trim()] })).filter((image) => image.src);
  if (!images.length) return "";
  return `<div class="wordpress-gallery" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">${images.map((image) => `<a href="${image.src}" aria-label="Mărește imaginea"><img src="${image.src}" alt="Imagine de la cursurile Pro Erudio" loading="lazy" /></a>`).join("")}</div>`;
};

const findSource = (file: string) => {
  const entry = Object.entries(wordpressFiles).find(([path]) => path.endsWith(`/${file}`));
  return entry?.[1] ?? "";
};

const cleanWordPressHtml = (source: string) => {
  const galleries: string[] = [];
  const withPlaceholders = source.replace(/\[gallery[^\]]*ids=["']([^"']+)["'][^\]]*\]/gi, (_match, ids: string) => {
    const index = galleries.push(ids) - 1;
    return `__PROERUDIO_GALLERY_${index}__`;
  });

  return withPlaceholders
    .replace(/<!--([\s\S]*?)-->/g, "")
    .replace(/<div[^>]*class=["'][^"']*fb-like[^"']*["'][^>]*><\/div>/gi, "")
    .replace(/\[(?:\/?)[a-z_][^\]]*\]/gi, "")
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, "")
    .replace(/<h3[^>]*>\s*Alte cursuri de limba engleza pentru copii de 12-19 ani:\s*<\/h3>/gi, "")
    .replace(/\s(?:style|class|id|width|height|align)=["'][^"']*["']/gi, "")
    .replace(/href=(["'])https?:\/\/(?:www\.)?proerudio\.ro(?!\/wp-content\/)/gi, "href=$1")
    .replace(/<p>\s*(__PROERUDIO_GALLERY_\d+__)\s*<\/p>/gi, "$1")
    .replace(/__PROERUDIO_GALLERY_(\d+)__/g, (_match, index: string) => renderWordPressGallery(galleries[Number(index)]))
    .replace(/<p>\s*<\/p>/gi, "")
    .trim();
};

const ImportedWordPressPage = ({ page }: { page: ImportedPageDefinition }) => {
  const currentPage = pageManifest.find(p => p.slug === page.slug);
  const content = formatRelatedCollections(cleanWordPressHtml(findSource(page.file)), currentPage?.path || `/${page.slug}/`);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const relatedYouthCourses = /Cursuri pentru copii|Pregătire examene/.test(page.eyebrow)
    ? importedPages.filter(candidate => candidate.eyebrow === page.eyebrow && candidate.slug !== page.slug)
    : [];

  useEffect(() => {
    document.title = `${page.title} | Pro Erudio`;
  }, [page.title]);

  useEffect(() => {
    if (!expandedImage) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setExpandedImage(null); };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [expandedImage]);

  const openGalleryImage = (event: MouseEvent<HTMLElement>) => {
    if (expandImportedCardGrid(event.target)) return;
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(".wordpress-gallery a");
    if (!link) return;
    event.preventDefault();
    setExpandedImage(link.href);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[88px]">
        <section className="relative isolate overflow-hidden bg-foreground">
          <img src={classroomImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-primary/60" />
          <div className="container relative mx-auto px-4 py-20 md:py-24">
            <div className="max-w-4xl text-background">
              <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-background/80 transition-colors hover:text-background">
                <ArrowLeft className="h-4 w-4" /> Înapoi la pagina principală
              </Link>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-background/75">{page.eyebrow}</p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">{page.title}</h1>
              <p className="max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl">{page.summary}</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
              <article onClick={openGalleryImage} className="wordpress-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10">
                <div dangerouslySetInnerHTML={{ __html: content }} />
                {relatedYouthCourses.length > 0 && (
                  <section className="not-prose mt-14 border-t pt-10">
                    <div className="mb-6">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Continuă pregătirea</p>
                      <h2 className="!m-0 !border-0 !p-0 !text-xl font-bold !text-foreground md:!text-2xl">{page.eyebrow === 'Pregătire examene Cambridge' ? 'Alte cursuri de pregătire pentru examene' : `Alte ${page.eyebrow.toLowerCase()}`}</h2>
                    </div>
                    <RelatedContentCards cards={relatedYouthCourses.flatMap(course => {
                      const target = pageManifest.find(p => p.slug === course.slug);
                      return target ? [{ ...cardForPage(target), title: course.title, summary: course.summary }] : [];
                    })} />
                  </section>
                )}
              </article>
              <aside className="h-fit rounded-2xl border bg-muted/40 p-6 lg:sticky lg:top-36">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <BookOpenCheck className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-3 text-xl font-bold text-foreground">Ai nevoie de mai multe informații?</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">Echipa Pro Erudio te ajută să alegi cursul și nivelul potrivit.</p>
                <Button asChild className="w-full">
                  <Link to="/contact">Contactează-ne <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {expandedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Imagine mărită"
          onClick={() => setExpandedImage(null)}
        >
          <button type="button" onClick={() => setExpandedImage(null)} className="absolute right-4 top-4 rounded-full bg-background/90 p-2 text-foreground shadow-lg transition-transform hover:scale-105" aria-label="Închide imaginea">
            <X className="h-6 w-6" />
          </button>
          <img src={expandedImage} alt="Imagine mărită de la cursurile Pro Erudio" className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default ImportedWordPressPage;
