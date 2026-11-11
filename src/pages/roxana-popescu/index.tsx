import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2026/09/roxana.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Roxana Popescu"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Roxana Popescu"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2026/09/roxana.jpg"} alt={"Roxana Popescu"} decoding={"async"} />
        <h1>
          {"Roxana Popescu"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"51"}></div>
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
                                <img decoding={"async"} src={"https://www.proerudio.ro/wp-content/uploads/2026/09/roxana.jpg"} alt={"Roxana Popescu"} title={"roxana"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2026/09/roxana.jpg 2060w, https://www.proerudio.ro/wp-content/uploads/2026/09/roxana-284x300.jpg 284w, https://www.proerudio.ro/wp-content/uploads/2026/09/roxana-968x1024.jpg 968w, https://www.proerudio.ro/wp-content/uploads/2026/09/roxana-768x812.jpg 768w, https://www.proerudio.ro/wp-content/uploads/2026/09/roxana-1452x1536.jpg 1452w, https://www.proerudio.ro/wp-content/uploads/2026/09/roxana-1936x2048.jpg 1936w, https://www.proerudio.ro/wp-content/uploads/2026/09/roxana-71x75.jpg 71w, https://www.proerudio.ro/wp-content/uploads/2026/09/roxana-594x628.jpg 594w, https://www.proerudio.ro/wp-content/uploads/2026/09/roxana-480x508.jpg 480w"} sizes={"180px"} className={"original-intro-image"} />
                                <div>
                                  <h2>
                                    {"Roxana Popescu"}
                                  </h2>
                                  <h6>
                                    <span>
                                      {"PROFESOR DE LIMBA ENGLEZĂ"}
                                      {"– DIRECTOR OF STUDIES"}
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
                                    {"Licențiată"}
                                    {"în filologie – Facultatea de Litere, Universitatea din Craiova Specializare: limba și literatura engleză – limba și literatura franceză, 2001"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Bursă universitară (2000), Universitatea din Corsica “Pascal Paoli”, Franța"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Licențiată"}
                                    {"în filosofie/sociologie – Facultatea de Istorie, Filosofie și Geografie, Universitatea din Craiova, Specializare: filosofie – sociologie, 2006"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Studii postuniversitare, Programul de Masterat “Modernitate în cultura și literatura europeană”, Universitatea “Spiru Haret”, București, martie 2009"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Absolventă a cursului de formare în Marea Britanie, organizat de Pilgrims LTD la Universitatea Kent și finanțat de Agenția Națională prin Programul Comenius, Humanising Testing, august 2008"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Absolventă a cursului „Manager de Proiect”, organizat de EuroBest Team, martie, 2011"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Absolventă a cursului de formare în Marea Britanie Refresher Course in Practical, Creative Methodology for Overseas English Language Teachers- Secondary Education, organizat de “Lake School of English”, Oxford și finanțat prin Programul Sectorial Comenius cu sprijinul FSE și POSDRU, iulie 2011"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Absolventă"}
                                    {"a cursului Antreprenoriat la Feminin, martie 2012"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Gradul didactic II (2009) obținut cu media 10 și Gradul didactic I (2012) obținut cu media 10"}
                                  </span>
                                </li>
                              </ul>
                              <h3>
                                {"Experiență"}
                                {"profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"De-a lungul timpului, pe lângă"}
                                  {"postul de profesor titular de limba engleză de la Colegiul Național “Spiru Haret”, a avut o mulțime de colaborări cu diferite centre de limbi străine, școli și grădinițe particulare cum ar fi Shakespeare School, Kids Club, Planeta Copiilor, ABC Training etc."}
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
                                  {"Conferința National Geographic Learning Day –"}
                                  {"“Metode moderne și perspective globale în predarea limbii engleze”, martie 2019;"}
                                </li>
                                <li>
                                  {"Conferinta Uniscan si EEC "}
                                  <em>
                                    {"Re-Imagining English Language Teaching: Involve, Evolve, Inspire"}
                                  </em>
                                  {", Sinaia, 2018;"}
                                </li>
                                <li>
                                  {"The 2014 National Conference for English Language Teachers, Fischer International"}
                                </li>
                                <li>
                                  {"Workshops – Teaching Preparatory Grade Students, Uniscan Grup International, 2013"}
                                </li>
                                <li>
                                  {"Cambridge Day, organizat de Sitka- Centrul de Carte Străină, 2013"}
                                </li>
                                <li>
                                  {"Teacher Development Seminar, Sitka- Centrul de carte străină, 2013"}
                                </li>
                                <li>
                                  {"The 2013 National Conference for English Language Teachers, Fischer International"}
                                </li>
                                <li>
                                  {"“Preparing Students for FCE”"}
                                </li>
                                <li>
                                  {"“The Methodology of Teaching Literature”"}
                                </li>
                                <li>
                                  {"A 15-a Conferință Națională BETA , “English as a Global Language”"}
                                </li>
                                <li>
                                  {"“Ora de consiliere și orientare școlară – în vederea implementării noii programe de consiliere și orientare”"}
                                </li>
                                <li>
                                  {"“Graded Examinations in Spoken English”, BETA"}
                                </li>
                                <li>
                                  {"“Preparing Students for YLE”"}
                                </li>
                                <li>
                                  {"“Teaching Young Learners”"}
                                </li>
                                <li>
                                  {"“Preparing Students for PET”"}
                                </li>
                                <li>
                                  {"“The Teacher as a Manager”"}
                                </li>
                                <li>
                                  {"RATE Conference, ” More than Teaching, Training for Life”"}
                                </li>
                                <li>
                                  {"“How to Use a Smartboard in the Language Class”"}
                                </li>
                                <li>
                                  {"Conferința de informare și conștientizare a oportunităților antreprenoriale din cadrul proiectului POSDRU “Dezvoltarea competențelor antreprenoriale – o alternativă"}
                                  {"eficientă de adaptare la piața muncii în societatea informațională”"}
                                </li>
                                <li>
                                  {"“The Oxford Winter Day Workshops”"}
                                </li>
                                <li>
                                  {"“Cambridge Day”"}
                                </li>
                                <li>
                                  {"“A Fresh Approach: Bringing Learning to Life”"}
                                </li>
                                <li>
                                  {"Organizate de "}
                                  <i>
                                    {"British Council"}
                                  </i>
                                  {"și "}
                                  <i>
                                    {"Casa Corpului Didactic"}
                                  </i>
                                  {", edituri de prestigiu "}
                                  <i>
                                    {"Fischer Educational"}
                                  </i>
                                  {","}
                                  <i>
                                    {"Oxford"}
                                  </i>
                                  {", "}
                                  <i>
                                    {"Cambridge"}
                                  </i>
                                  {" etc."}
                                </li>
                              </ul>
                              <h3>
                                {"Alte activități"}
                              </h3>
                              <ul>
                                <li>
                                  {"coordonator grup tabăra educațională de limba engleză"}
                                  {"în România English Explorers Camps, 2011-prezent"}
                                </li>
                                <li>
                                  {"coordonator grup tabăra educațională de limba engleză"}
                                  {"în Marea Britanie, 2010 (Oxford), 2013 (Canterbury), 2016 (Wycliffe), 2019 (Ramsgate)"}
                                </li>
                                <li>
                                  {"coordonator grup tabăra educațională de limba engleză"}
                                  {"în România British Camps (Cheile Gradiștei), iulie 2013 si 2014"}
                                </li>
                                <li>
                                  {"coordonator grup tabăra educațională de limba engleză"}
                                  {"în Marea Britanie (University of Kent, Canterbury), august, 2013"}
                                </li>
                                <li>
                                  {"organizator de numeroase evenimente ( ” Tea, Quizzes and Fun” , “Talent Show”, “Our Future Is in Our Hands”, “Deserturi multiculturale pentru papile și timpane”, “Drama Is Fun”, “Essays and Watercolours” etc.)"}
                                </li>
                                <li>
                                  {"activități în cadrul proiectelor (“School Inside Community and Community Inside School”, “Primăvara școlilor”)"}
                                </li>
                                <li>
                                  {"evaluator la numeroase concursul locale și naționale ( “Made for Europe”, “Magic Words”, olimpiade școlare)"}
                                </li>
                                <li>
                                  {"coordonator Parteneriat educațional național “Orașul nostru ieri, azi, în viitor”, concursul de eseuri pe tema “What is the Meaning of Tolerance in the Modern World?”, eveniment organizat de Ambasada Statelor Unite ale Americii, inițiator activitate de voluntariat “Un mediu mai curat, o viață"}
                                  {"mai sănătoasă”"}
                                </li>
                                <li>
                                  {"teacher trainer, Shakespeare School of Languages, ABC Training"}
                                </li>
                                <li>
                                  {"coordonator grup lotul olimpic limba engleză (2004 si 2007)"}
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
