import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2026/09/andra-vasile.jpeg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Andra Vasile"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Andra Vasile"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2026/09/andra-vasile.jpeg"} alt={"Andra Vasile"} decoding={"async"} />
        <h1>
          {"Andra Vasile"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"12344"}></div>
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
                                <img decoding={"async"} src={"https://www.proerudio.ro/wp-content/uploads/2026/09/andra-vasile.jpeg"} alt={"Andra Vasile"} title={"andra vasile"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2026/09/andra-vasile.jpeg 1200w, https://www.proerudio.ro/wp-content/uploads/2026/09/andra-vasile-258x300.jpeg 258w, https://www.proerudio.ro/wp-content/uploads/2026/09/andra-vasile-881x1024.jpeg 881w, https://www.proerudio.ro/wp-content/uploads/2026/09/andra-vasile-768x893.jpeg 768w, https://www.proerudio.ro/wp-content/uploads/2026/09/andra-vasile-65x75.jpeg 65w, https://www.proerudio.ro/wp-content/uploads/2026/09/andra-vasile-540x628.jpeg 540w, https://www.proerudio.ro/wp-content/uploads/2026/09/andra-vasile-480x558.jpeg 480w"} sizes={"180px"} className={"original-intro-image"} />
                                <div>
                                  <h2>
                                    {"Andra Vasile"}
                                  </h2>
                                  <h6>
                                    <span>
                                      {"PROFESOR DE LIMBA ENGLEZĂ ȘI LIMBA GERMANĂ"}
                                    </span>
                                  </h6>
                                  <a href={"/echipa-pro-erudio/"}>
                                    {"← Înapoi la echipă"}
                                  </a>
                                </div>
                              </section>
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
                                  {"Studii Postuniversitare de Masterat Lingvistica limbii engleze. Metode și aplicații, Facultatea de Limbi și Literaturi Străine, Universitatea din București, 2025"}
                                </li>
                                <li>
                                  {"Facultatea de Limbi și Literaturi Străine, Universitatea din București – specializarea Filologie Germană-Engleză, 2023"}
                                </li>
                                <li>
                                  {"Modulul Psihopedagogic Nivelul I, Universitatea din București, Departamentul de Formare a Profesorilor 2023"}
                                </li>
                              </ul>
                              <h3>
                                {"Experiență profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Practică Psihopedagogică – predare în limba germană, Colegiul Național „Tudor Vianu”, 2022"}
                                </li>
                                <li>
                                  {"Practică Psihopedagogică – predare în limba enleza, Colegiul Național „Școala Centrală”, 2023"}
                                </li>
                              </ul>
                              <h3>
                                {"Participare la cursuri de dezvoltare profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"The 19th Annual Fischer International Conference for English Language Teachers, 4-5 septembrie 2026"}
                                </li>
                                <li>
                                  {"The 18th Annual Fischer Conference for ELT Beyond Methods: Human Connection in Practice – Teachers and Learners in the Age of AI, 2025"}
                                </li>
                                <li>
                                  {"EdYOUfest Conference, Bucharest, Romania, 2024"}
                                </li>
                                <li>
                                  {"Omega… The Universal Language: Static Education?, Bucharest English Teachers’ Association, 2023"}
                                </li>
                                <li>
                                  {"Connecting People: Equipping Your Students for the World of Tomorrow, Bucharest English Teachers’ Association, 2023"}
                                </li>
                                <li>
                                  {"Does Reading still Matter?, Bucharest English Teachers’ Association, 2023"}
                                </li>
                                <li>
                                  {"More than Words: Helping Your Students Prepare for Cambridge Speaking Tests, Bucharest English Teachers’ Association, 2023"}
                                </li>
                                <li>
                                  {"Lessons from the New Classroom: Trends in English Language Teaching, Bucharest English Teachers’ Association, 2023"}
                                </li>
                                <li>
                                  {"Learning through Play: Games in the Primary EFL Classroom, Bucharest English Teachers’ Association, 2023"}
                                </li>
                                <li>
                                  {"What’s Our Students’ Biggest Fear in the Classroom? SPEAKING!, Bucharest English Teachers’ Association, 2023"}
                                </li>
                                <li>
                                  <em>
                                    {"Back to School Training Day"}
                                  </em>
                                  {", 7 septembrie 2023, organizat de CartureştiEdu"}
                                </li>
                                <li>
                                  <em>
                                    {"Cambridge Day for Romania"}
                                  </em>
                                  {", București, 2022;"}
                                </li>
                              </ul>
                              <h3>
                                {"Alte activități"}
                              </h3>
                              <ul>
                                <li>
                                  {"Voluntar în cadrul Romanian Association of Teachers of English Conference"}
                                </li>
                                <li>
                                  {"Membru organizator pentru taberele de limbă engleză și aventură în natură English Explorers Camps, iulie 2024 și iulie 2025"}
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
