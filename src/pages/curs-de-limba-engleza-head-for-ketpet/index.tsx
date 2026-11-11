import heroImage from '@/assets/curs-de-limba-engleza-head-for-ketpet.jpg';
import ContentPageLayout from '@/components/ContentPageLayout';
import image1 from "@/assets/about-classroom.jpg";
import image2 from "@/assets/facility-auditorium.jpg";
import image3 from "@/assets/facility-library.jpg";
import image4 from "@/assets/programs-student.jpg";

export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body py-16 md:py-20" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground"}>
      <img src={heroImage} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
      <div className={"absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/65 to-foreground/20"}></div>
      <div className={"container relative mx-auto px-4 py-20 md:py-24"}>
        <div className={"max-w-4xl text-background"}>
          <a className={"mb-8 inline-flex items-center gap-2 text-sm font-semibold text-background/80 transition-colors hover:text-background"} href={"/"}>
            <svg xmlns={"http://www.w3.org/2000/svg"} width={"24"} height={"24"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} className={"lucide lucide-arrow-left h-4 w-4"}>
              <path d={"m12 19-7-7 7-7"}></path>
              <path d={"M19 12H5"}></path>
            </svg>
            {" Înapoi la pagina principală"}
          </a>
          <p className={"mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-background/75"}>
            {"Cursuri pentru copii de 12–19 ani"}
          </p>
          <h1 className={"mb-6 text-4xl font-bold leading-tight md:text-6xl"}>
            {"Head for Key/Preliminary — pregătire pentru examenele Cambridge English"}
          </h1>
          <p className={"max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl"}>
            {"Cursuri pentru copii și adolescenți de 12–18 ani, disponibile la sediu și online"}
          </p>
        </div>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Head for Key/Preliminary — pregătire pentru examenele Cambridge English"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/Curs-de-limba-engleza-HEAD-FOR-KET-PET-ProErudio1-1.webp"} alt={"Head for Key/Preliminary — pregătire pentru examenele Cambridge English"} decoding={"async"} />
        <h1>
          {"Head for Key/Preliminary — pregătire pentru examenele Cambridge English"}
        </h1>
        <p>
          {"Cursuri pentru copii și adolescenți de 12–18 ani, disponibile la sediu și online"}
        </p>
      </section>
      <div>
        <p>
          {"Ai crescut, ai acumulat cunoștințe și te gândești la primul tău examen Cambridge English? Te ajutăm să faci următorul pas cu încredere."}
        </p>
        <p>
          {"Cursul „Head for Key/Preliminary” îmbină dezvoltarea competențelor de limba engleză cu pregătirea pentru "}
          <strong>
            {"A2 Key for Schools (KET)"}
          </strong>
          {" și "}
          <strong>
            {"B1 Preliminary for Schools (PET)"}
          </strong>
          {". Alegem împreună obiectivul potrivit nivelului tău și construim, pas cu pas, drumul către examen."}
        </p>
        <h2>
          {"De ce să te pregătești pentru un examen?"}
        </h2>
        <p>
          {"Un examen îți oferă "}
          <strong>
            {"un obiectiv concret"}
          </strong>
          {" și un motiv în plus să înveți cu perseverență. Atunci când te pregătești pentru un examen simți o dorință mai puternică pentru a învăța fiindcă susținerea unui examen în intervalul imediat următor dă un scop tangibil efortului, iar reușita un nou avânt."}
        </p>
        <p>
          {"În plus, ai parte de o "}
          <strong>
            {"evaluare externă"}
          </strong>
          {", o certificare a faptului că ești pe calea cea bună, că ai atins un anumit standard în învățarea limbii engleze."}
        </p>
        <p>
          {"Promovarea unui examen Cambridge este "}
          <strong>
            {"o victorie de etapă"}
          </strong>
          {": te antrenează pentru susținerea altor examene mai importante și mai grele, îți dă încredere în tine și în propriile forțe, îți semnalează din timp anumite puncte slabe (timiditate excesivă la proba de speaking, lentoare în parcurgerea sarcinilor la probele de reading sau writing, etc.) și știi unde mai ai de lucrat."}
        </p>
        <h2>
          {"Cum te ajutăm să te pregătești?"}
        </h2>
        <ul>
          <li>
            <strong>
              {"Îți dezvolți toate cele patru competențe:"}
            </strong>
            {" citire, scriere, ascultare și vorbire — "}
            <em>
              {"Reading, Writing, Listening și Speaking"}
            </em>
            {". Construim o bază solidă de cunoștințe, pe care să o poți folosi atât la examen, cât și în comunicarea de zi cu zi."}
          </li>
          <li>
            <strong>
              {"Te familiarizezi cu formatul examenului."}
            </strong>
            {" Exersezi tipurile de sarcini și înveți strategii de abordare pentru fiecare probă."}
          </li>
          <li>
            <strong>
              {"Înveți să îți organizezi timpul."}
            </strong>
            {" Descoperi cum să lucrezi într-un ritm potrivit și să îți rezervi timp pentru verificarea răspunsurilor."}
          </li>
          <li>
            <strong>
              {"Îți antrenezi atenția și rezistența la efort."}
            </strong>
            {" Prin exercițiu progresiv și simulări, te obișnuiești să rămâi concentrat pe parcursul probelor."}
          </li>
          <li>
            <strong>
              {"Capeți mai multă siguranță."}
            </strong>
            {" Exersezi într-un mediu în care poți pune întrebări, poți greși și poți învăța din feedback."}
          </li>
        </ul>
        <h2>
          {"Suntem alături de tine la fiecare pas."}
        </h2>
        <p>
          {"Înainte de înscrierea la examen:"}
        </p>
        <ul>
          <li>
            {"organizăm "}
            <strong>
              {"o simulare de examen la sediul nostru în luna februarie"}
            </strong>
            {", pentru a te familiariza cu experiența evaluării;"}
          </li>
          <li>
            {"îți oferim "}
            <strong>
              {"un raport de evaluare"}
            </strong>
            {", care evidențiază nivelul de pregătire pentru fiecare probă și aspectele de consolidat;"}
          </li>
          <li>
            {"te sprijinim în "}
            <strong>
              {"procesul de înscriere la examen"}
            </strong>
            {"."}
          </li>
        </ul>
        <h2>
          {"Pregătire serioasă, lecții antrenante"}
        </h2>
        <p>
          {"Un obiectiv important se construiește prin implicare, dar și prin bucuria de a învăța. De aceea, folosim o "}
          <strong>
            {"abordare integrată și interactivă"}
          </strong>
          {", în care conversația, gramatica și vocabularul se îmbină cu jocuri/concursuri, activități interactive la tabla smart, prezentări de proiect și lucru în perechi, secvențe video și activități practice."}
        </p>
        <p>
          {"Alternăm exercițiile specifice examenului cu situații de comunicare care te încurajează să îți exprimi ideile și să folosești ceea ce ai învățat. Limba engleză este limba de comunicare la curs, iar atmosfera prietenoasă îți oferă spațiul de care ai nevoie pentru a participa și a progresa."}
        </p>
        <p>
          <strong>
            {"Te pregătești pentru un examen și, în același timp, înveți să folosești engleza cu mai multă autonomie și încredere."}
          </strong>
        </p>
        <h2>
          {"Momente de la cursurile „Head for KET/PET”"}
        </h2>
        <div className={"photo-gallery"} style={{"display": "grid", "gridTemplateColumns": "repeat(3,minmax(0,1fr))", "gap": "12px"}}>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36739503115_d6b623ba4b_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36739503115_d6b623ba4b_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36739502265_0d3c144ebe_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36739502265_0d3c144ebe_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36739502575_c5958ab62e_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36739502575_c5958ab62e_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36739502775_360cfd605a_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36739502775_360cfd605a_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/35929955663_dee2dc0350_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/35929955663_dee2dc0350_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/35905085534_471a92432e_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/35905085534_471a92432e_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
          <a href={"https://www.proerudio.ro/wp-content/uploads/2021/10/36739502175_7225108617_c.jpg"} aria-label={"Mărește imaginea"}>
            <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/36739502175_7225108617_c.jpg"} alt={"Imagine de la cursurile Pro Erudio"} loading={"lazy"} />
          </a>
        </div>
        <h4>
          {"Detalii organizatorice:"}
        </h4>
        <p></p>
        <div className={"course-details-panel"}>
          <div className={"course-details-header"}>
            <div className={"course-details-photo"} style={{"backgroundImage": "url(\"" + image1 + "\")"}}>
              <img src={image1 + ""} alt={""} />
            </div>
            <h2>
              {"“HEAD FOR KET/PET”"}
            </h2>
            <div className={"course-price"}>
              <sup>
                {"Lei"}
              </sup>
              <span>
                {"120"}
              </span>
              <sup>
                {"Curs de 2 ore"}
              </sup>
            </div>
            <hr />
            <p>
              <big>
                {"CURS DE LIMBA ENGLEZA"}
              </big>
            </p>
          </div>
          <div className={"course-details-facts"}>
            <p></p>
            <ul>
              <li className={"course-fact"}>
                <span className={"course-fact-icon"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <circle cx={"12"} cy={"12"} r={"9"}></circle>
                    <path d={"M12 7v5l3 2"}></path>
                  </svg>
                </span>
                <strong>
                  {"Durata unui curs: "}
                </strong>
                {" 120 minute"}
              </li>
            </ul>
            <ul>
              <li className={"course-fact"}>
                <span className={"course-fact-icon"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <rect x={"3"} y={"5"} width={"18"} height={"16"} rx={"3"}></rect>
                    <path d={"M7 3v4m10-4v4M3 11h18"}></path>
                  </svg>
                </span>
                <strong>
                  {"Frecventa: "}
                </strong>
                {"un curs / săptamână"}
              </li>
            </ul>
            <ul>
              <li className={"course-fact"}>
                <span className={"course-fact-icon"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <circle cx={"9"} cy={"8"} r={"3"}></circle>
                    <path d={"M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-2-4"}></path>
                  </svg>
                </span>
                <strong>
                  {"Număr participanți: "}
                </strong>
                {"maxim 10 în grupă"}
              </li>
              <li className={"course-fact"}>
                <span className={"course-fact-icon"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <circle cx={"9"} cy={"8"} r={"3"}></circle>
                    <path d={"M3 21v-3a6 6 0 0 1 12 0v3m1-16a3 3 0 0 1 0 6m3 10v-3a6 6 0 0 0-2-4"}></path>
                  </svg>
                </span>
                <strong>
                  {"Vârstă:"}
                </strong>
                <br />
                {"12–18 ani"}
              </li>
            </ul>
            <p></p>
          </div>
          <div className={"course-details-footer"}>
            <a href={"/inscriere-cursuri-pro-erudio/"} className={"course-enroll-button"}>
              {"Înscrie-te la acest curs"}
            </a>
          </div>
        </div>
        <p></p>
        <h3>
          <strong>
            {"Important!"}
          </strong>
        </h3>
        <p>
          {"Taxa cursurilor se poate achita în cont sau la casierie sediu Coșbuc:"}
        </p>
        <ul>
          <li>
            {"Integral până pe 28 septembrie (10% reducere), "}
            <strong>
              {"3780 lei"}
            </strong>
          </li>
          <li>
            {"în 5 tranșe egale (septembrie, noiembrie, ianuarie, martie si mai) (5% reducere), "}
            {"798 lei/trașă plată."}
          </li>
          <li>
            {"Lunar până pe data de 5 a fiecarei luni prin înmulțirea numărului maxim de cursuri din lună"}
            {"cu prețul pe curs."}
          </li>
        </ul>
      </div>
      <section className={"not-prose mt-14 border-t pt-10"}>
        <div className={"mb-6"}>
          <p className={"mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"}>
            {"Continuă pregătirea"}
          </p>
          <h2 className={"!m-0 !border-0 !p-0 !text-xl font-bold !text-foreground md:!text-2xl"}>
            {"Alte cursuri pentru copii de 12–19 ani"}
          </h2>
        </div>
        <div id={":r0:"} className={"related-content-grid"}>
          <a className={"related-content-card"} href={"/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-fce-cae-cpe/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"" + image2 + "\")"}}>
              <h3>
                {"Head for FCE/CAE/CPE — engleză pentru noi perspective"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"12–19 ani"}
              </span>
              <p>
                {"Cursuri pentru adolescenți (14–19 ani), disponibile la sediu și online"}
              </p>
              <span className={"related-content-action"}>
                {"Vezi cursul"}
                <span aria-hidden={"true"}>
                  {"→"}
                </span>
              </span>
            </div>
          </a>
          <a className={"related-content-card"} href={"/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-ielts/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"" + image3 + "\")"}}>
              <h3>
                {"Head for IELTS — pregătire pentru următorul pas"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"12–19 ani"}
              </span>
              <p>
                {"Cursuri pentru tineri de 17 ani și peste, disponibile la sediu și online"}
              </p>
              <span className={"related-content-action"}>
                {"Vezi cursul"}
                <span aria-hidden={"true"}>
                  {"→"}
                </span>
              </span>
            </div>
          </a>
          <a className={"related-content-card"} href={"/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-pentru-tineri-head-for-toefl/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"" + image4 + "\")"}}>
              <h3>
                {"Head for TOEFL — engleză pentru parcursul tău academic"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"12–19 ani"}
              </span>
              <p>
                {"Cursuri pentru tineri de 17 ani și peste, disponibile la sediu și online"}
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
      </section>
    </article>
  </ContentPageLayout>;
}
