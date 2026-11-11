import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2018/09/Ioana-Marin.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Ioana Marin"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Ioana Marin"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2018/09/Ioana-Marin.jpg"} alt={"Ioana Marin"} decoding={"async"} />
        <h1>
          {"Ioana Marin"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"10712"}></div>
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
                              <section className={"team-profile-header"}>
                                <img decoding={"async"} src={"https://www.proerudio.ro/wp-content/uploads/2018/09/Ioana-Marin.jpg"} alt={"Ioana Marin"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2018/09/Ioana-Marin.jpg 425w, https://www.proerudio.ro/wp-content/uploads/2018/09/Ioana-Marin-226x300.jpg 226w, https://www.proerudio.ro/wp-content/uploads/2018/09/Ioana-Marin-110x146.jpg 110w, https://www.proerudio.ro/wp-content/uploads/2018/09/Ioana-Marin-38x50.jpg 38w, https://www.proerudio.ro/wp-content/uploads/2018/09/Ioana-Marin-56x75.jpg 56w"} sizes={"180px"} className={"original-intro-image"} />
                                <div>
                                  <h2>
                                    {"Ioana Marin"}
                                  </h2>
                                  <h6>
                                    <span>
                                      {"TRAINER LIMBA ENGLEZĂ"}
                                    </span>
                                  </h6>
                                  <a href={"/echipa-pro-erudio/"}>
                                    {"← Înapoi la echipă"}
                                  </a>
                                </div>
                              </section>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <h3>
                                {"Formare profesională"}
                              </h3>
                              <ul>
                                <li>
                                  <span>
                                    {"A absolvit Liceul Teoretic Callatis, intensiv engleză, 2006 "}
                                  </span>
                                  <br />
                                  <span>
                                    {"A urmat cursurile Facultății de Arhitectură și Urbanism “Ion Mincu”, secția design de produs, 2007-2010 "}
                                  </span>
                                  <br />
                                  <span>
                                    {"Certificat Cambridge Advanced English, nivel C1 limba engleză, 2018"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Certificare Teaching Knowledge Test (YLE), 1 aprilie 2019"}
                                  </span>
                                </li>
                              </ul>
                              <h3>
                                {"Experiență"}
                                {"profesională"}
                              </h3>
                              <ul>
                                <li>
                                  <span>
                                    {"Conferința National Geographic Learning Day –"}
                                    {"“Metode moderne și perspective globale în predarea limbii engleze”, martie 2019"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Preparing Students for YLE, British Council, Bucuresti, 12 mai 2019"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Trainer și speaker limba engleză și română, “Life After Work”, 2015-2017"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Însoțitor tabere de limba engleză British Camps, 2017"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Colaborator petrecere de Crăciun “Atelierul lui Moș Craciun”, 2017"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Coordonator de curs și formator, Pui de Om, 2017 – prezent"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Coordonator atelier de creație “Căsuța lui Urechilă”, 2018"}
                                  </span>
                                </li>
                              </ul>
                              <h3>
                                {"Participare la cursuri de dezvoltare profesională"}
                              </h3>
                              <ul>
                                <li>
                                  <span>
                                    {"“Early childhood education”, organizat de Open to Study, Gowire Victoria, 2017"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"“Keeping it active”, organizat de Active Learning Center, 2017"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"“Structuring for Success at Primary Level”, organizat de Active Learning Center, 2017"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"“Re-imagining English Language Teaching: Involve, Evolve, Inspire”, Conferinta Unioscan 2018"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"The 11th Fischer International Conference for ELT, 2018"}
                                  </span>
                                </li>
                              </ul>
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
