import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/anamaria.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Ana-Maria Barbu"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Ana-Maria Barbu"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/anamaria.jpg"} alt={"Ana-Maria Barbu"} decoding={"async"} />
        <h1>
          {"Ana-Maria Barbu"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"66"}></div>
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
                                <img decoding={"async"} alt={"anamaria"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2016/01/anamaria-226x300.jpg 226w, https://www.proerudio.ro/wp-content/uploads/2016/01/anamaria-110x146.jpg 110w, https://www.proerudio.ro/wp-content/uploads/2016/01/anamaria-38x50.jpg 38w, https://www.proerudio.ro/wp-content/uploads/2016/01/anamaria-56x75.jpg 56w, https://www.proerudio.ro/wp-content/uploads/2016/01/anamaria.jpg 425w"} sizes={"(max-width:767px) 226px, 226px"} src={"https://www.proerudio.ro/wp-content/uploads/2016/01/anamaria-226x300.jpg"} className={"original-intro-image"} />
                                {"Ana-Maria Barbu"}
                              </h2>
                              <h6>
                                <span>
                                  {"PROFESOR LIMBA ENGLEZĂ"}
                                </span>
                              </h6>
                              <h3>
                                {"Formare profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Licențiată"}
                                  {"în filologie, Facultatea de Limbi Străine, specializarea: limba engleză-limba spaniolă; Universitatea din București, 2007"}
                                </li>
                                <li>
                                  {"Absolventă Program de Masterat “Managementul Resurselor Umane”, 2009"}
                                </li>
                                <li>
                                  {"Gradul Definitiv în învățământ, Universitatea din București, 2009"}
                                </li>
                              </ul>
                              <h3>
                                {"Experiență"}
                                {"profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Profesor limba engleză, Școala Centrală, 2008 – prezent"}
                                </li>
                                <li>
                                  {"Profesor limba engleză, cursuri de pregătire pentru testul TOEFL, ECDL, 2010-2013"}
                                </li>
                                <li>
                                  {"Profesor limba engleză, cursuri de engleză generală pentru adulți, Centrul de Limbi Străine “Britanica”"}
                                </li>
                                <li>
                                  {"Trainer curs POSDRU “Comunicare în limba engleză”-adulți"}
                                </li>
                                <li>
                                  {"Profesor limba engleză, cursurile de engleză pentru copii, Centrul de Limbi Străine “Britanica”"}
                                </li>
                                <li>
                                  {"Profesor limba engleză, Colegiul National “Sf Sava”, 2007-2008"}
                                </li>
                                <li>
                                  {"Profesor limba engleză, Colegiul National “Matei Basarab”, 2006-2007"}
                                </li>
                              </ul>
                              <h3>
                                {"Participare la cursuri și conferințe (ultimii 4 ani)"}
                              </h3>
                              <ul>
                                <li>
                                  {"The 2014 National Conference for English Language Teachers, Fischer International"}
                                </li>
                                <li>
                                  {"PC Operator Certificate"}
                                </li>
                                <li>
                                  {"“Macmillan Methodological Days” workshop"}
                                </li>
                                <li>
                                  {"“Student Counseling” training course"}
                                </li>
                                <li>
                                  {"Oxford Fischer International English Language Conference"}
                                </li>
                                <li>
                                  {"FCE Cambridge Seminar, British Council"}
                                </li>
                                <li>
                                  {"“Cambridge Day”, Sitka, Cambridge University Press, Cambridge English Language Assessment"}
                                </li>
                                <li>
                                  {"Teacher Development Seminar, Sitka- Centrul de carte straina, Cambridge University Press, Cambridge English Language Assessment"}
                                </li>
                                <li>
                                  {"The 2013 National Conference for English Language Teachers, Fischer International"}
                                </li>
                                <li>
                                  {"“Thanksgiving – Be a part, not apart” workshop"}
                                </li>
                                <li>
                                  {"Curs TIC finanțat prin fonduri europene"}
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
