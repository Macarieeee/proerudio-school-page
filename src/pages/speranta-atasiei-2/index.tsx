import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2017/09/Speranta-Atasiei.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Speranţa Atasiei"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Speranţa Atasiei"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2017/09/Speranta-Atasiei.jpg"} alt={"Speranţa Atasiei"} decoding={"async"} />
        <h1>
          {"Speranţa Atasiei"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"10196"}></div>
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
                                <img decoding={"async"} alt={"Speranţa Atasiei"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2017/09/Speranta-Atasiei.jpg 226w, https://www.proerudio.ro/wp-content/uploads/2017/09/Speranta-Atasiei-110x146.jpg 110w, https://www.proerudio.ro/wp-content/uploads/2017/09/Speranta-Atasiei-38x50.jpg 38w, https://www.proerudio.ro/wp-content/uploads/2017/09/Speranta-Atasiei-57x75.jpg 57w"} sizes={"180px"} src={"https://www.proerudio.ro/wp-content/uploads/2017/09/Speranta-Atasiei.jpg"} className={"original-intro-image"} />
                                <div>
                                  <h2>
                                    {"Speranţa Atasiei"}
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
                                  <span>
                                    {"Facultatea"}
                                    {"de Limbi"}
                                    {"şi"}
                                    {"Literaturi"}
                                    {"Străine,"}
                                    {"Universitatea"}
                                    {"Bucureşti, 2004-2008"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Absolventă"}
                                    {"a"}
                                    {"Cursului"}
                                    {"postuniversitar"}
                                    {"psiho-pedagogic (Modulul"}
                                    {"1),"}
                                    {"Universitatea"}
                                    {"Bucureşti, 2016"}
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
                                    {"Profesor"}
                                    {"de"}
                                    {"limba"}
                                    {"engleză"}
                                    {"pentru"}
                                    {"copii"}
                                    {"şi"}
                                    {"adulţi"}
                                    {"–"}
                                    {"Internaţional"}
                                    {"House,"}
                                    {"Bucureşti"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Profesor"}
                                    {"de"}
                                    {"limba"}
                                    {"engleză"}
                                    {"pentru"}
                                    {"copii"}
                                    {"şi"}
                                    {"adulţi"}
                                    {"–"}
                                    {"Britanica Learning Centre,"}
                                    {"Bucureşti"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Profesor"}
                                    {"de"}
                                    {"limba"}
                                    {"engleză"}
                                    {"pentru"}
                                    {"copii"}
                                    {"–"}
                                    {"Fundaţia"}
                                    {"Chance for Life,"}
                                    {"Bucureşti"}
                                  </span>
                                </li>
                              </ul>
                              <h3>
                                {"Participare la cursuri de dezvoltare profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Key and Preliminary Exam Updates 2020- EEC- 24th November 2019"}
                                </li>
                                <li>
                                  {"Preparing Students for YLE- British Council- 8th December 2019"}
                                </li>
                                <li>
                                  {"Make Your Online Lessons More Student Focused- Express Publishing- August-September 2020"}
                                </li>
                                <li>
                                  {"Social and Emotional Learning (SEL) in the Secondary Classroom- Dave Spencer- Macmillan Education- 3"}
                                  <sup>
                                    {"rd"}
                                  </sup>
                                  {" March 2021"}
                                </li>
                                <li>
                                  {"The 2021 Annual Conference for English Language Teachers- Fischer International- 2"}
                                  <sup>
                                    {"nd"}
                                  </sup>
                                  {" and 3"}
                                  <sup>
                                    {"rd"}
                                  </sup>
                                  {" September 2021"}
                                </li>
                                <li>
                                  {"Back to School with Cambridge for Secondary Teachers- Cambridge- 31"}
                                  <sup>
                                    {"st"}
                                  </sup>
                                  {" August 2022"}
                                </li>
                                <li>
                                  {"Conferinta Copilul tau, campion la viata- Cum crestem stima de sine a copiilor si tinerilor, acasa si la scoala- Shakespeare School- 16"}
                                  <sup>
                                    {"th"}
                                  </sup>
                                  {" December 2022"}
                                </li>
                                <li>
                                  <span>
                                    <em>
                                      {"Preparing Students for YLE"}
                                    </em>
                                    {" (British Council and Cambridge Assessment English), November 25"}
                                    <sup>
                                      {"th"}
                                    </sup>
                                    {", 2018"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"The 2018 Annual Conference for English Language Teachers organized by Fischer International – August 31"}
                                    <sup>
                                      {"st"}
                                    </sup>
                                    {"-September 1"}
                                    <sup>
                                      {"st"}
                                    </sup>
                                    {", 2018"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"The Seminar "}
                                    <em>
                                      {"Bright Teachers Focus on Students"}
                                    </em>
                                    {" (Shakespeare School) – April 26"}
                                    <sup>
                                      {"th"}
                                    </sup>
                                    {", 2018"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Cursul"}
                                    {"“AMI Children’s House Assistants”"}
                                    {"pentru"}
                                    {"asistenţi"}
                                    {"Montessori, 2017"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Seminarul"}
                                    {"“Convergent versus Divergent Thinking”,"}
                                    {"organizat"}
                                    {"de Shakespeare School, 2016"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Cursul"}
                                    {"“Preparing Students for Cambridge YLE Exams”,"}
                                    {"organizat"}
                                    {"de British Council, 2011"}
                                  </span>
                                </li>
                                <li>
                                  {"Key and Preliminary Exam Updates 2020, organizat de EEC, 24 noiembrie 2019"}
                                </li>
                                <li>
                                  {"Preparing Students for YLE, "}
                                  {"British Council, 8 decembrie 2019"}
                                </li>
                                <li>
                                  {"Make Your Online Lessons More Student Focused, Express Publishing, "}
                                  {"August-September 2020"}
                                </li>
                                <li>
                                  {"Social and Emotional Learning (SEL) in the Secondary Classroom, speaker Dave Spencer de la Macmillan Education, "}
                                  {"3 martie 2021"}
                                </li>
                                <li>
                                  {"The 2021 Annual Conference for English Language Teachers, Fischer International, 2 si 3 septembrie 2022"}
                                </li>
                                <li>
                                  <em>
                                    {"Back to School with Cambridge for Secondary Teachers"}
                                  </em>
                                  {", Cambridge University Press and Assessement, 31 august 2022"}
                                </li>
                                <li>
                                  {"EdYouFest, 19-21 august 2024"}
                                </li>
                                <li>
                                  <em>
                                    {"YLE Exam Preparation Made Fun"}
                                  </em>
                                  {" si "}
                                  <em>
                                    {"Reaching Higher"}
                                  </em>
                                  {", 5 septembrie 2024, seminarii organizate de Carturesti si Macmillan Educational"}
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
