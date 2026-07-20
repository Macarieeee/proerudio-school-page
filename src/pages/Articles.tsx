import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import classroomImage from "@/assets/about-classroom.jpg";
import campImage from "@/assets/summer-camp-romania.jpg";
import studentsImage from "@/assets/curriculum-students.jpg";
import libraryImage from "@/assets/facility-library.jpg";

type Article = {
  title: string;
  category: string;
  excerpt: string;
  image: string;
  href: string;
  internal?: boolean;
};

const schoolYears = [
  "2026-2027",
  "2025-2026",
  "2024-2025",
  "2023-2024",
  "2022-2023",
  "2021-2022",
  "2020-2021",
  "2019-2020",
  "2018-2019",
  "2017-2018",
  "2016-2017",
  "2015-2016",
];

const yearArticles: Article[] = schoolYears.map((year) => ({
  title: `Structura anului școlar ${year}`,
  category: "An școlar",
  excerpt: `Calendarul anului școlar ${year}: perioade de cursuri, vacanțe și date importante pentru elevi și părinți.`,
  image: classroomImage,
  href: `https://www.proerudio.ro/structura-anului-scolar-${year}/`,
}));

const editorialArticles: Article[] = [
  {
    title: "Copilul ascultă doar dacă țipi. Mit sau realitate?",
    category: "Parenting",
    excerpt: "Despre comunicarea dintre părinți și copii și alternativele sănătoase la ridicarea tonului.",
    image: studentsImage,
    href: "https://www.proerudio.ro/copilul-asculta-doar-daca-tipi-mit-sau-realitate/",
  },
  {
    title: "8 motive să-mi trimit copilul într-o tabără",
    category: "Tabere",
    excerpt: "Independență, prietenii, natură și experiențe care îi ajută pe copii să crească armonios.",
    image: campImage,
    href: "/8-motive-sa-mi-trimit-copilul-tabara",
    internal: true,
  },
  {
    title: "Examen Cambridge English – De ce să îl susții?",
    category: "Examene Cambridge",
    excerpt: "Beneficiile unei certificări Cambridge și felul în care aceasta susține parcursul academic.",
    image: classroomImage,
    href: "https://www.proerudio.ro/examen-cambridge-english-de-ce-sa-il-sustii/",
  },
  {
    title: "Expresii din limbi străine folosite în viața de zi cu zi",
    category: "Limbi străine",
    excerpt: "Expresii internaționale întâlnite frecvent în conversațiile și textele de zi cu zi.",
    image: libraryImage,
    href: "https://www.proerudio.ro/expresii-din-limbi-straine-folosite-in-viata-de-zi-cu-zi/",
  },
  {
    title: "Copii fericiți versus copii de succes – secretele unei copilării fericite",
    category: "Educație",
    excerpt: "Despre echilibrul dintre performanță, dezvoltare emoțională și bucuria copilăriei.",
    image: studentsImage,
    href: "https://www.proerudio.ro/copii-fericiti-versus-copii-de-succes-secretele-unei-copilarii-fericite/",
  },
  {
    title: "De ce limba engleză?",
    category: "Limba engleză",
    excerpt: "Motivele pentru care engleza este o investiție valoroasă în educație și în viitor.",
    image: classroomImage,
    href: "https://www.proerudio.ro/de-ce-limba-engleza/",
  },
  {
    title: "Jocul – modul perfect de a pune bazele unei educații solide",
    category: "Educație",
    excerpt: "Cum stimulează jocul curiozitatea, creativitatea și dorința naturală de a învăța.",
    image: studentsImage,
    href: "https://www.proerudio.ro/jocul-modul-perfect-de-a-pune-bazele-unei-educatii-solide/",
  },
  {
    title: "10 motive pentru a învăța o limbă străină indiferent de vârstă",
    category: "Limbi străine",
    excerpt: "Avantajele cognitive, profesionale și personale ale învățării unei limbi noi.",
    image: libraryImage,
    href: "https://www.proerudio.ro/10-motive-pentru-a-invata-o-limba-straina-indiferent-de-varsta/",
  },
  {
    title: "Cum să-i cultiv copilului meu dragul de lectură",
    category: "Lectură",
    excerpt: "Idei practice prin care cărțile pot deveni o prezență firească și iubită în viața copilului.",
    image: libraryImage,
    href: "https://www.proerudio.ro/cum-sa-i-cultiv-copilului-meu-dragul-de-lectura/",
  },
];

const articles = [editorialArticles[0], ...yearArticles.slice(0, 1), editorialArticles[1], ...yearArticles.slice(1), ...editorialArticles.slice(2)];

const ArticleCard = ({ article }: { article: Article }) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    {article.internal ? (
      <Link to={article.href} aria-label={`Citește articolul: ${article.title}`} className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2" />
    ) : (
      <a href={article.href} target="_blank" rel="noopener noreferrer" aria-label={`Citește articolul: ${article.title}`} className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2" />
    )}
    <div className="relative h-52 overflow-hidden">
      <img src={article.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">{article.category}</span>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h2 className="mb-3 text-xl font-bold leading-snug text-card-foreground transition-colors group-hover:text-primary">{article.title}</h2>
      <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">{article.excerpt}</p>
      <span className="inline-flex items-center text-sm font-semibold text-primary">Citește articolul <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
    </div>
  </article>
);

const Articles = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-[88px]">
      <section className="bg-primary py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/15"><BookOpen className="h-8 w-8" /></div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] opacity-80">Resurse ProErudio</p>
          <h1 className="text-4xl font-bold md:text-6xl">Toate articolele</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed opacity-90">Informații utile despre educație, limbi străine, parenting, tabere și calendarul școlar.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center gap-3 text-muted-foreground"><CalendarDays className="h-5 w-5 text-primary" /><span>{articles.length} articole și resurse</span></div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => <ArticleCard key={article.title} article={article} />)}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Articles;
