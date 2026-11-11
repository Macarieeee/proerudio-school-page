import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2026/09/dilan.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Dilan Yalçin"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Dilan Yalçin"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2026/09/dilan.jpg"} alt={"Dilan Yalçin"} decoding={"async"} />
        <h1>
          {"Dilan Yalçin"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"12348"}></div>
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
                                <img decoding={"async"} src={"https://www.proerudio.ro/wp-content/uploads/2026/09/dilan.jpg"} alt={"Dilan Yalçin"} title={"dilan"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2026/09/dilan.jpg 2145w, https://www.proerudio.ro/wp-content/uploads/2026/09/dilan-300x293.jpg 300w, https://www.proerudio.ro/wp-content/uploads/2026/09/dilan-1024x1001.jpg 1024w, https://www.proerudio.ro/wp-content/uploads/2026/09/dilan-768x750.jpg 768w, https://www.proerudio.ro/wp-content/uploads/2026/09/dilan-1536x1501.jpg 1536w, https://www.proerudio.ro/wp-content/uploads/2026/09/dilan-2048x2001.jpg 2048w, https://www.proerudio.ro/wp-content/uploads/2026/09/dilan-77x75.jpg 77w, https://www.proerudio.ro/wp-content/uploads/2026/09/dilan-643x628.jpg 643w, https://www.proerudio.ro/wp-content/uploads/2026/09/dilan-480x469.jpg 480w"} sizes={"180px"} className={"original-intro-image"} />
                                <div>
                                  <h2>
                                    {"Dilan Yalçin"}
                                  </h2>
                                  <h6>
                                    <span>
                                      {"PROFESOR DE LIMBA ENGLEZĂ"}
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
                                  {"2019 – 2023 Faculty of Education, specializarea "}
                                  <em>
                                    {"Teaching English as a Second and Foreign Language"}
                                  </em>
                                  {", Universitatea "}
                                  <strong>
                                    {"Nevşehir Hacı Bektaş Veli"}
                                  </strong>
                                  {" (NEVU), Turcia"}
                                </li>
                                <li>
                                  {"Oct 2021 – Feb 2022 – studentă în cadrul programului Erasmus+ la Facultatea de limbi și literaturi străine, Universitatea Ovidius din Constanța, România"}
                                </li>
                                <li>
                                  {"Feb 2023- Jun 2023 – modul psihopedagogic pentru elevii de gimnaziu, Mihriban Emin Günel Secondary School, Nevşehir, Turcia"}
                                </li>
                                <li>
                                  {"Sep 2022 – Jan 2023 – modul psihopedagogic pentru elevii de liceu, Yavuz Sultan Selim Han Secondary School, Nevşehir, Turcia"}
                                </li>
                              </ul>
                              <h3>
                                {"Experiență profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Dec 2022 – Sep 2023 – Profesor de limba engleză la Nev-dil English Language Center din Nevşehir, Turcia"}
                                </li>
                                <li>
                                  {"Feb 2021 – Jun 2021- Profesor de limba engleză la Mayıs Primary School, Nevşehir, Turcia"}
                                </li>
                                <li>
                                  {"Jul 2022 – Sep 2022 – Profesor asistent de limba engleză în cadrul programului Erasmus+ la Pro Erudio School of English, București, România"}
                                </li>
                              </ul>
                              <h3>
                                {"Participare la cursuri de dezvoltare profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Conferința “Intercultural Dialogues” organizată de Universitatea Ovidius din Constanța, Romania – certificat de participare si premiul al II-lea (10-11 Dec 2021)"}
                                </li>
                                <li>
                                  {"“An Overview of Assessing Language Use” TESOL Turkey METASIG Forum: (2-3 Dec 2022)"}
                                </li>
                                <li>
                                  {"“Introduction to Family Engagement in Education”, Harvard University, Online Education (14 Dec 2022)"}
                                </li>
                                <li>
                                  {"“The Community Service Project”, Approved Certificate by Education Ministry of"}
                                </li>
                                <li>
                                  {"Turkey for Preparing Teaching Materials "}
                                  {"&"}
                                  {" Designing a New English Classroom in Alaettin Primary School, Avanos, Nevşehir (19 Dec 2022)"}
                                </li>
                                <li>
                                  {"Speaker certificat la "}
                                  <strong>
                                    {"1st International Conference on Intercultural Competence"}
                                  </strong>
                                  {" (ISCIC), organizata de Stainslaw Staszic State University of Applied Sciences in Pila, Poland (11 Jan 2023)"}
                                </li>
                                <li>
                                  <i>
                                    {"Cultivating SEL and Positivity in the Classroom"}
                                  </i>
                                  {", "}
                                  {"Active Learning Center, Bucure"}
                                  <span lang={"TR"}>
                                    {"ş"}
                                  </span>
                                  {"ti (25 Nov 2023)"}
                                </li>
                                <li>
                                  <i>
                                    {"Understanding and Applying CLIL Methodology"}
                                  </i>
                                  {", Active Learning Center, Bucure"}
                                  <span lang={"TR"}>
                                    {"ş"}
                                  </span>
                                  {"ti (24 Feb 2024)"}
                                </li>
                                <li>
                                  {"Certificat TESOL: World Tesol Academy (22 Mar 2024)"}
                                </li>
                                <li>
                                  <i>
                                    {"Storytelling in YLE Classrooms"}
                                  </i>
                                  {", ELI, Bucure"}
                                  <span lang={"TR"}>
                                    {"ş"}
                                  </span>
                                  {"ti (23 Mar 2024)"}
                                </li>
                                <li>
                                  <i>
                                    {"Early Literacy and Building Competences towards YLE Exams"}
                                  </i>
                                  {", European Examinations Centre, Bucure"}
                                  <span lang={"TR"}>
                                    {"ş"}
                                  </span>
                                  {"ti (Mar 2024)"}
                                </li>
                                <li>
                                  {"EdYOUFest, Bucuresti Conference "}
                                  <span lang={"TR"}>
                                    {"(August 2024)"}
                                  </span>
                                </li>
                                <li>
                                  {"Fischer International ELT Conference, Bucureşti (Sep 2024)"}
                                </li>
                                <li>
                                  {"The 19th Annual Fischer International Conference for English Language Teachers, 4-5 septembrie 2026"}
                                </li>
                              </ul>
                              <h3>
                                {"Alte activități"}
                              </h3>
                              <ul>
                                <li>
                                  {"Participare la taberele English Exporers Camps de la Poiana Mărului, vara 2022"}
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
