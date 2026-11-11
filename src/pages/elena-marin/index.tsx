import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/elenamarin.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Elena Marin"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Elena Marin"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/elenamarin.jpg"} alt={"Elena Marin"} decoding={"async"} />
        <h1>
          {"Elena Marin"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"58"}></div>
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
                                <img decoding={"async"} src={"https://www.proerudio.ro/wp-content/uploads/2016/01/elenamarin-226x300.jpg"} alt={"Elena Marin"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2016/01/elenamarin-226x300.jpg 226w, https://www.proerudio.ro/wp-content/uploads/2016/01/elenamarin-110x146.jpg 110w, https://www.proerudio.ro/wp-content/uploads/2016/01/elenamarin-38x50.jpg 38w, https://www.proerudio.ro/wp-content/uploads/2016/01/elenamarin-56x75.jpg 56w, https://www.proerudio.ro/wp-content/uploads/2016/01/elenamarin.jpg 425w"} sizes={"180px"} className={"original-intro-image"} />
                                <div>
                                  <h2>
                                    {"Elena Marin"}
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
                              <h2>
                                <span>
                                  {"Formare profesională"}
                                </span>
                              </h2>
                              <ul>
                                <li>
                                  {"Licențiată"}
                                  {"în jurnalism și științele comunicării, Universitatea București, 2010"}
                                </li>
                                <li>
                                  {"Absolventă a Cursului de formator, GS Consulting, 2013"}
                                </li>
                                <li>
                                  {"Studii postuniversitare, Programul de Masterat “Administrarea afacerilor” cu predare bilingvă"}
                                  {"engleză-română, Academia de Studii Economice, Universitatea din București, 2014"}
                                </li>
                                <li>
                                  {"Certificare Teaching Knowledge Test (YLE), 1 aprilie 2019"}
                                </li>
                              </ul>
                              <h3>
                                {"Experiență profesională"}
                              </h3>
                              <ul>
                                <li>
                                  {"Profesor colaborator de limba engleză pentru clubul “Britteen”, Consiliul Britanic, București, 2012 – prezent"}
                                </li>
                                <li>
                                  {"Trainer și speaker, limba engleză"}
                                  {"și limba română, “Life After Work”, 2012 – prezent"}
                                </li>
                              </ul>
                              <h3>
                                {"Participare la cursuri de dezvoltare profesională"}
                              </h3>
                              <ul>
                                <li>
                                  <em>
                                    {"Preparing Students for PET"}
                                  </em>
                                  {", British Council, București, 22 februarie 2015;"}
                                </li>
                                <li>
                                  <em>
                                    {"Teaching English in the Age of Digital Culture"}
                                  </em>
                                  {", Express Publishing si Uniscan Group Educational, București, 28 mai 2016;"}
                                </li>
                                <li>
                                  <em>
                                    {"Fun and games and language learning"}
                                  </em>
                                  {", Active Learning Training Centre si Express Publishing –"}
                                  {", Uniscan Group, București, octombrie 2016;"}
                                </li>
                                <li>
                                  {"Workshop "}
                                  <em>
                                    {"Keeping It Active, "}
                                  </em>
                                  {"Express Publishing, Uniscan Group Educational si EEC, București, 5 noiembrie 2017;"}
                                </li>
                                <li>
                                  {"Conferinta Uniscan si EEC "}
                                  <em>
                                    {"Re-Imagining English Language Teaching: Involve, Evolve, Inspire"}
                                  </em>
                                  {", Sinaia, 2018;"}
                                </li>
                                <li>
                                  {"Preparing Students for FCE, British Council, București, ianuarie 2019;"}
                                </li>
                                <li>
                                  {"Preparing Students for YLE, British Council, Bucuresti, 12 mai 2019."}
                                </li>
                                <li>
                                  {"“Preparing Students for YLE”, British Council, 2013"}
                                </li>
                                <li>
                                  {"“Preparing Students for KET”, British Council, 2013"}
                                </li>
                                <li>
                                  {"“Tehnici de învățare rapidă”, prin The Kingdom Education, cu suportul British Council, 2013"}
                                </li>
                                <li>
                                  {"“Child Protection Awareness”, British Council, 2014"}
                                </li>
                                <li>
                                  {"“Cum îi ajutăm pe copii să-și gestioneze emoțiile”, Parentship – Seminarii pentru părinți, 2014"}
                                </li>
                                <li>
                                  {"“Breaking the routine”,"}
                                  {" British Council, martie 2015"}
                                </li>
                                <li>
                                  {"The 2015 National Conference for English Language Teachers, Fischer International"}
                                </li>
                                <li>
                                  {"“Sooner Barbarity Than Boredom – How to convert chaos into creativity”, Thomas Jones, Qdays Educational, aprilie 2015"}
                                </li>
                                <li>
                                  {"TKT, European Examinations Centre, septembrie 2015"}
                                </li>
                              </ul>
                              <h3>
                                {"Alte activități"}
                              </h3>
                              <p>
                                {"Coordonator grup tabăra educațională de limba engleză"}
                                {"în România Consiliul Britanic, zona Bran, vara 2014"}
                              </p>
                              <p>
                                {"Proiectarea activității în cadrul clubului Britteen pentru copii de 9-14 ani"}
                              </p>
                              <p>
                                {"Organizator evenimente în cadrul Life After Work"}
                              </p>
                              <p>
                                {"Organizator teambuilding pentru parteneri, atât în limba română, cât și în limba engleză (Vodafone, Erikson, Michelin, The Group, Strauss, Butan Gas, etc)"}
                              </p>
                              <p>
                                {"Participare la concursuri de publicitate, locul 2 la faza europeană cu proiectul de creștere a conștiinței despre poluarea mediului prin utilizarea autoturismelor convenționale, prin prezentarea beneficiilor autoturismelor hibride (“Eco-cars”)"}
                              </p>
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
