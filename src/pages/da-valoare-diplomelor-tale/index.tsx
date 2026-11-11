import ContentPageLayout from '@/components/ContentPageLayout';
import DiplomasFacebookPost from '@/components/DiplomasFacebookPost';
import heroImage from "@/assets/da-valoare-diplomelor-tale.jpg";

export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body py-16 md:py-20" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground"}>
      <img src={heroImage} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
      <div className={"absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/65 to-foreground/20"}></div>
      <div className={"container relative mx-auto px-4 py-20 md:py-24"}>
        <div className={"max-w-4xl text-background"}>
          <a className={"mb-8 inline-flex items-center gap-2 text-sm font-semibold text-background/80 transition-colors hover:text-background"} href={"/"}>
            <svg xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-arrow-left h-4 w-4"}>
              <path d={"m12 19-7-7 7-7"}></path>
              <path d={"M19 12H5"}></path>
            </svg>
            {" Înapoi la pagina principală"}
          </a>
          <p className={"mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-background/75"}>
            {"Pro Erudio"}
          </p>
          <h1 className={"mb-6 text-4xl font-bold leading-tight md:text-6xl"}>
            {"Dă valoare diplomelor tale"}
          </h1>
          <p className={"max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl"}>
            {"Citește mai jos ca să afli ce ai de făcut pentru a primi un curs de vară gratuit de la Pro Erudio."}
          </p>
        </div>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Dă valoare diplomelor tale"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2019/06/da-valoare-diplomelor-tale.jpg"} alt={"Dă valoare diplomelor tale"} decoding={"async"} />
        <h1>
          {"Dă valoare diplomelor tale"}
        </h1>
        <p>
          {"Citește mai jos ca să afli ce ai de făcut pentru a primi un curs de vară gratuit de la Pro Erudio."}
        </p>
      </section>
      <div>
        <h3>
          {"Așa cum te-am obișnuit, vara îți răsplătim pasiunea pentru limba engleză și consecvența cu care înveți alături de noi."}
        </h3>
        <p>
          <span>
            {"Dacă ai încheiat cel puțin patru ani de cursuri, te invităm să răsfoiești amintirile și să găsești patru diplome primite la final de an școlar. O poți include și pe cea de anul acesta! Ele îți pot aduce un curs de vară de limba engleză gratuit.\n"}
            <br />
            {"\nAi muncit mult, iar acum este timpul să te bucuri de o vară în care învățarea se îmbină cu distracția!"}
          </span>
        </p>
        <h3>
          {"Cum participi?"}
        </h3>
        <span>
          {"1. Verifică de câți ani înveți alături de noi. Dacă ai încheiat cel puțin patru ani, poți beneficia de ofertă."}
          <br />
          {"Ține cont de participările anterioare. Dacă ai încheiat deja cinci ani și nu ai beneficiat până acum de ofertă, te așteptăm vara aceasta! Dacă ai participat deja, poți beneficia din nou de cursul gratuit o dată la doi ani."}
          <br />
          {"\n2. Găsește cele patru diplome primite la final de an școlar.\n"}
          <br />
          {"3. Fotografiază-le creativ și publică fotografia într-un comentariu la postarea noastră din social media dedicată acestui proiect.\n"}
          <br />
          {"4. Așteaptă să te contactăm telefonic pentru a stabili programul cursului.\n"}
        </span>
        <h3>
          {"Îți lipsește o diplomă? Avem un plan B! 😉"}
        </h3>
        <p>
          <span>
            {"Lasă-ne un comentariu cu o amintire sau un indiciu din anul respectiv: numele profesorului, o activitate, decorul ori amenajarea sălii. Ne poate ajuta și un raport de progres datat sau o pagină dintr-un caiet vechi."}
          </span>
        </p>
        <p>
          <span>
            {"Povestește-ne cât mai concret, iar noi vom căuta în arhivă. 😊"}
          </span>
        </p>
        <p>
          <span>
            <strong>
              {"Locurile nu sunt limitate, însă campania este activă doar în perioada 5-18 iunie."}
            </strong>
          </span>
        </p>
        <h3>
          {"Învățăm cu plăcere, progresăm cu încredere!"}
        </h3>
        <p>
          <span>
            {"Cursul de vară îmbină activitățile atractive cu exersarea gramaticii și a vocabularului în contexte autentice. Adaptăm învățarea la vârsta, interesele și nivelul de cunoștințe al copiilor, precum și la obiectivele lor personale."}
          </span>
        </p>
        <h3>
          <span>
            {"Vara aceasta dă valoare diplomelor tale!"}
          </span>
        </h3>
      </div>
      <DiplomasFacebookPost />
    </article>
  </ContentPageLayout>;
}
