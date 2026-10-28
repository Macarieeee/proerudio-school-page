import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Facebook, Instagram, Mail, Menu, X, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import teamMembers from "@/data/team-members.json";
import logoImage from "@/assets/ProErudioSchoolofEnglish.svg";

type Child = { label: string; to: string };
type Section = { title: string; items: Child[] };
type Item = { label: string; to?: string; children?: Child[]; sections?: Section[]; align?: string };
const c = (label: string, to: string): Child => ({ label, to });
const personalDevelopment = [
  c('Dezvoltare emoțională cu psiholog pentru copii 6–9 ani', '/ateliere-de-dezvoltare-emotionala-pentru-copii-1/'),
  c('Dezvoltare emoțională cu psiholog pentru copii 9–12 ani', '/ateliere-de-dezvoltare-emotionala-pentru-copii-2/'),
  c('Cursuri de teatru', '/alte-cursuri-pentru-copii/cursuri-de-dezvoltare-personala-copii/cursuri-de-teatru-pentru-copii/'),
];
const nestedEntries: Record<string, Child[]> = {
  '/echipa-pro-erudio/': teamMembers,
  '/alte-cursuri-pentru-copii/cursuri-de-dezvoltare-personala-copii/': personalDevelopment,
};

const navigation: Item[] = [
  { label: "Pro Erudio", to: "/", children: [c("Echipa Pro Erudio", "/echipa-pro-erudio/"),c("Teste de limba engleză", "/test-de-plasare/"), c("Înscriere cursuri 2026", "/inscriere-cursuri-pro-erudio/"), c("Înscriere cursuri de vară", "/inscriere-cursuri-pentru-copii-si-adolescenti/"),c("Fă o faptă bună", "/fa-o-fapta-buna/"), c("Dă valoare diplomelor tale", "/da-valoare-diplomelor-tale/"),   c("File de poveste", "/galerii-foto/"), c("Articole Pro Erudio", "/articole-pro-erudio/")] },
  { label: "Cursuri de limba engleză", to: "/cursuri-de-limba-engleza-pentru-copii-si-adolescenti/", align: "left-1/2 w-[min(900px,calc(100vw-2rem))] -translate-x-1/2", sections: [
    { title: "Cursuri pentru copii de 4 – 11 ani", items: [c("Curs de limba engleză – JOIN US IN ENGLISHLAND", "/cursuri-de-limba-engleza-pentru-copii-de-4-11-ani/curs-de-limba-engleza-join-us-in-englishland/"), c("Curs de limba engleză – JOIN US FOR ENGLISH", "/cursuri-de-limba-engleza-pentru-copii-de-4-11-ani/curs-de-limba-engleza-join-us-for-english/")] },
    { title: "Cursuri pentru copii de 12–19 ani", items: [c("Curs de limba engleză HEAD FOR KET/PET", "/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-ketpet/"), c("Curs de limba engleză HEAD FOR FCE/CAE/CPE", "/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-fce-cae-cpe/"), c("Curs de limba engleză HEAD FOR IELTS", "/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-ielts/"), c("Curs de limba engleză pentru tineri HEAD FOR TOEFL", "/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-pentru-tineri-head-for-toefl/")] },
    { title: "Pregătire examene Cambridge", items: [c("Modul opțional de pregătire pentru examenele Cambridge English", "/modul-optional-de-pregatire-pentru-examenele-cambridge-english/"), c("Cambridge Mock Tests", "/cambridge-mock-tests/"), c("Cursuri interactive cu profesori internaționali", "/cursuri-de-weekend-in-limba-engleza/cursuri-interactive-de-conversatie-cu-profesori-internationali/")] },
  ] },
  { label: "Alte cursuri pentru copii", to: "/alte-cursuri-pentru-copii/", children: [c("Cursuri de limba germană", "/alte-cursuri-pentru-copii/cursuri-de-limba-germana-pentru-copii-si-adolescenti/"), c("Parler français, c’est cool!", "/parler-francais-cest-cool/"), c("Cursuri de dezvoltare personală", "/alte-cursuri-pentru-copii/cursuri-de-dezvoltare-personala-copii/"), c("Descoperă Magia Dansului!", "/descopera-magia-dansului/"), c("Haide să învățăm limba japoneză!", "/cursuri-de-limba-japoneza-pentru-copii/")] },
  { label: "Cursuri de vară", to: "/cursuri-de-vara/", align: "left-1/2 w-[min(1200px,calc(100vw-2rem))] -translate-x-1/2", sections: [
    { title: "Cursuri vară – nivel A1 și A2", items: [c("Storytime! (Copii de 4 – 7 ani)", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/storytime-copii-4-7-ani/"), c("Storytime! (Copii de 8 – 11 ani)", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/storytime-copii-8-11-ani/"), c("Animal Kingdom (Copii de 8 – 11 ani)", "/animal-kingdom/"), c("English Summer Courses (Copii de 5 – 13 ani)", "/english-summer-courses/"), c("A World Of Words (6 – 8 ani)", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/a-world-of-words/"), c("Summer Fun with My Favourite Teacher", "/summer-fun-with-my-favourite-teacher/")] },
    { title: "Cursuri vară – nivel A2 și B1", items: [c("English through Songs (Copii de 9 – 12 ani)", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/english-through-songs-copii-9-12-ani/"), c("Be DRAMAtic! (Copii de 9 – 12 ani)", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/be-dramatic-copii-9-12-ani/"), c("A World Of Words 2 (9 – 12 ani)", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/a-world-of-words-2/"), c("Editors’ Club (10–13 ani)", "/cursuri-de-vara/editors-club/")] },
    { title: "Cursuri vară – nivel B1 și B2", items: [c("ENGLISH SUMMER BOOST – Pregătire pentru examenele Cambridge", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/english-summer-boost/"), c("Find your voice (Copii de 13 – 18 ani)", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/english-over-a-glass-of-lemonade-copii-13-18-ani/"), c("Cinematics (Copii de 13 – 18 ani)", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/cinematics-copii-13-18-ani/")] },
    { title: "Cursuri vară – alte limbi străine", items: [c("Sprechen Sie Deutsch? – Copii 4 – 8 ani", "/cursuri-de-vara/cursuri-de-vara-in-limba-germana/sprechen-sie-deutsch-copii-5-8-ani/"), c("Sprechen und Schreiben Sie Deutsch – Copii 9 – 13 ani", "/cursuri-de-vara/cursuri-de-vara-in-limba-germana/sprechen-sie-deutsch-copii-9-13-ani/"), c("Apprendre en s’amusant (Copii de 10 – 13 ani)", "/apprendre-en-samusant/"), c("Hola Spaniola! (Copii de 9 – 14 ani)", "/cursuri-de-vara/alte-cursuri-de-vara/hola-spaniola/"), c("Japonia Cool – Introducere în limba și cultura japoneză", "/cursuri-de-vara/alte-cursuri-de-vara/japonia-cool/")] },
    { title: "Dezvoltare personală", items: [c("Happy Confident Me", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/happy-confident-me/"), c("Emoțiile contează", "/alte-cursuri-pentru-copii/cursuri-de-dezvoltare-personala-copii/curs-de-dezvoltare-emotionala-cu-psiholog/"), c("Arts and Crafts", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/arts-and-crafts/"), c("Călătorie în jurul lumii în pași de dans!", "/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/calatorie-in-pasi-de-dans/")] },
  ] },
  { label: "Evenimente", to: "/evenimente/", align: "right-0 w-80", children: [c("Atelierul de dansuri de Crăciun", "/atelier-de-dansuri-de-craciun/"), c("Atelierul de dansuri populare", "/atelier-de-dansuri-populare/"), c("Calendar ateliere dezvoltare emoțională cu psiholog", "/ateliere-de-dezvoltare-emotionala-pentru-copii-1/"), c("Halloween Party", "/halloween-party/"), c("Bring a friend week", "/bring-a-friend-week/"), c("Atelierul lui Moș Crăciun", "/atelierul-lui-mos-craciun/"), c("Seara filmului", "/seara-filmului/"), c("Simulare Cambridge English Exams", "/simulare-cambridge-english-exams/"), c("Surprize de Moș Nicolae", "/mos-nicolae-vine-cu-surprize-la-pro-erudio/"), c("Playday @ Pro Erudio", "/playday-pro-erudio/")] },
  { label: "Tabere", to: "/tabere/" },
  { label: "Jurnale de tabără – foto & video", to: "/galerii-foto/", align: "right-0 w-80", children: [c("JURNAL DE TABĂRĂ RAMSGATE – 2019", "/jurnal-de-tabara-ramsgate-2019/"), c("English Explorers Camp – CHEIA 2019", "/english-explorers-camp-cheia-2019/"), c("ENGLISH EXPLORERS CAMP 2016", "/english-explorer-camp-2016/"), c("WYCLIFF COLLEGE 2016", "/jurnal-de-tabara-wycliff-college-2016/"), c("ENGLISH ADVENTURE CAMP 2015", "/jurnal-de-tabara-english-adventure-camp-2015/"), c("WINCHESTER 2018", "/tabara-in-anglia-2018/"), c("ENGLISH EXPLORER CAMP 2021", "/jurnal-de-tabara-english-explorers-camp-2021/")] },
  { label: "Contact", to: "/contact/" },
];

const BasicEntry = ({ item, close }: { item: Child; close?: () => void }) => item.to
  ? <Link to={item.to} onClick={close} className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{item.label}</Link>
  : <span aria-disabled="true" className="block rounded-md px-3 py-2 text-sm text-muted-foreground">{item.label}</span>;

const Entry = ({ item, close }: { item: Child; close?: () => void }) => {
  const [open, setOpen] = useState(false);
  const children = nestedEntries[item.to];
  if (!children) return <BasicEntry item={item} close={close} />;
  return <div className="team-nav-entry" data-open={open} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); event.currentTarget.querySelector('button')?.focus(); } }}>
    <div className="flex items-center justify-between"><BasicEntry item={item} close={close} /><button type="button" className="rounded-md p-2 hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring" aria-label={`Afișează submeniul ${item.label}`} aria-expanded={open} onClick={() => setOpen(!open)}><ChevronDown className="h-4 w-4 2xl:-rotate-90" /></button></div>
    <div className="team-nav-submenu"><div className="team-nav-list" aria-label={item.label}>{children.map(child => <BasicEntry key={child.to} item={child} close={() => { setOpen(false); close?.(); }} />)}</div></div>
  </div>;
};

const Content = ({ item, close }: { item: Item; close?: () => void }) => item.sections ? (
  <div className={`grid gap-5 p-5 2xl:grid-cols-3 ${item.sections.length === 5 ? "2xl:grid-cols-5" : ""}`}>
    {item.sections.map((section) => <section key={section.title} className="min-w-0"><h3 className="mb-2 px-3 text-sm font-semibold text-primary">{section.title}</h3><div className="space-y-0.5">{section.items.map((entry) => <Entry key={entry.label} item={entry} close={close} />)}</div></section>)}
  </div>
) : <div className="w-72 p-2">{item.children?.map((entry) => <Entry key={entry.label} item={entry} close={close} />)}</div>;

const MainLabel = ({ item, mobile, close }: { item: Item; mobile?: boolean; close?: () => void }) => {
  const className = mobile
    ? "text-foreground hover:text-primary transition-colors font-medium"
    : "flex items-center gap-1 whitespace-nowrap text-xs text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-y-[-2px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const contents = <>{item.label}{!mobile && (item.children || item.sections) && <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />}</>;
  return item.to ? <Link to={item.to} onClick={close} aria-haspopup={!mobile && (item.children || item.sections) ? "menu" : undefined} className={className}>{contents}</Link> : <span className={className}>{contents}</span>;
};

const EnhancedHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordion, setAccordion] = useState<string | null>(null);
  const [closedDesktopMenu, setClosedDesktopMenu] = useState<string | null>(null);
  const close = () => { setMobileOpen(false); setAccordion(null); };
  const closeDesktop = (label: string) => {
    setClosedDesktopMenu(label);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { close(); (document.activeElement as HTMLElement | null)?.blur(); } };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
    <div className="bg-muted/50 py-2 text-sm"><div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-2 text-muted-foreground"><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary animate-pulse" />Program: 9:00 - 18:00</span></div>
      <div className="flex items-center gap-4 text-muted-foreground"><a href="mailto:office@proerudio.ro" className="flex items-center gap-1 hover:text-primary transition-colors"><Mail className="w-4 h-4" /><span>office@proerudio.ro</span></a><div className="flex items-center gap-2">
        <a href="https://www.facebook.com/proerudio?locale=ro_RO" target="_blank" rel="noopener noreferrer" aria-label="Facebook ProErudio"><Facebook className="w-4 h-4 hover:text-primary transition-colors" /></a>
        <a href="https://www.instagram.com/pro_erudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram ProErudio"><Instagram className="w-4 h-4 hover:text-primary transition-colors" /></a>
        <a href="https://www.youtube.com/@ProerudioRo" target="_blank" rel="noopener noreferrer" aria-label="YouTube ProErudio"><Youtube className="w-4 h-4 hover:text-primary transition-colors" /></a>
      </div></div>
    </div></div>
    <div className="container mx-auto px-4"><div className="flex items-center justify-between h-20">
      <Link to="/" className="flex items-center"><img src={logoImage} alt="ProErudio School of English" className="h-14 w-auto max-w-[210px] object-contain" /></Link>
      <nav className="relative hidden 2xl:flex items-center gap-3" aria-label="Navigație principală">{navigation.map((item) => {
        const hasMenu = !!(item.children || item.sections);
        const wasClosed = closedDesktopMenu === item.label;
        return <div key={item.label} onMouseLeave={() => setClosedDesktopMenu(null)} className={`group ${item.sections?.length === 5 ? "static" : "relative"}`}><MainLabel item={item} />
          {hasMenu && <div className={`absolute top-full z-[70] max-w-[calc(100vw-2rem)] pt-8 transition-all duration-200 ${wasClosed ? "invisible pointer-events-none opacity-0 translate-y-1" : "invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0"} ${item.align || "left-0"}`}><div className={`${item.children?.some(child => nestedEntries[child.to]) ? "overflow-visible" : "max-h-[calc(100vh-9rem)] overflow-y-auto"} rounded-lg border bg-popover text-popover-foreground shadow-md`}><Content item={item} close={() => closeDesktop(item.label)} /></div></div>}
        </div>;
      })}</nav>
      <div className="hidden 2xl:flex items-center gap-4"><Button asChild className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"><Link to="/inscriere-cursuri-pro-erudio/">Înscrie-te</Link></Button></div>
      <button className="2xl:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}>{mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
    </div>
    {mobileOpen && <nav className="2xl:hidden max-h-[calc(100vh-7rem)] overflow-y-auto py-4 border-t" aria-label="Navigație mobilă"><div className="flex flex-col gap-4">{navigation.map((item) => {
      const hasMenu = !!(item.children || item.sections); const open = accordion === item.label;
      return <div key={item.label}><div className="flex items-center justify-between gap-2"><MainLabel item={item} mobile close={close} />{hasMenu && <button type="button" className="rounded-md p-2 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={() => setAccordion(open ? null : item.label)} aria-expanded={open} aria-label={`${open ? "Închide" : "Deschide"} submeniul ${item.label}`}><ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} /></button>}</div>{hasMenu && open && <div className="mt-2 ml-2 overflow-hidden rounded-lg border bg-popover"><Content item={item} close={close} /></div>}</div>;
    })}<Button asChild className="bg-primary hover:bg-primary/90 w-full"><Link to="/inscriere-cursuri-pro-erudio/" onClick={close}>Înscrie-te</Link></Button></div></nav>}
    </div>
  </header>;
};

export default EnhancedHeader;
