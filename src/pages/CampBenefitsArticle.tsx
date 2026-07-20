import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import campImage from "@/assets/summer-camp-romania.jpg";

const reasons = [
  {
    title: "Dezvoltarea independenței",
    lead: "În tabără, copiii sunt scoși din mediul lor obișnuit.",
    text: [
      "Departe de familie, au ocazia să se descopere în interacțiunea cu alți copii și adulți care nu fac parte din anturajul lor obișnuit. Învață să aibă grijă de ei înșiși, să ia decizii și să gestioneze aspecte ale rutinei zilnice — de la vestimentația potrivită până la activitățile la care vor să participe.",
      "Sunt încurajați să fie independenți, dar rămân supravegheați. Astfel învață să fie responsabili și își pot testa limitele în siguranță, alături de ghizi, instructori și supraveghetori dedicați.",
    ],
  },
  {
    title: "Creșterea încrederii în sine",
    lead: "A-ți face prieteni noi este o experiență cu teamă, curiozitate, entuziasm și satisfacție.",
    text: [
      "Fără părinți alături pentru a face primul pas, copilul învață să-și asculte instinctul, să se prezinte și să creeze singur conexiuni. În tabără, copiii descoperă că toți sunt în aceeași situație și formează rapid o comunitate.",
      "Încrederea se dezvoltă atunci când contribuția lor contează: ideea le este pusă în practică, opinia le este ascultată, iar reușitele devin cu adevărat ale lor.",
    ],
  },
  {
    title: "Pe mâini bune și în siguranță",
    lead: "Tabăra oferă echilibrul liniștitor dintre libertatea copilului și siguranța sa.",
    text: [
      "Pentru copiii crescuți în oraș, o săptămână de tabără poate însemna o libertate pe care nu au mai cunoscut-o: timp petrecut afară, aer curat, alergare și prietenii noi, departe de trafic și aglomerație.",
      "Accesul redus la calculator, tabletă, televizor și telefon este o vacanță binemeritată pentru mintea și sufletul ambelor părți: copii și părinți.",
    ],
  },
  {
    title: "Întărirea abilităților sociale",
    lead: "În tabără se pot lega prietenii adevărate, uneori pentru o viață.",
    text: [
      "Un grup divers le dă copiilor șansa să întâlnească persoane compatibile și să-și extindă cercul de prieteni. Experiența este valoroasă înaintea schimbării colectivului și îi ajută să devină mai toleranți.",
      "Departe de ecrane, învață să discute, să caute împreună soluții, să facă planuri și să-și împărtășească părerile și sentimentele — adică să comunice cu adevărat.",
    ],
  },
  {
    title: "Interese noi",
    lead: "Programul divers le permite copiilor să încerce lucruri pe care poate nu le-ar fi ales singuri.",
    text: ["Sporturi, ore de engleză, drumeții, jocuri de echipă, dans și karaoke pot aprinde o pasiune nouă sau pot deschide perspective neașteptate. Copiii descoperă că distracția adevărată nu este doar în fața unui ecran, ci în experiențele trăite împreună."],
  },
  {
    title: "Apreciere pentru natură",
    lead: "Nicio poveste sau înregistrare nu poate înlocui mirosul pădurii și cântecul păsărilor.",
    text: [
      "Taberele sunt, de obicei, mai aproape de natură și mai departe de agitația orașului. Copiii pot explora direct lumea din jur: atingerea unui melc, gustul unei coacăze sălbatice, o potecă nouă sau liniștea unei seri în aer liber.",
      "Activitățile în natură le oferă ocazia să vadă, să simtă, să miroasă și să încerce lucruri noi, construind o relație autentică cu mediul înconjurător.",
    ],
  },
  {
    title: "Investiție în amintiri plăcute",
    lead: "Copiii se întorc adesea după una dintre cele mai frumoase săptămâni ale lor.",
    text: ["Plecă acasă cu prieteni noi, multe experiențe și mai multă încredere în propriile forțe. Amintirile taberei rămân alături de ei peste ani și devin parte din povestea copilăriei lor."],
  },
  {
    title: "Exersarea abilităților de lider",
    lead: "Tabăra este un mediu firesc pentru inițiativă, alegeri și lucru în echipă.",
    text: [
      "Copiii iau decizii, coordonează activități și contribuie la proiecte comune. Unii se remarcă prin inițiativă, iar rolurile se conturează natural, într-un spațiu în care fiecare poate descoperi ce aduce valoros echipei.",
      "Timpul petrecut față în față îi ajută să observe mai bine emoțiile celor din jur și să-și exerseze inteligența socială și emoțională — abilități tot mai importante într-o copilărie dominată de tehnologie.",
    ],
  },
];

const CampBenefitsArticle = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-[88px]">
      <section className="relative isolate min-h-[560px] overflow-hidden">
        <img src={campImage} alt="Copii într-o tabără de vară" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/25" />
        <div className="container relative mx-auto flex min-h-[560px] items-center px-4 py-20">
          <div className="max-w-3xl text-background">
            <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-background/80 hover:text-background">
              <ArrowLeft className="h-4 w-4" /> Înapoi la pagina principală
            </Link>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-background/75">Educație • Tabere pentru copii</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl"><span className="text-primary">8 motive</span> să-mi trimit copilul într-o tabără</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-background/90 md:text-xl">Vara este o oportunitate de creștere: experiențe noi, mai multă autonomie, prietenii și amintiri care rămân.</p>
          </div>
        </div>
      </section>

      <article>
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="text-xl leading-9 text-foreground md:text-2xl md:leading-10">Când planificăm cu grijă educația și activitățile extracurriculare ale copiilor, merită să ne amintim că <strong className="text-primary">verile sunt o oportunitate, nu timp pierdut</strong>. O tabără este un mod ideal de a încerca activități noi — inclusiv exersarea limbii engleze —, de a deveni mai responsabil și, mai ales, de a se distra și a-și face prieteni.</p>
          </div>
        </section>

        <section className="bg-muted/35 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Beneficiile taberei</p>
              <h2 className="text-3xl font-bold text-foreground md:text-5xl">Mai mult decât o vacanță</h2>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
              {reasons.map((reason, index) => (
                <section key={reason.title} className="rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg md:p-8">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground shadow-md">{index + 1}</div>
                    <div className="flex min-h-14 items-center"><h3 className="text-2xl font-bold text-card-foreground">{reason.title}</h3></div>
                  </div>
                  <p className="mb-4 text-lg font-semibold leading-relaxed text-foreground">{reason.lead}</p>
                  <div className="space-y-4 leading-7 text-muted-foreground">{reason.text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center">
            <div className="max-w-2xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] opacity-80">O vară de neuitat</p><h2 className="text-3xl font-bold md:text-4xl">Descoperă taberele ProErudio</h2><p className="mt-4 text-lg leading-relaxed opacity-90">Engleză, aventură, natură și prietenii într-un program construit pentru copii.</p></div>
            <Button asChild size="lg" variant="secondary" className="shrink-0 px-7"><a href="https://tabere.proerudio.ro" target="_blank" rel="noopener noreferrer">Vezi programele <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
          </div>
        </section>
      </article>
    </main>
    <Footer />
  </div>
);

export default CampBenefitsArticle;
