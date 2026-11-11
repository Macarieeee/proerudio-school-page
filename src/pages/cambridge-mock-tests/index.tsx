import ContentPageLayout from '@/components/ContentPageLayout';
import image0 from "@/assets/images.jpeg";

export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body py-16 md:py-20" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground"}>
      <img src={image0 + ""} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
            {"Pregătire examene Cambridge"}
          </p>
          <h1 className={"mb-6 text-4xl font-bold leading-tight md:text-6xl"}>
            {"Cambridge Mock Tests"}
          </h1>
          <p className={"max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl"}>
            {"Simulări în condiții de examen pentru evaluarea realistă a nivelului și a progresului."}
          </p>
        </div>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Cambridge Mock Tests"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2026/04/ProErudio-English-Mock-Tests.png"} alt={"Cambridge Mock Tests"} decoding={"async"} />
        <h1>
          {"Cambridge Mock Tests"}
        </h1>
        <p>
          {"Simulări în condiții de examen pentru evaluarea realistă a nivelului și a progresului."}
        </p>
      </section>
      <div>
        <p data-start={"300"} data-end={"456"}>
          {"Pregătirea pentru un examen Cambridge devine mult mai eficientă atunci când elevii pot exersa într-un format cât mai apropiat de experiența reală de examen."}
        </p>
        <p data-start={"458"} data-end={"758"}>
          {"Această pagină reunește testele digitale create de Pro Erudio pentru elevii care se pregătesc pentru examenele Cambridge English. Testele sunt gândite pentru a-i ajuta să se familiarizeze cu structura examenului, tipurile de exerciții, gestionarea timpului și modul de lucru necesar în ziua testării."}
        </p>
        <p data-start={"760"} data-end={"908"}>
          {"Prin aceste simulări, elevii pot verifica mai clar ce stăpânesc deja, unde mai au nevoie de lucru și cum se pot organiza mai bine înainte de examen."}
        </p>
        <h3>
          <span>
            {"Alege nivelul pentru care vrei să lucrezi"}
          </span>
        </h3>
        <p data-start={"961"} data-end={"1232"}>
          {"Pentru fiecare nivel, testele sunt organizate pe componentele principale ale examenului: Reading, Use of English, Writing și Listening. Rezultatele pot fi folosite ca punct de plecare pentru feedback, corectare și pregătire suplimentară."}
        </p>
        <div></div>
        <div className={"mock-tests-grid"}>
          <div className={"mock-test-card"}>
            <h3>
              {"Preliminary / B1"}
            </h3>
            <p>
              {"Parcurge testele pentru nivelul B1 Preliminary și familiarizează-te cu structura examenului Cambridge."}
            </p>
            <p>
              <a className={"mock-test-button"} href={"https://tabere.proerudio.ro/preliminary-mock-test"}>
                {"Accesează testele Preliminary/B1"}
              </a>
            </p>
          </div>
          <div className={"mock-test-card"}>
            <h3>
              {"FCE / B2 First"}
            </h3>
            <p>
              {"Exersează testele pentru nivelul B2 First într-un format digital, clar și apropiat de experiența reală de examen."}
            </p>
            <p>
              <a className={"mock-test-button"} href={"https://tabere.proerudio.ro/fce-mock-test"}>
                {"Accesează testele FCE/B2"}
              </a>
            </p>
          </div>
          <div className={"mock-test-card"}>
            <h3>
              {"C1 Advanced / CAE"}
            </h3>
            <p>
              {"  Testează-ți nivelul C1 Advanced într-un format digital, organizat pe probele principale ale examenului Cambridge."}
            </p>
            <p>
              <a className={"mock-test-button"} href={"https://tabere.proerudio.ro/cae-mock-test"}>
                {"Accesează testele C1 Advanced/CAE"}
              </a>
            </p>
          </div>
        </div>
        <h2 data-section-id={"ao2ilc"} data-start={"2392"} data-end={"2432"}>
          {"De ce sunt utile simulările digitale?"}
        </h2>
        <p data-start={"2434"} data-end={"2658"}>
          {"Mock testele digitale îi ajută pe elevi să intre mai pregătiți și mai încrezători în examenul real. Pe lângă verificarea cunoștințelor, acestea îi obișnuiesc cu formatul testului, cu ritmul de lucru și cu presiunea timpului."}
        </p>
        <p data-start={"2660"} data-end={"2932"}>
          {"Elevii pot înțelege mai ușor ce presupune fiecare probă, pot identifica zonele unde pierd puncte și pot primi feedback mai clar din partea profesorului. În acest fel, pregătirea nu se bazează doar pe exerciții izolate, ci pe o imagine mai completă asupra nivelului actual."}
        </p>
        <p data-start={"2660"} data-end={"2932"}></p>
        <h2 data-section-id={"x91et2"} data-start={"2939"} data-end={"2976"}>
          {"Cum recomandăm folosirea testelor?"}
        </h2>
        <p data-start={"2978"} data-end={"3274"}>
          {"Pentru o experiență cât mai apropiată de examen, recomandăm ca testele să fie parcurse într-un mediu liniștit, fără întreruperi, cu atenție la timpul alocat fiecărei secțiuni. Elevii ar trebui să citească atent cerințele, să își gestioneze timpul și să verifice răspunsurile înainte de trimitere."}
        </p>
        <p data-start={"3276"} data-end={"3408"}>
          {"După finalizarea testului, rezultatele pot fi analizate împreună cu profesorul pentru a stabili ce trebuie consolidat în continuare."}
        </p>
      </div>
      <section className={"not-prose mt-14 border-t pt-10"}>
        <div className={"mb-6"}>
          <p className={"mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"}>
            {"Continuă pregătirea"}
          </p>
          <h2 className={"!m-0 !border-0 !p-0 !text-xl font-bold !text-foreground md:!text-2xl"}>
            {"Alte cursuri de pregătire pentru examene"}
          </h2>
        </div>
        <div id={":r0:"} className={"related-content-grid"}>
          <a className={"related-content-card"} href={"/modul-optional-de-pregatire-pentru-examenele-cambridge-english/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2019/02/Modul-de-pregatire-pentru-examenele-Cambridge-English.jpg\")"}}>
              <h3>
                {"Modul opțional de pregătire pentru examenele Cambridge English"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"Cursuri Pro Erudio"}
              </span>
              <p>
                {"Consolidare și simulări înaintea examenelor Cambridge English."}
              </p>
              <span className={"related-content-action"}>
                {"Vezi cursul"}
                <span aria-hidden={"true"}>
                  {"→"}
                </span>
              </span>
            </div>
          </a>
          <a className={"related-content-card"} href={"/cursuri-de-weekend-in-limba-engleza/cursuri-interactive-de-conversatie-cu-profesori-internationali/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2024/11/cursuri-de-conversatie.jpg\")"}}>
              <h3>
                {"Cursuri interactive cu profesori internaționali"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"Cursuri Pro Erudio"}
              </span>
              <p>
                {"Conversație autentică, fluență și încredere alături de traineri internaționali."}
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
