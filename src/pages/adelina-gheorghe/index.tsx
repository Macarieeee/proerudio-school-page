import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/Adelina-Gheorghe.webp"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Adelina Gheorghe"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Adelina Gheorghe"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/Adelina-Gheorghe.webp"} alt={"Adelina Gheorghe"} decoding={"async"} />
        <h1>
          {"Adelina Gheorghe"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"9678"}></div>
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
                                <img decoding={"async"} alt={"Adelina Gheorghe"} title={"Adelina-Gheorghe"} srcSet={"https://www.proerudio.ro/wp-content/uploads/2021/10/Adelina-Gheorghe.webp 425w, https://www.proerudio.ro/wp-content/uploads/2021/10/Adelina-Gheorghe-226x300.webp 226w, https://www.proerudio.ro/wp-content/uploads/2021/10/Adelina-Gheorghe-110x146.webp 110w, https://www.proerudio.ro/wp-content/uploads/2021/10/Adelina-Gheorghe-38x50.webp 38w, https://www.proerudio.ro/wp-content/uploads/2021/10/Adelina-Gheorghe-56x75.webp 56w"} sizes={"180px"} src={"https://www.proerudio.ro/wp-content/uploads/2021/10/Adelina-Gheorghe.webp"} className={"original-intro-image"} />
                                <div>
                                  <h2>
                                    {"Adelina Gheorghe"}
                                  </h2>
                                  <h6>
                                    <span>
                                      {"Asistent Manager"}
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
                                {"Responsabilități"}
                              </h3>
                              <ul>
                                <li>
                                  <span>
                                    {"Încasări taxă cursuri"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Evidență"}
                                    {"plăți"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Corespondență"}
                                    {"părinți pentru anunțarea absențelor din motive medicale (sms și poză scutire medicală la numărul 0771.753.323)"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Programarea recuperărilor (sms la numărul 0771.753.323)"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Înscrieri la diferite evenimente (petreceri, tabere, zile de joacă, etc.)"}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    {"Organizare activitate curentă"}
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
