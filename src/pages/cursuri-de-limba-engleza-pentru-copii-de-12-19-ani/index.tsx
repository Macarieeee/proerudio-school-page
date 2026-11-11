import ContentPageLayout from '@/components/ContentPageLayout';
import image0 from "@/assets/facility-auditorium.jpg";
import image1 from "@/assets/facility-library.jpg";
import image2 from "@/assets/programs-student.jpg";
import image3 from "@/assets/curriculum-students.jpg";

export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Cursuri de limba engleza pentru copii de 12 – 19 ani"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Cursuri de limba engleza pentru copii de 12 – 19 ani"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani.jpg"} alt={"Cursuri de limba engleza pentru copii de 12 – 19 ani"} decoding={"async"} />
        <h1>
          {"Cursuri de limba engleza pentru copii de 12 – 19 ani"}
        </h1>
      </section>
      <div>
        <div itemProp={"mainContentOfPage"}>
          <div data-id={"163"}></div>
          <section>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div className={"related-content-grid"}>
                              <a href={"/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-fce-cae-cpe/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"" + image0 + "\")"}}>
                                  <h3>
                                    {"Curs de limba engleza HEAD FOR FCE/CAE/CPE"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"12–19 ani"}
                                  </span>
                                  <p>
                                    {"Cursurile Head for FCE/CAE urmează aceeași structura și au un scop bine-definit: să te ghideze către obținerea acestui certificat prin antrenarea tuturor abilităților: scris, citit, vorbit și întelegerea mesajului audiat pentru creșterea nivelului de cunoștințe la limba engleză."}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Vezi cursul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-ielts/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"" + image1 + "\")"}}>
                                  <h3>
                                    {"Curs de limba engleza HEAD FOR IELTS"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"12–19 ani"}
                                  </span>
                                  <p>
                                    {"Testul IELTS /ˈaɪ.ɛlts/ sau International English Language Testing System este un test standardizat internațional pentru a evalua competențele lingvistice de limba engleză. Este organizat de University of Cambridge ESOL Examinations, Consiliul Britanic și IDP Education."}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Vezi cursul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-pentru-tineri-head-for-toefl/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"" + image2 + "\")"}}>
                                  <h3>
                                    {"Curs de limba engleza pentru tineri HEAD FOR TOEFL"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"12–19 ani"}
                                  </span>
                                  <p>
                                    {"Testul TOEFL iBT® (Test of English as a Foreign Language – Internet Based Testing) se administrează prin intermediul Internetului și este o etapă importantă în călătoria ta către o universitate dintr-o țara în care se vorbește limba engleză."}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Vezi cursul"}
                                    <span aria-hidden={"true"}>
                                      {"→"}
                                    </span>
                                  </span>
                                </div>
                              </a>
                              <a href={"/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-ketpet/"} className={"related-content-card"}>
                                <div className={"related-content-media"} style={{"backgroundImage": "url(\"" + image3 + "\")"}}>
                                  <h3>
                                    {"Curs de limba engleza HEAD FOR KET/PET"}
                                  </h3>
                                </div>
                                <div className={"related-content-body"}>
                                  <span className={"related-content-badge"}>
                                    {"12–19 ani"}
                                  </span>
                                  <p>
                                    {"Promovarea unui astfel de examen este o victorie de etapă: te antrenează pentru susținerea altor examene mai importante și mai grele, iți dă încredere în tine și în propriile forțe, îți semnalează din timp anumite puncte slabe (timiditate excesivă la proba de speaking, lentoare în parcurgerea sarcinilor la probele de reading sau writing, etc.) și știi unde mai ai de lucrat."}
                                  </p>
                                  <span className={"related-content-action"}>
                                    {"Vezi cursul"}
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
