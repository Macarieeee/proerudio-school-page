import heroImage from '@/assets/curs-de-limba-engleza-join-us-for-english.jpg';
import ContentPageLayout from '@/components/ContentPageLayout';
import image1 from "@/assets/about-classroom.jpg";

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
            {"Cursuri pentru copii de 4–11 ani"}
          </p>
          <h1 className={"mb-6 text-4xl font-bold leading-tight md:text-6xl"}>
            {"Curs de limba engleză – JOIN US FOR ENGLISH"}
          </h1>
          <p className={"max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl"}>
            {"Cursuri pentru copii de 8–11 ani, disponibile la sediu și ocazional/permanent online"}
          </p>
        </div>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Curs de limba engleză – JOIN US FOR ENGLISH"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/join-us-in-english.webp"} alt={"Curs de limba engleză – JOIN US FOR ENGLISH"} decoding={"async"} />
        <h1>
          {"Curs de limba engleză – JOIN US FOR ENGLISH"}
        </h1>
        <p>
          {"Cursuri pentru copii de 8–11 ani, disponibile la sediu și ocazional/permanent online"}
        </p>
      </section>
      <div>
        <p>
          {"„Join Us for English” continuă parcursul început în cadrul programului "}
          <strong>
            {"„Join Us in Englishland”"}
          </strong>
          {", deci pentru copiii care se înscriu la această vârstă la cursurile noastre va fi necesară o testare gratuită de nivel. La acest curs, copiii își completează cunoștințele de limbă engleză cu noțiuni de gramatică și vocabular mai dificil, învață să citească și să scrie în limba engleză, să comunice cu mai multă încredere și să înțeleagă texte audiate pe teme de interes pentru ei."}
        </p>
        <p>
          {"Programul se adresează elevilor din "}
          <strong>
            {"clasele II–IV"}
          </strong>
          {" și este structurat pe trei niveluri:"}
        </p>
        <ul>
          <li>
            <strong>
              {"Join Us for English 1"}
            </strong>
            {" (orientativ, dar nu obligatoriu, pregătire Starters) — pentru copii de 8–9 ani, clasa a II-a;"}
          </li>
          <li>
            <strong>
              {"Join Us for English 2"}
            </strong>
            {" (orientativ, dar nu obligatoriu, pregătire Movers) — pentru copii de 9–10 ani, clasa a III-a;"}
          </li>
          <li>
            <strong>
              {"Join Us for English 3"}
            </strong>
            {" (orientativ, dar nu obligatoriu, pregătire Flyers) — pentru copii de 10–11 ani, clasa a IV-a."}
          </li>
        </ul>
        <p>
          {"Repartizarea pe vârste și clase este orientativă. Pentru alegerea grupei potrivite, ținem cont atât de vârsta copilului, cât și de nivelul său de cunoaștere a limbii engleze (stabilit în funcție de rezultatele obținute la testele de progres sau la testul inițial de plasare)."}
        </p>
        <h2>
          {"Ce abilități dezvoltăm?"}
        </h2>
        <p>
          {"Pe lângă înțelegerea mesajelor orale și dezvoltarea exprimării verbale, cursul urmărește să îi ajute pe copii:"}
        </p>
        <ul>
          <li>
            {"să scrie corect, respectând regulile de ortografie și structurile gramaticale studiate;"}
          </li>
          <li>
            {"să înțeleagă texte în limba engleză și să răspundă la conținutul acestora oral, în scris sau prin acțiuni;"}
          </li>
          <li>
            {"să reacționeze spontan la mesaje scrise și la indicații verbale;"}
          </li>
          <li>
            {"să formuleze enunțuri proprii, oral și în scris;"}
          </li>
          <li>
            {"să participe la dialoguri inspirate din viața de zi cu zi, folosind modele de comunicare exersate la curs."}
          </li>
        </ul>
        <h2>
          {"Lecții dinamice, învățare cu plăcere"}
        </h2>
        <p>
          {"La această vârstă, curiozitatea copiilor este un aliat prețios, iar menținerea interesului presupune activități variate și provocări potrivite nivelului lor."}
        </p>
        <p>
          {"De aceea, folosim o "}
          <strong>
            {"abordare dinamică și interactivă"}
          </strong>
          {", alternând jocurile, dramatizările, cântecele, poveștile în imagini și secvențele video cu activități de citire, scriere, vocabular și gramatică."}
        </p>
        <p>
          {"Această varietate susține atenția, stimulează creativitatea și le oferă copiilor numeroase ocazii de a folosi limba engleză. Ne bucurăm când, la finalul lecției, auzim: "}
          <strong>
            {"„S-a terminat deja? Parcă abia a început!”"}
          </strong>
        </p>
        <h2>
          {"Pregătire pentru examene"}
        </h2>
        <p>
          {"Cursurile noastre urmăresc programa pentru pregătirea în vederea susținerii examenelor Cambridge, dar participarea la acestea nu este obligatorie."}
        </p>
        <p>
          {"În colaborare cu "}
          <strong>
            {"European Examinations Centre"}
          </strong>
          {", organizăm la sediu o simulare de examene Cambridge în luna martie și sesiuni private de examene Cambridge YLE (Starters, Movers, Flyers) la începutul lunii iunie."}
        </p>
        <h2>
          {"De ce recomandăm examenele Cambridge YLE?"}
        </h2>
        <ol>
          <li>
            <strong>
              {"Oferă un obiectiv concret."}
            </strong>
            {" Un scop apropiat și ușor de înțeles îi poate ajuta pe copii să își mențină motivația pentru învățare."}
          </li>
          <li>
            <strong>
              {"Asigură o evaluare externă a progresului."}
            </strong>
            {" Completează evaluările periodice de la curs și îi familiarizează pe copii cu experiența unui examen."}
          </li>
          <li>
            <strong>
              {"Evaluează toate cele patru competențe lingvistice:"}
            </strong>
            {" ascultare, citire, scriere și vorbire. Nivelurile Starters, Movers și Flyers propun sarcini variate, adaptate tinerilor cursanți."}
          </li>
          <li>
            <strong>
              {"Susțin încrederea în propriile capacități."}
            </strong>
            {" Recunoașterea progresului poate aduce satisfacție și un nou impuls pentru învățare."}
          </li>
          <li>
            <strong>
              {"Pot oferi posibilitatea echivalării probei de limbă engleză"}
            </strong>
            {" pentru admiterea în clasa a V-a cu program intensiv, în condițiile metodologiei aplicabile."}
          </li>
        </ol>
        <h2>
          {"Descoperim limba și cultura împreună"}
        </h2>
        <p>
          {"Învățarea unei limbi străine înseamnă și apropierea de cultura celor care o vorbesc. Prin activități tematice, marcăm sărbători și evenimente din lumea anglofonă, oferindu-le copiilor ocazia să descopere tradiții și să folosească limba engleză în contexte noi."}
        </p>
        <h2>
          {"Momente de la cursurile „Join Us for English”"}
        </h2>
        <div className={"photo-gallery"} style={{"display": "grid", "gridTemplateColumns": "repeat(3,minmax(0,1fr))", "gap": "12px"}}>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/35905043594_bd1d073f79_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/35905043594_bd1d073f79_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36692422906_aed4a875a2_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36692422906_aed4a875a2_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36600283611_445c22d2e4_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36600283611_445c22d2e4_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36569593442_878f95e67a_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36569593442_878f95e67a_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36569675522_dbd826dc30_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36569675522_dbd826dc30_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36569675332_20a9724da9_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36569675332_20a9724da9_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
        </div>
        <h4>
          {"Detalii organizatorice:"}
        </h4>
        <p></p>
        <div className={"course-details-panel"}>
          <div className={"course-details-header"}>
            <div className={"course-details-photo"} style={{"backgroundImage": "url(\"" + image1 + "\")"}}>
              <img src={image1 + ""} alt={""} />
            </div>
            <h2>
              {"“JOIN US FOR ENGLISH”"}
            </h2>
            <div className={"course-price"}>
              <sup>
                {"Lei"}
              </sup>
              <span>
                {"80"}
              </span>
              <sup>
                {"Curs de 90 de minute"}
              </sup>
            </div>
            <hr />
            <p>
              <big>
                {"CURS DE LIMBA ENGLEZĂ"}
              </big>
            </p>
          </div>
          <div className={"course-details-facts"}>
            <p></p>
            <ul>
              <li className={"course-fact"}>
                <span className={"course-fact-icon"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <circle cx={"12"} cy={"12"} r={"9"}></circle>
                    <path d={"M12 7v5l3 2"}></path>
                  </svg>
                </span>
                <strong>
                  {"Durata unui curs: "}
                </strong>
                <br />
                {"\n90 minute (85 curs și 5 pauză)"}
              </li>
            </ul>
            <ul>
              <li className={"course-fact"}>
                <span className={"course-fact-icon"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <circle cx={"9"} cy={"8"} r={"3"}></circle>
                    <path d={"M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-2-4"}></path>
                  </svg>
                </span>
                <strong>
                  {"Număr participanți: "}
                </strong>
                {"maxim 10 în grupă"}
              </li>
            </ul>
            <ul>
              <li className={"course-fact"}>
                <span className={"course-fact-icon"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <rect x={"3"} y={"5"} width={"18"} height={"16"} rx={"3"}></rect>
                    <path d={"M7 3v4m10-4v4M3 11h18"}></path>
                  </svg>
                </span>
                <strong>
                  {"Frecvența: "}
                </strong>
                {"două cursuri / săptămână"}
              </li>
              <li className={"course-fact"}>
                <span className={"course-fact-icon"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <circle cx={"9"} cy={"8"} r={"3"}></circle>
                    <path d={"M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-2-4"}></path>
                  </svg>
                </span>
                <strong>
                  {"Vârstă:"}
                </strong>
                <br />
                {"8–11 ani"}
              </li>
            </ul>
            <p></p>
          </div>
          <div className={"course-details-footer"}>
            <a href={"/inscriere-cursuri-pro-erudio/"} className={"course-enroll-button"}>
              {"Inscrie-te la acest curs"}
            </a>
          </div>
        </div>
        <p></p>
        <h3>
          <strong>
            {"Important!"}
          </strong>
        </h3>
        <p>
          {"Taxa cursurilor se poate achita în cont sau la casierie sediu Coșbuc:"}
        </p>
        <ul>
          <li>
            {"Integral până pe 28 septembrie (10% reducere), "}
            <strong>
              {"5040 lei"}
            </strong>
          </li>
          <li>
            {"în 5 tranșe egale (septembrie, noiembrie, ianuarie, martie si mai) (5% reducere), 1064 lei/trașă plată."}
          </li>
          <li>
            {"Lunar până pe data de 5 a fiecarei luni prin înmulțirea numărului maxim de cursuri din lună"}
            {"cu prețul pe curs."}
          </li>
        </ul>
      </div>
      <section className={"not-prose mt-14 border-t pt-10"}>
        <div className={"mb-6"}>
          <p className={"mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"}>
            {"Continuă pregătirea"}
          </p>
          <h2 className={"!m-0 !border-0 !p-0 !text-xl font-bold !text-foreground md:!text-2xl"}>
            {"Alte cursuri pentru copii de 4–11 ani"}
          </h2>
        </div>
        <div id={":r0:"} className={"related-content-grid"}>
          <a className={"related-content-card"} href={"/cursuri-de-limba-engleza-pentru-copii-de-4-11-ani/curs-de-limba-engleza-join-us-in-englishland/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2021/10/join-us-in-englishland-1.jpg.webp\")"}}>
              <h3>
                {"Join Us in Englishland — primii pași în limba engleză"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"4–11 ani"}
              </span>
              <p>
                {"Cursuri pentru copii de 4–7 ani, disponibile la sediu (ocazional online, la solicitarea părinților)"}
              </p>
              <span className={"related-content-action"}>
                {"Vezi cursul"}
                <span aria-hidden={"true"}>
                  {"→"}
                </span>
              </span>
            </div>
          </a>
        </div>
      </section>
    </article>
  </ContentPageLayout>;
}
