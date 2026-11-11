import heroImage from '@/assets/curs-de-limba-engleza-join-us-in-englishland.jpg';
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
            {"Join Us in Englishland — primii pași în limba engleză"}
          </h1>
          <p className={"max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl"}>
            {"Cursuri pentru copii de 4–7 ani, disponibile la sediu (ocazional online, la solicitarea părinților)"}
          </p>
        </div>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Join Us in Englishland — primii pași în limba engleză"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/join-us-in-englishland-1.jpg.webp"} alt={"Join Us in Englishland — primii pași în limba engleză"} decoding={"async"} />
        <h1>
          {"Join Us in Englishland — primii pași în limba engleză"}
        </h1>
        <p>
          {"Cursuri pentru copii de 4–7 ani, disponibile la sediu (ocazional online, la solicitarea părinților)"}
        </p>
      </section>
      <div>
        <p>
          {"„Join Us in Englishland” îi invită pe cei mici să descopere limba engleză prin joc, povești și activități creative, într-o atmosferă prietenoasă, adaptată vârstei lor."}
        </p>
        <p>
          {"Programul se adresează preșcolarilor și elevilor din clasa pregătitoare și clasa I și este structurat pe trei niveluri:"}
        </p>
        <ul>
          <li>
            <strong>
              {"Join Us in Englishland 1"}
            </strong>
            {" — pentru copii de 4–5 ani;"}
          </li>
          <li>
            <strong>
              {"Join Us in Englishland 2"}
            </strong>
            {" — pentru copii de 5–6 ani;"}
          </li>
          <li>
            <strong>
              {"Join Us in Englishland 3"}
            </strong>
            {" — pentru copii de 6–7 ani."}
          </li>
        </ul>
        <h2>
          {"Ce ne propunem?"}
        </h2>
        <p>
          {"Cultivăm curiozitatea și bucuria de a învăța limba engleză, punând accent pe înțelegerea mesajelor orale și pe dezvoltarea comunicării. Pe parcursul celor trei ani de curs, urmărim:"}
        </p>
        <ul>
          <li>
            {"dezvoltarea interesului și a plăcerii de a învăța limba engleză;"}
          </li>
          <li>
            {"formarea capacității de a înțelege mesaje audiate;"}
          </li>
          <li>
            {"dezvoltarea capacității de a reproduce și de a formula mesaje orale în limba engleză."}
          </li>
        </ul>
        <h2>
          {"Învățăm prin joc, povești și cântece"}
        </h2>
        <p>
          {"Dezvoltarea creativității și interacțiunea directă joacă roluri esențial în dezvoltarea copiilor. De aceea, construim cursurile de limbă engleză în jurul poveștilor, a personajelor preferate, care acționează în situații apropiate de universul copiilor, cu muzică și activități interactive, respectând nevoile grupei de vârstă și interesele exprimate."}
        </p>
        <p>
          {"La curs, copiii sunt încurajați:"}
        </p>
        <ul>
          <li>
            {"să intre în rolul personajelor îndrăgite;"}
          </li>
          <li>
            {"să răspundă prin gesturi și mișcare la mesajele audiate;"}
          </li>
          <li>
            {"să creeze scurte dialoguri, cu sprijinul profesorului;"}
          </li>
          <li>
            {"să selecteze și să ordoneze imagini pentru a construi o poveste;"}
          </li>
          <li>
            {"să coloreze urmând indicații în limba engleză; să recunoască grafic cuvinte în limba engleză (în special la nivelul 3 de studiu)"}
          </li>
          <li>
            {"să descrie imagini folosind cuvintele și structurile învățate."}
          </li>
        </ul>
        <p>
          {"Astfel, cei mici învață cuvinte, expresii și propoziții în contexte cu sens, inspirate din viața de zi cu zi sau din lumea imaginației. Limba engleză devine treptat un mijloc firesc de participare la joc și de exprimare."}
        </p>
        <h2>
          {"Materiale care aduc învățarea la viață"}
        </h2>
        <p>
          {"Pentru a transforma fiecare lecție într-o experiență atractivă, folosim o varietate de materiale didactice, alături de tabla interactivă pe care alegem să o folosim moderat:"}
        </p>
        <ul>
          <li>
            {"marionete și păpuși;"}
          </li>
          <li>
            {"forme magnetice;"}
          </li>
          <li>
            {"carduri cu povești;"}
          </li>
          <li>
            {"cartonașe și imagini tematice de mari dimensiuni;"}
          </li>
          <li>
            {"postere cu povești ilustrate;"}
          </li>
          <li>
            {"materiale audio;"}
          </li>
          <li>
            {"materiale video cu povești și activități adaptate vârstei."}
          </li>
        </ul>
        <p>
          {"Prin fiecare activitate, îi încurajăm pe copii să descopere, să participe și să capete încredere în folosirea limbii engleze."}
        </p>
        <h4>
          {"Câteva imagini de la cursurile de limba engleză “JOIN US IN"}
          {"ENGLISHLAND”:"}
        </h4>
        <div className={"photo-gallery"} style={{"display": "grid", "gridTemplateColumns": "repeat(3,minmax(0,1fr))", "gap": "12px"}}>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/18765591_1103021813132659_1325564205651648286_n_35905043594_o.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/18765591_1103021813132659_1325564205651648286_n_35905043594_o.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/18740171_1103023309799176_4038041239255339180_n_36692422906_o.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/18740171_1103023309799176_4038041239255339180_n_36692422906_o.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/18700334_1103016859799821_23369677984505047_n_36692423086_o.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/18700334_1103016859799821_23369677984505047_n_36692423086_o.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/18740812_1103022756465898_9074289970655314622_n_36569593442_o.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/18740812_1103022756465898_9074289970655314622_n_36569593442_o.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36569675332_20a9724da9_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36569675332_20a9724da9_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36569675522_dbd826dc30_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36569675522_dbd826dc30_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
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
              {"“JOIN US IN ENGLISHLAND”"}
            </h2>
            <div className={"course-price"}>
              <sup>
                {"Lei"}
              </sup>
              <span>
                {"60"}
              </span>
              <sup>
                {"Curs de 60 minute"}
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
                {"\n60 minute (55 curs și 5 pauză)"}
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
                {"4–7 ani"}
              </li>
            </ul>
            <p></p>
          </div>
          <div className={"course-details-footer"}>
            <a href={"/inscriere-cursuri-pro-erudio/"} className={"course-enroll-button"}>
              {"Înscrie-te la acest curs"}
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
            {"Integral până pe"}
            <strong>
              {"28 septembrie"}
            </strong>
            {"(10% reducere),"}
            <strong>
              {"3780 lei"}
            </strong>
          </li>
          <li>
            {"în 5 tranșe egale (septembrie, noiembrie, ianuarie, martie si mai) (5% reducere),"}
            <strong>
              {"798 lei"}
            </strong>
            {"/trașă plată."}
          </li>
          <li>
            {"Lunar până pe data de 5 a fiecarei luni prin înmulțirea numărului maxim de cursuri din lună"}
            {"cu prețul pe curs."}
          </li>
        </ul>
        <div data-href={"https://www.facebook.com/proerudio"} data-layout={"standard"} data-action={"like"} data-show-faces={"true"} data-share={"false"}></div>
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
          <a className={"related-content-card"} href={"/cursuri-de-limba-engleza-pentru-copii-de-4-11-ani/curs-de-limba-engleza-join-us-for-english/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2021/10/join-us-in-english.webp\")"}}>
              <h3>
                {"Curs de limba engleză – JOIN US FOR ENGLISH"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"4–11 ani"}
              </span>
              <p>
                {"Cursuri pentru copii de 8–11 ani, disponibile la sediu și ocazional/permanent online"}
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
