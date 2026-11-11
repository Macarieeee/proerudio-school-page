import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/aurataranu.webp"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Aura Taranu"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Aura Taranu"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/aurataranu.webp"} alt={"Aura Taranu"} decoding={"async"} />
        <h1>
          {"Aura Taranu"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"73"}></div>
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
                                {"Aura Țăranu"}
                              </h2>
                              <h6>
                                <span>
                                  {"PROFESOR LIMBA ENGLEZĂ"}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <figure className={"original-intro-image"}>
                              <div>
                                <img decoding={"async"} src={"https://www.proerudio.ro/wp-content/uploads/2021/10/aurataranu.webp"} alt={""} title={"aurataranu"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2021/10/aurataranu.webp 425w, https://www.proerudio.ro/wp-content/uploads/2021/10/aurataranu-226x300.webp 226w, https://www.proerudio.ro/wp-content/uploads/2021/10/aurataranu-110x146.webp 110w, https://www.proerudio.ro/wp-content/uploads/2021/10/aurataranu-38x50.webp 38w, https://www.proerudio.ro/wp-content/uploads/2021/10/aurataranu-56x75.webp 56w"} sizes={"(max-width:767px) 425px, 425px"} />
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
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
                                  {"Absolventă a Facultății de Limbi Moderne Aplicate, specializarea engleză- spaniolă, Universitatea din București, 2012 (temă licență"}
                                  {"“Biomaterials/Materials Applied in Medicine and Dentistry”)"}
                                </li>
                                <li>
                                  {"Cambridge Advanced Certificate, obținut în urma examenului susținut la Consiliul Britanic și organizat de Cambridge ESOL Examinations, 2008"}
                                </li>
                              </ul>
                              <h3>
                                {"Experiență"}
                                {"profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Profesor limba engleză la „Pro Erudio” School of English, 2013 – prezent"}
                                </li>
                                <li>
                                  {"Profesor de limba engleză la Colegiul National „Gheorghe Lazar”, an școlar 2011-2012"}
                                </li>
                              </ul>
                              <h3>
                                {"Participare la cursuri și alte atestări"}
                              </h3>
                              <ul>
                                <li>
                                  {"The 2014 National Conference for English Language Teachers, Fischer International"}
                                </li>
                                <li>
                                  {"“Preparing Students for PET”, Consiliul Britanic, 2014"}
                                </li>
                                <li>
                                  {"“Preparing Students for KET”, Consiliul Britanic, 2014"}
                                </li>
                                <li>
                                  {"“Preparing Students for IELTS”, Consiliul Britanic, 2014"}
                                </li>
                                <li>
                                  {"Cambridge Day, 2013, Sitka, Cambridge University Press, Cambridge English Language Assessment"}
                                </li>
                                <li>
                                  {"Teacher Development Seminar, 2013, Sitka- Centrul de carte străină, Cambridge University Press, Cambridge English Language Assessment"}
                                </li>
                                <li>
                                  {"“The Oxford Winter Day Workshops”, organizat de ISMB si Oxford University Press, Bucuresti, 2012"}
                                </li>
                                <li>
                                  {"“A Fresh Approach: Bringing Learning to Life”, Lewis School of English, seminar acreditat de Consilul Britanic, 2012"}
                                </li>
                                <li>
                                  {"Curs pentru ghid local de turism organizat de CeDes Cercetare și Dezvoltare, 2012"}
                                </li>
                                <li>
                                  {"Coordonator grup tabăra educațională de limba engleză"}
                                  {"în România British Camps (Cheile Gradistei), august 2014"}
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
