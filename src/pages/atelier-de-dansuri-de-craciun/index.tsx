import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2026/01/Atelier-dansuri-Pro-Erudio-gratuit.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
      <div className={"absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/65 to-foreground/20"}></div>
      <div className={"container relative mx-auto max-w-6xl px-4 py-20 md:py-24"}>
        <a className={"mb-8 inline-flex items-center gap-2 text-sm font-semibold text-background/80"} href={"/articole-pro-erudio/"}>
          <svg xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-arrow-left h-4 w-4"}>
            <path d={"m12 19-7-7 7-7"}></path>
            <path d={"M19 12H5"}></path>
          </svg>
          {"Toate articolele"}
        </a>
        <p className={"mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-background/75"}>
          <svg xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-book-open h-4 w-4"}>
            <path d={"M12 7v14"}></path>
            <path d={"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}></path>
          </svg>
          {"Resurse Pro Erudio"}
        </p>
        <h1 className={"max-w-5xl text-4xl font-bold leading-tight md:text-6xl"}>
          {"Atelierul de dansuri de Craciun"}
        </h1>
        <p className={"mt-6 flex items-center gap-2 text-sm text-background/80"}>
          <svg xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-calendar-days h-4 w-4"}>
            <path d={"M8 2v4"}></path>
            <path d={"M16 2v4"}></path>
            <rect width={"18"} height={"18"} x={"3"} y={"4"} rx={"2"}></rect>
            <path d={"M3 10h18"}></path>
            <path d={"M8 14h.01"}></path>
            <path d={"M12 14h.01"}></path>
            <path d={"M16 14h.01"}></path>
            <path d={"M8 18h.01"}></path>
            <path d={"M12 18h.01"}></path>
            <path d={"M16 18h.01"}></path>
          </svg>
          <time dateTime={"2026-01-19T21:59:02"}>
            {"19 ianuarie 2026"}
          </time>
        </p>
      </div>
    </section>
  }>
    <article className={"page-content event-page event-theme-winter min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
<section className={"mobile-page-intro"} aria-label={"Atelierul de dansuri de Craciun"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2026/01/Atelier-dansuri-Pro-Erudio-gratuit.jpg"} alt={"Atelierul de dansuri de Craciun"} decoding={"async"} />
        <h1>
          {"Atelierul de dansuri de Craciun"}
        </h1>
      </section>

<section className="event-welcome">
<h2>🎄 Atelier de Sărbători <em>Zurgălăi pe Beat și HaHaHa pe Repeat</em>!</h2>
<p>Ho-ho-ho! <strong>Duminică, 7 decembrie 2026</strong>, spiridușii cu vârste cuprinse între <strong>5 și 11 ani</strong>, înscriși la cursurile noastre, sunt invitați la un <strong>super atelier GRATUIT</strong> la <strong><a href="https://maps.app.goo.gl/naCZdCYF6gEhfKmQ7" target="_blank" rel="noopener noreferrer">Sediul Pro Erudio Orizont</a></strong>, unde, timp de <strong>45 de minute,</strong> vor tropăi și țopăi pe ritmurile celor mai îndrăgite cântece de Crăciun, ca să aibă energie tot sezonul sărbătorilor!</p>
</section>

<section className="event-section">
<p className="event-participation">Atenție, atenție! <strong>Înscrierile se fac printr-un email la <a href="mailto:proerudio@gmail.com">proerudio@gmail.com</a> cu numele și vârsta copilului</strong>. Nu amânați înscrierea (termen limită <strong>3 decembrie</strong>), locurile <strong>sunt puține</strong> și se termină mai repede decât fursecurile lui Moș Crăciun! <strong>Orarul se va anunța joi, 4 decembrie, prin email</strong>. Atelierul se va desfășura sub îndrumarea colegei noastre <strong>Cristina Oprea</strong>, antrenor de dans sportiv, cu experiență în lucrul cu copiii.</p>
</section>

<section className="event-section">
<h3 id="event-activities">🕺 Ce facem la atelier?</h3>
<p>
          🎵 Învățăm <strong>coregrafii</strong> pe cântece de Crăciun, care te fac să dansezi chiar dacă nu vrei.<br />
          🎄 Ne încălzim cu <strong>mișcări atât de haioase</strong>, încât și Moșul ar vrea să facă stretching dacă nu ar fi atât de ocupat.<br />
          ✨ Ne distrăm, ne rotim, sărim, ne bâțâim și… sperăm să nu-i deranjăm pe spiridușii Moșului.
        </p>
<p>🎁 Bonus: la final, vei ști pași de dans cu care îl vei uimi pe Moșul în Ajun — cine știe, poate iei și un cadou în plus!</p>
<p className="event-participation">Vrei să vii cu un prieten de vârsta ta? Nicio problemă! Doar să nu uiți să îi rezervi loc și să îl anunți că pentru el atelierul costă 50 lei.</p>
<p>Vino cu poftă de joacă, energie și un pic de <strong>magie de Crăciun în vestimentație</strong>… restul îl aducem noi! ✨</p>
<p>Te așteptăm cu drag!</p>
<p>Echipa Pro Erudio 🎄🎅✨</p>
<p className="event-memory-link"><a href="https://www.facebook.com/media/set/?set=a.1449648989945795&amp;type=3" target="_blank" rel="noopener noreferrer">Click aici</a> pentru a vizualiza albumul din 7 decembrie 2025.</p>
</section>
</article>
    <section className={"mt-14 border-t pt-10"}>
      <h2 className={"mb-6 text-2xl font-bold"}>
        {"Alte articole"}
      </h2>
      <div id={":r0:"} className={"related-content-grid"}>
        <a className={"related-content-card"} href={"/atelier-de-dansuri-populare/"}>
          <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2026/01/dansuri-24-ian-Orizont.jpg\")"}}>
            <h3>
              {"Atelierul de dansuri populare"}
            </h3>
          </div>
          <div className={"related-content-body"}>
            <span className={"related-content-badge"}>
              {"Articole"}
            </span>
            <p>
              {"De Ziua Unirii, ne prindem de mâini și jucăm românește! 💃🕺 🎶 Atelier GRATUIT de dansuri tradiționale pentru copii În spiritul acestei zile pline de semnificație, te invităm gratuit la un atelier de dansuri tradiționale românești – un prilej de bucurie, tradiție și comuniune prin mișcare și muzică populară. ✨ De ce este special acest atelier? Pentru că este gândit ca o activitate distractivă și accesibilă copiilor neinițiați în dansurile populare. Așadar, vino fără teamă să „dăm mână cu mână” într-o horă a prieteniei și a tradiției! 📅 Când: Sâmbătă, 24 ianuarie 2026 📍 Unde: Sediul Pro Erudio Orizont (https://maps.app.goo.gl/naCZdCYF6gEhfKmQ7) ⏰ Ora: Va fi anunțată prin email în data de 22 ianuarie 👧 Vârste: copii 5–12 ani (grupe de vârste apropiate) 🎵 Ce facem la atelier? • Învățăm dansuri populare românești prin demonstrații și explicații pas cu pas •"}
            </p>
            <span className={"related-content-action"}>
              {"Citește articolul"}
              <span aria-hidden={"true"}>
                {"→"}
              </span>
            </span>
          </div>
        </a>
        <a className={"related-content-card"} href={"/atelierul-lui-mos-craciun/"}>
          <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/12/atelier-1.jpg\")"}}>
            <h3>
              {"Atelierul lui Moş Crăciun"}
            </h3>
          </div>
          <div className={"related-content-body"}>
            <span className={"related-content-badge"}>
              {"Articole"}
            </span>
            <p>
              {"Sezonul sărbătorilor se apropie cu paşi grăbiţi. Aşa cum v-am obişnuit, luna decembrie este luna cadourilor şi la Pro Erudio. Astfel, îi invităm pe copilaşi sâmbătă, 9"}
            </p>
            <span className={"related-content-action"}>
              {"Citește articolul"}
              <span aria-hidden={"true"}>
                {"→"}
              </span>
            </span>
          </div>
        </a>
        <a className={"related-content-card"} href={"/ziua-certificatelor-cambridge/"}>
          <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2026/01/Atelier-dansuri-Pro-Erudio-gratuit.jpg\")"}}>
            <h3>
              {"ZIUA CERTIFICATELOR CAMBRIDGE!"}
            </h3>
          </div>
          <div className={"related-content-body"}>
            <span className={"related-content-badge"}>
              {"Articole"}
            </span>
            <p>
              {"ZIUA CERTIFICATELOR CAMBRIDGE! Fiecare examen Cambridge reprezintă mult mai mult decât un rezultat. În spatele fiecărui certificat se află luni de învățare, exercițiu,"}
            </p>
            <span className={"related-content-action"}>
              {"Citește articolul"}
              <span aria-hidden={"true"}>
                {"→"}
              </span>
            </span>
          </div>
        </a>
        <a className={"related-content-card"} href={"/structura-anului-scolar-2026-2027/"}>
          <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2026/04/1-scaled.jpg\")"}}>
            <h3>
              {"Structura anului școlar 2026-2027"}
            </h3>
          </div>
          <div className={"related-content-body"}>
            <span className={"related-content-badge"}>
              {"Articole"}
            </span>
            <p>
              {"Structura anului școlar 2026-2027 la Pro Erudio și cele mai importante activități Structura anului şcolar la Pro Erudio"}
            </p>
            <span className={"related-content-action"}>
              {"Citește articolul"}
              <span aria-hidden={"true"}>
                {"→"}
              </span>
            </span>
          </div>
        </a>
        <a className={"related-content-card"} href={"/copilul-asculta-doar-daca-tipi-mit-sau-realitate/"}>
          <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2025/11/Picture1.jpg\")"}}>
            <h3>
              {"Copilul ascultă doar dacă țipi. Mit sau realitate?"}
            </h3>
          </div>
          <div className={"related-content-body"}>
            <span className={"related-content-badge"}>
              {"Articole"}
            </span>
            <p>
              {"O tabăra este un mod ideal de a experimenta activităţi noi (inclusiv exersarea limbii engleze cu trainer nativ),de a se distra şi a-şi face prieteni noi."}
            </p>
            <span className={"related-content-action"}>
              {"Citește articolul"}
              <span aria-hidden={"true"}>
                {"→"}
              </span>
            </span>
          </div>
        </a>
        <a className={"related-content-card"} href={"/8-motive-sa-mi-trimit-copilul-in-tabara/"}>
          <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2016/01/8-motive-sa-mi-trimit-copilul-in-tabara.jpg\")"}}>
            <h3>
              {"8 motive să-mi trimit copilul în tabără"}
            </h3>
          </div>
          <div className={"related-content-body"}>
            <span className={"related-content-badge"}>
              {"Articole"}
            </span>
            <p>
              {"O tabăra este un mod ideal de a experimenta activităţi noi (inclusiv exersarea limbii engleze cu trainer nativ),de a se distra şi a-şi face prieteni noi."}
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
    </section>
  </ContentPageLayout>;
}
