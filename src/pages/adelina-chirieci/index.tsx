import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/Adelina-Chirieci.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Adelina Chirieci"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Adelina Chirieci"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/Adelina-Chirieci.jpg"} alt={"Adelina Chirieci"} decoding={"async"} />
        <h1>
          {"Adelina Chirieci"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"82"}></div>
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
                              <p>
                                <img decoding={"async"} alt={"Adelina-Chirieci"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2016/01/Adelina-Chirieci.jpg 226w, https://www.proerudio.ro/wp-content/uploads/2016/01/Adelina-Chirieci-110x146.jpg 110w, https://www.proerudio.ro/wp-content/uploads/2016/01/Adelina-Chirieci-38x50.jpg 38w, https://www.proerudio.ro/wp-content/uploads/2016/01/Adelina-Chirieci-57x75.jpg 57w"} sizes={"(max-width:767px) 226px, 226px"} src={"https://www.proerudio.ro/wp-content/uploads/2016/01/Adelina-Chirieci-226x300.jpg"} className={"original-intro-image"} />
                              </p>
                              <h2>
                                {"Adelina Chirieci"}
                              </h2>
                              <h6>
                                <span>
                                  {"PROFESOR DE LIMBA ENGLEZĂ"}
                                </span>
                              </h6>
                              <h3>
                                {"Formare profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Licențiată"}
                                  {"în Jurnalism – Facultatea de Jurnalism, 2009"}
                                </li>
                                <li>
                                  {"Licențiată"}
                                  {"în Științe Umaniste – Facultatea de Litere și Limbi Străine, specializare: limba și literatura engleză – limba și literatura română, 2012"}
                                </li>
                                <li>
                                  {"Curs Postuniversitar pentru Pregătirea Personalului Didactic, 2013"}
                                </li>
                                <li>
                                  {"Gradul didactic de definitivat (2015)"}
                                </li>
                              </ul>
                              <h3>
                                {"Experiență"}
                                {"profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Profesor de limba engleză și limba română la Școala Gimnazială Nr.1, 1 Decembrie, Ilfov, 2014 – 2015"}
                                </li>
                                <li>
                                  {"Profesor de limba engleză colaborator la Grădinița Copăceni și Grădinița Green City, 2010 – 2014"}
                                </li>
                                <li>
                                  {"Profesor de limba engleză la Școala Gimnazială Nr. 1 Copăceni, Ilfov, 2009 – 2010"}
                                </li>
                                <li>
                                  {"Specialist Comunicare – Farmexpert DCI, 2008-2009"}
                                </li>
                                <li>
                                  {"Redactor ziarele “Săptămâna“ și “Semnal“, 2006-2008"}
                                </li>
                              </ul>
                              <h3>
                                {"Participare la cursuri și conferințe (ultimii 4 ani)"}
                              </h3>
                              <ul>
                                <li>
                                  {"Curs de formare – Formarea Continuă a profesorilor de limba română, engleză și franceză în societatea cunoașterii 2014"}
                                </li>
                                <li>
                                  {"The 2014 National Conference for English Language Teachers, Fischer International"}
                                </li>
                                <li>
                                  {"Conferința “Identitate şi conflict în context cultural şi geopolitic”, Universitatea Hyperion 2013"}
                                </li>
                                <li>
                                  {"Conferința internațională “Multiculturalism și/sau Transculturalism“, Universitatea Hyperion 2012"}
                                </li>
                                <li>
                                  {"TKT, European Examinations Centre, septembrie 2015"}
                                </li>
                              </ul>
                              <h3>
                                {"Alte activități"}
                              </h3>
                              <ul>
                                <li>
                                  {"Profesor evaluator la Olimpiada de limba engleză etapa locală și județeană – Ilfov"}
                                </li>
                                <li>
                                  {"Voluntariat la Revista “Trimbulinzii“ publicată de Liceul Teoretic “Ion Creangă“ din București"}
                                </li>
                                <li>
                                  {"Atestat de vorbitor de limba germane ( nivel B1) obținut în anul 2006 în cadrul liceului Teoretic “Ion Creangă“, București"}
                                </li>
                                <li>
                                  {"Organizator concurs Smart 2010"}
                                </li>
                                <li>
                                  {"Premiul I la Olimpiada de limbă și literatură romană- faza județeană din 2000 și"}
                                  {"2001, cu participare la faza națională"}
                                </li>
                                <li>
                                  {"Premiul I la Concursul de proiecte de mediu- faza națională, 2000"}
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
