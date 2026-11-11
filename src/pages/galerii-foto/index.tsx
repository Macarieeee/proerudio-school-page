import ContentPageLayout from '@/components/ContentPageLayout';
import heroImage from "@/assets/galerii-foto.jpg";

export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={heroImage} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Galerii foto"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Galerii foto"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/Galerie-Foto.jpg"} alt={"Galerii foto"} decoding={"async"} />
        <h1>
          {"Galerii foto"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"703"}></div>
          <section>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div className={"related-content-grid"} id={"card-grid-0"}>
                              <a href={"/parinti-informati-copii-motivati-galerie-foto/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/18926483793_5a06806a2b_b-1024x480-1024x480.jpg\")"}}>
                                  <h3>
                                    {"Părinți informați, copii motivați – Galerie foto"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Atelier “Părinți informați, copii motivați” Mulțumim tuturor participanților la atelierul PĂRINȚI INFORMAȚI, COPII MOTIVAȚI, atelier organizat de Pro"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/storytime-5-6-ani-galerie-foto/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/Curs-de-vara-de-limba-engleza-Storytime-5-6-ani2-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Storytime (5-6 ani) – Galerie foto"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Curs de vară de limba engleză – Storytime (5-6 ani) Am fost un grup plin de energie şi"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/playday-la-pro-erudio/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/prima-sesiune-playday-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Playday la Pro Erudio"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Playday – Prima sesiune Prima sesiune Playday a fost o petrecere în toată regula, după spusele copiilor participanți. Chiar dacă"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/storytime-13-24-iulie/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/storytime-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Curs de vara de limba engleza STORYTIME – (8-10 ani)"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Storytime – seria 13-24 iulie (8-10 ani) Poveştile sunt o mare parte din viaţa noastră, fie că e vorba de"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/jurnalul-unui-pusti/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/jurnalul-unui-pusti.jpg\")"}}>
                                  <h3>
                                    {"Jurnalul unui pusti"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Jurnalul unui puști (The Diary of a Wimpy Kid) Întâlnire de gradul trei pentru copiii din grupul nostru de teatru"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/distractie-la-caldurica/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/Distractia-la-caldurica-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Distracție la căldurică"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Distracție la căldurică Deşi iarnă cu zăpadă se lasă aşteptată, “Distracţia la căldurică” nu a avut nimic de pierdut. Ne-am"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/halloween-party-2015/"} className={"related-content-card"} hidden={true}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/Halloween-Party-2015-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Halloween Party 2015"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Halloween Party– 2015 Sâmbătă, 31 octombrie 2015 M-am trezit de dimineaţă cu gândul la petrecerea ce urmează, după o săptămâna întreagă"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/cursuri-de-vara-in-limba-engleza-cinematics-sesiunea-1/"} className={"related-content-card"} hidden={true}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/Cursuri-de-vara-in-limba-engleza-Cinematics-sesiunea-1-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Cursuri de vara in limba engleza “Cinematics” – sesiunea 1"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Cursuri de vară"}
                                  </span>
                                  <p>
                                    {"Cursuri de vară în limba engleză “Cinematics” – Sesiunea 1 5, 4, 3, 2, 1 START! Începe incursiunea în lumea filmului."}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/puppet-theatre-13-24-iulie/"} className={"related-content-card"} hidden={true}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/puppet-theatre-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Curs de vară de limba engleză PUPPET THEATRE (4-6 ani)"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"PUPPET THEATRE – seria 13 – 24 iulie (4-6 ani) Vara este momentul cel mai potrivit să încercăm ceva nou."}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/storytime-6-8-ani-galerie-foto/"} className={"related-content-card"} hidden={true}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/Curs-de-vara-de-limba-engleza-Storytime-6-8-ani-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Curs de vara de limba engleza STORYTIME (6-8 ani)"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Curs de vară de limba engleză “Storytime” (6-8) ani Am citit, ascultat și vizionat povești în limba engleză, am interpretat"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/christmas-is-coming/"} className={"related-content-card"} hidden={true}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/Christmas-is-coming-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Christmas is coming…"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Christmas is coming… Vine Crăciunul şi ca în fiecare an, ne pregătim intens pentru sărbătoarea cea mai iubită de copii."}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/halloween-party-2016/"} className={"related-content-card"} hidden={true}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/11/haloween-party-2016-1024x536.jpg\")"}}>
                                  <h3>
                                    {"Halloween Party 2016"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"În atmosfera mai mohorâtă de inceput de toamna, o petrecere tematică de Halloween este alegerea perfectă pentru o dupa-amiaza de sambata. Sarbatoarea de Halloween"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/petreceri-halloween-2017/"} className={"related-content-card"} hidden={true}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2017/11/Petreceri-Halloween-2017-1024x536.jpg\")"}}>
                                  <h3>
                                    {"Petreceri Halloween 2017"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"PETRECERI HALLOWEEN 2017 Anul acesta pentru petrecerea de Halloween am avut mai multe serii, în urma cererilor numeroase de participare. Mulțumim"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/atelierele-lui-mos-craciun-9-si-10-decembrie-2017/"} className={"related-content-card"} hidden={true}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2018/01/Atelierele-lui-Mos-Craciun-1024x536.jpg\")"}}>
                                  <h3>
                                    {"Atelierele lui Moș Crăciun (9 și 10 decembrie 2017)"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Atelierele lui Moș Crăciun (9 și 10 decembrie 2017) Distracția din Atelierul lui Moș Crăciun, alături de Rudolph și spiridușul Ioana,"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/conversatie-cu-profesor-nativ-englez-cadoul-meu-de-mos-nicolae/"} className={"related-content-card"} hidden={true}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/Conversatie-cu-profesor-nativ-englez-Cadoul-meu-de-Mos-Nicolae-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Conversație cu profesor nativ englez – Cadoul meu de Moș Nicolae"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Conversație cu profesor nativ englez – Cadoul meu de Moș Nicolae De unde o fi ştiut Moş"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/tabara-in-anglia-2018/"} className={"related-content-card"} hidden={true}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2018/08/jurnal-marea-britanie-1024x536.jpg\")"}}>
                                  <h3>
                                    {"Tabără în Anglia 2018"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Articole"}
                                  </span>
                                  <p>
                                    {"Jurnal de tabără în Marea Britanie WINCHESTER 2018 Ziua I Imediat ce am aterizat pe aeroportul din Londra, am trecut"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Citește articolul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div className={"card-grid-more"}>
                              <button type={"button"} className={"grid-more-button"} aria-controls={"card-grid-0"} aria-expanded={"false"} data-expand-card-grid={"true"}>
                                {"Vezi mai mult"}
                              </button>
                            </div>
                          </div>
                          <div>
                            <div className={"related-content-grid"}>
                              <a href={"/jurnal-de-tabara-english-explorers-camp-2021/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2021/09/211984187_3670286393072842_1476355694493328414_n-1024x768.jpg\")"}}>
                                  <h3>
                                    {"Jurnal de tabără English Explorers Camp 2021"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Cursuri Pro Erudio"}
                                  </span>
                                  <p>
                                    {"Jurnal de tabără English Explorers Camp 2021 Day 1 A inceput si cea de-a doua serie de tabara din vara aceasta!"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Vezi cursul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/jurnal-de-tabara-british-camps-2016/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/07/British-Camps-2016-Jurnal-de-tabara-Ziua-1-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Jurnal de tabara BRITISH CAMPS 2016"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Pro Erudio"}
                                  </span>
                                  <p>
                                    {"Jurnal de tabără BRITISH CAMPS 2016 galerii foto/video"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Vezi detaliile"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/jurnal-de-tabara-british-camps-2015-seria-2/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/Tabara-de-limba-engleza-BRITISH-CAMPS-seria-2-Ziua-1-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Jurnal de tabara BRITISH CAMPS 2015 (seria 2)"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Pro Erudio"}
                                  </span>
                                  <p>
                                    {"Jurnal de tabără BRITISH CAMPS 2015 (seria a II-a) galerii foto/video"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Vezi detaliile"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/jurnal-de-tabara-british-camps-2015-seria-1/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/British-Camps-2015-Jurnal-de-tabara-Ziua-1-1024x410.jpg\")"}}>
                                  <h3>
                                    {"Jurnal de tabara BRITISH CAMPS 2015 (seria 1)"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"Pro Erudio"}
                                  </span>
                                  <p>
                                    {"Jurnal de tabără BRITISH CAMPS 2015 (seria I) galerii foto/video"}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Vezi detaliile"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
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
