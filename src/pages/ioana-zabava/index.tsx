import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/Ioana-Zabava.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
      <div className={"absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/65 to-foreground/20"}></div>
      <div className={"container relative mx-auto max-w-6xl px-4 py-20 md:py-24"}>
        <a className={"mb-8 inline-flex items-center gap-2 text-sm font-semibold text-background/80"} href={"/"}>
          <svg xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-arrow-left h-4 w-4"}>
            <path d={"m12 19-7-7 7-7"}></path>
            <path d={"M19 12H5"}></path>
          </svg>
          {"Pagina principală"}
        </a>
        <p className={"mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-background/75"}>
          <svg xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-book-open h-4 w-4"}>
            <path d={"M12 7v14"}></path>
            <path d={"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}></path>
          </svg>
          {"Pro Erudio · School of English"}
        </p>
        <h1 className={"max-w-5xl text-4xl font-bold leading-tight md:text-6xl"}>
          {"Ioana Zabava"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Ioana Zabava"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/Ioana-Zabava.jpg"} alt={"Ioana Zabava"} decoding={"async"} />
        <h1>
          {"Ioana Zabava"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"70"}></div>
          <section>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <h2>
                                <img decoding={"async"} alt={"Ioana-Zabava"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2016/01/Ioana-Zabava-226x300.jpg 226w, https://www.proerudio.ro/wp-content/uploads/2016/01/Ioana-Zabava-110x146.jpg 110w, https://www.proerudio.ro/wp-content/uploads/2016/01/Ioana-Zabava-38x50.jpg 38w, https://www.proerudio.ro/wp-content/uploads/2016/01/Ioana-Zabava-56x75.jpg 56w, https://www.proerudio.ro/wp-content/uploads/2016/01/Ioana-Zabava.jpg 425w"} sizes={"(max-width:767px) 226px, 226px"} src={"https://www.proerudio.ro/wp-content/uploads/2016/01/Ioana-Zabava-226x300.jpg"} className={"original-intro-image"} />
                                {"Ioana Zăbavă"}
                              </h2>
                              <h6>
                                <span>
                                  {"PROFESOR DE LIMBĂ GERMANĂ ȘI ENGLEZĂ"}
                                </span>
                              </h6>
                              <h3>
                                {"Formare profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Absolventă a Facultății de Litere, secția engleză-germană, Universitatea din Craiova, 2014"}
                                </li>
                                <li>
                                  {"Absolventă a Facultății de Drept și Științe Sociale, departamentul Istorie și RISE, secția istorie, Universitatea din Craiova, 2014"}
                                </li>
                                <li>
                                  {"Absolventă a Modulului Psiho-pedagogic pentru limbile engleză și germană și istorie"}
                                </li>
                                <li>
                                  {"Bursă Erasmus în Innsbruck, Austria, 2012-2013"}
                                </li>
                                <li>
                                  {"Certificat internațional de vorbitor de limba germană, DSD II, 2011, nivel C1 conform Cadrului European Comun de Referinta pentru Limbi"}
                                </li>
                              </ul>
                              <h3>
                                {"Experienta profesionala"}
                              </h3>
                              <ul>
                                <li>
                                  {"Profesor de limba engleză la grădinița din cadrul Școlii Generale Nr.23 (actuală Nr. 24, Sf. Gheorghe), Craiova 2011-2012"}
                                </li>
                                <li>
                                  {"Profesor de limba germană și engleză la International English School, filiala Craiova, 2013-2015"}
                                </li>
                                <li>
                                  {"Profesor de limba germană la Simone Educational Center, Craiova, 2014-2015"}
                                </li>
                                <li>
                                  {"Profesor de limba germană la Grădinița „Madona Dudu”, Craiova, 2014-2015"}
                                </li>
                                <li>
                                  {"Voluntar la ESN Craiova, coordonator social Erasmus 2014-2015"}
                                </li>
                                <li>
                                  {"Voluntar la CdEC (translator germană), 2010-2011"}
                                </li>
                              </ul>
                              <h3>
                                {"Participare la cursuri de formare profesionala si alte activități"}
                              </h3>
                              <ul>
                                <li>
                                  {"Conferința națională organizată de Fischer International pentru profesori de limba engleză, 2015"}
                                </li>
                                <li>
                                  {"curs de formare “Time Management”, 2015"}
                                </li>
                                <li>
                                  {"curs de formare „Public Speaking”, 2015"}
                                </li>
                                <li>
                                  {"curs de formare „Leadership și Management”, 2015"}
                                </li>
                                <li>
                                  {"“Exams – Cambridge Exams” – BETA/Educational Centre, octombrie 2015"}
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div>
                              <div data-href={"https://www.facebook.com/proerudio"} data-layout={"standard"} data-action={"like"} data-show-faces={"true"} data-share={"false"}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  </ContentPageLayout>;
}
