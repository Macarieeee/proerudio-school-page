import teacherBanner from '@/assets/2.jpg';
import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={teacherBanner} alt={""} className={"absolute inset-0 h-full w-full object-cover object-top"} />
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
          {"Alexandra Florina Matei"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content teacher-profile-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"9564"}></div>
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
                                <img decoding={"async"} alt={"Alexandra Florina Matei"} title={"20221122_123336"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2022/11/20221122_123336.jpg 1080w, https://www.proerudio.ro/wp-content/uploads/2022/11/20221122_123336-240x300.jpg 240w, https://www.proerudio.ro/wp-content/uploads/2022/11/20221122_123336-819x1024.jpg 819w, https://www.proerudio.ro/wp-content/uploads/2022/11/20221122_123336-768x960.jpg 768w, https://www.proerudio.ro/wp-content/uploads/2022/11/20221122_123336-117x146.jpg 117w, https://www.proerudio.ro/wp-content/uploads/2022/11/20221122_123336-40x50.jpg 40w, https://www.proerudio.ro/wp-content/uploads/2022/11/20221122_123336-60x75.jpg 60w, https://www.proerudio.ro/wp-content/uploads/2022/11/20221122_123336-502x628.jpg 502w"} sizes={"180px"} src={"https://www.proerudio.ro/wp-content/uploads/2022/11/20221122_123336.jpg"} />
                                <div>
                                  <h2>
                                    {"Alexandra Florina Matei"}
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
                                    {"2006 – 2009 Facultate de Litere, specializarea limba și literatură română – engleză, Universitatea din Pitești"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"2009 – 2012 Facultatea de Științe ale Comunicării – Jurnalism, Universitatea din Pitești"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"2009 – 2012 Modul pedagogic Nivel 1"}
                                    {" – Universitatea din Pitești"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"2011 – 2012 College of Social Sciences- Bursă Erasmus – Internațional Business|Vilnius/Lituania"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"2011 – 2013 Masterat – Traductologie Limba Engleză, Universitatea din Pitești"}
                                  </span>
                                </li>
                              </ul>
                              <h3>
                                {"Experiență"}
                                {" profesională"}
                              </h3>
                              <ul>
                                <li>
                                  <span>
                                    {"Profesor de limba engleză – Grădiniță „Happy Kids” și Grădiniță „Casă cu Pitici”, București"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Profesor Pingu’s English – Grădință „Casă cu Pitici” (Predarea cursului Pingu’s English acreditat de Linguaphone)"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Profesor de jurnalism (voluntar) „Reporterii de mâine” – Școală de Excelență Sf. Filofteia, Pitești"}
                                  </span>
                                </li>
                              </ul>
                              <h3>
                                {"Participare la cursuri de dezvoltare profesională"}
                              </h3>
                              <ul>
                                <li>
                                  <span>
                                    {"Conferința National Geographic Learning Day –"}
                                    {"“Metode moderne și perspective globale în predarea limbii engleze”, martie 2019;"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"The Annual Fischer International Conference for ELT, 11th Edition, septembrie"}
                                    {" 2018;"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Conferinta Uniscan si EEC "}
                                    <em>
                                      {"Re-Imagining English Language Teaching: Involve, Evolve, Inspire"}
                                    </em>
                                    {", Sinaia, 2018."}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"The Internațional Conference „Teaching English în the Age of Digital Culture”, organizată de Uniscan, 2016"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"The 2015 Național Conference for English Language Teachers organised by Fischer Internațional, 2015"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Teacher Training Course „Sooner Barbarity Than Boredom”, 2015"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"„Breaking the Routine”, Consiliul Britanic, 2015"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Certificat Youthpass"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"„The Son-Rise Therapy” (terapie pentru copiii cu autism), Szczecin, Polonia, 2015"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"DISSEMINATION AND EXPLOITATION OF RESULTS UNDER Erasmus + Programme, workshop, Martie 2015, Pitești"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"21 de Metode pentru Afacerea ta, seminar, Pitești, 2015"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"MONTESSORI METHODOLOGY ÎN LANGUAGE TEACHING, Pitești, 2014"}
                                  </span>
                                </li>
                              </ul>
                              <h3>
                                {"Alte activități"}
                              </h3>
                              <ul>
                                <li>
                                  <span>
                                    {"Coordonator Proiect – 100 Points of View"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Secretar CEAC – Grădiniță cu program prelungit „Casă cu Pitici”"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Inward Mobility Coordinator – Gecko Programmes Limited, Wolverhampton, UK"}
                                  </span>
                                  <ul>
                                    <li>
                                      <span>
                                        {"participarea la proiecte europene în cadrul programului Erasmus + (Formare profesională, parteneriate strategice, domeniul universitar, educația adulților, tineret și domeniul școlar)"}
                                      </span>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span>
                                    {"Voluntar SEV – Polites Association, Szczecin, Polonia"}
                                  </span>
                                  <ul>
                                    <li>
                                      <span>
                                        {"ativitati pentru copii, desfășurate în cadrul proiectului MultiKulti"}
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        {"voluntariat în cadrul ONG-urilor locale (Free Road Foundation, Otoja Foundation)"}
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        {"activități desfășurate la Centrul de Voluntariat Local ( Polites Association)"}
                                      </span>
                                    </li>
                                  </ul>
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
