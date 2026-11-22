import heroImage from '@/assets/test-de-plasare.jpg';
import ContentPageLayout from '@/components/ContentPageLayout';

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
          {"Teste de limba engleză"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro mobile-page-intro-no-image"} aria-label={"Teste de limba engleză"}>
        <h1>
          {"Teste de limba engleză"}
        </h1>
      </section>
      <section aria-labelledby="placement-intro-title" className="mb-10">
        <h2 id="placement-intro-title">Descoperă ce nivel de engleză ai!</h2>
        <p>Vrei să continui să înveți limba engleză, dar nu știi ce curs ți se potrivește? Alege unul dintre testele de mai jos, în funcție de vârsta ta. După completare, te vom contacta pentru a discuta rezultatele și a-ți recomanda un curs potrivit nivelului tău.</p>
        <p>Testul durează maximum <strong>30 de minute</strong> și evaluează cunoștințele de vocabular și gramatică, precum și abilitățile de exprimare scrisă în limba engleză.</p>
        <p>Pentru ca rezultatul să reflecte cât mai fidel ceea ce știi, te rugăm să lucrezi individual, fără ajutorul altor persoane și fără să consulți internetul, cărți sau alte surse. Răspunde pe baza cunoștințelor tale. Fiecare răspuns ne ajută să identificăm punctele tale forte sau slabe și să îți recomandăm corect cursul potrivit pentru tine.</p>
        <p><strong>Mult succes!</strong></p>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"9345"}></div>
          <section>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div></div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <p></p>
                              <div>
                                <p>
                                  {"Pentru a completa formularul, accesează pagina originală."}
                                </p>
                                <a href={"https://www.proerudio.ro/test-de-plasare/"} data-original-form={"true"} target={"_blank"} rel={"noopener noreferrer"}>
                                  {"Deschide formularul"}
                                </a>
                              </div>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div></div>
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
