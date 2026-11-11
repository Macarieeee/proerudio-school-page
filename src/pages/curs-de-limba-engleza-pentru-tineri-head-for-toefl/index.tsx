import heroImage from '@/assets/curs-de-limba-engleza-pentru-tineri-head-for-toefl.jpg';
import ContentPageLayout from '@/components/ContentPageLayout';
import image1 from "@/assets/about-classroom.jpg";
import image2 from "@/assets/curriculum-students.jpg";
import image3 from "@/assets/facility-auditorium.jpg";
import image4 from "@/assets/facility-library.jpg";

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
            {"Head for TOEFL — engleză pentru parcursul tău academic"}
          </h1>
          <p className={"max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl"}>
            {"Cursuri pentru tineri de 17 ani și peste, disponibile la sediu și online"}
          </p>
        </div>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Head for TOEFL — engleză pentru parcursul tău academic"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/Curs-de-limba-engleza-TOEFL-iBT.jpg"} alt={"Head for TOEFL — engleză pentru parcursul tău academic"} decoding={"async"} />
        <h1>
          {"Head for TOEFL — engleză pentru parcursul tău academic"}
        </h1>
        <p>
          {"Cursuri pentru tineri de 17 ani și peste, disponibile la sediu și online"}
        </p>
      </section>
      <div>
        <p>
          {"Îți dorești să studiezi în străinătate și ai nevoie de o certificare a competențelor tale de limba engleză? Cursul "}
          <strong>
            {"„Head for TOEFL”"}
          </strong>
          {" te ajută să îți consolidezi cunoștințele și să te pregătești pentru cerințele testului, pornind de la nivelul tău și de la scorul solicitat de instituția aleasă."}
        </p>
        <h2>
          {"Ce este TOEFL iBT®?"}
        </h2>
        <p>
          <strong>
            {"TOEFL iBT® — Test of English as a Foreign Language"}
          </strong>
          {" este un test de limba engleză dezvoltat de "}
          <strong>
            {"ETS — Educational Testing Service"}
          </strong>
          {", care evaluează capacitatea de a înțelege și de a folosi engleza în contexte academice și în situații de comunicare asociate vieții universitare."}
        </p>
        <p>
          {"Testul urmărește patru competențe: "}
          <strong>
            {"citire, ascultare, scriere și vorbire"}
          </strong>
          {". Poate fi susținut pe computer într-un centru autorizat sau, prin varianta "}
          <strong>
            {"Home Edition"}
          </strong>
          {", de acasă, cu supraveghere online și cu respectarea cerințelor tehnice și de examinare."}
        </p>
        <h2>
          {"Cum este structurat testul?"}
        </h2>
        <p>
          {"Începând cu "}
          <strong>
            {"21 ianuarie 2026"}
          </strong>
          {", TOEFL iBT are un format actualizat, cu următoarele tipuri de sarcini:"}
        </p>
        <table>
          <thead>
            <tr>
              <th scope={"col"}>
                {"Probă"}
              </th>
              <th scope={"col"}>
                {"Activități principale"}
              </th>
              <th scope={"col"}>
                {"Durată de bază aproximativă"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope={"row"}>
                {"Reading"}
              </th>
              <td>
                {"Completarea cuvintelor și înțelegerea textelor cotidiene și academice"}
              </td>
              <td>
                {"30 de minute"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"Listening"}
              </th>
              <td>
                {"Înțelegerea răspunsurilor, conversațiilor, anunțurilor și prezentărilor academice"}
              </td>
              <td>
                {"29 de minute"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"Writing"}
              </th>
              <td>
                {"Construirea propozițiilor, redactarea unui e-mail și participarea în scris la o discuție academică"}
              </td>
              <td>
                {"23 de minute"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"Speaking"}
              </th>
              <td>
                {"Ascultare și repetare, răspunsuri în cadrul unui interviu simulat"}
              </td>
              <td>
                {"8 minute"}
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          {"ETS recomandă să rezervi "}
          <strong>
            {"aproximativ două ore pentru completarea testului"}
          </strong>
          {", inclusiv pentru instrucțiuni. Durata și numărul de întrebări pot varia, deoarece secțiunile Reading și Listening sunt adaptive."}
        </p>
        <h2>
          {"Cum se interpretează rezultatele?"}
        </h2>
        <p>
          {"Pentru testele susținute începând cu 21 ianuarie 2026, rezultatele sunt raportate pe o "}
          <strong>
            {"scală de la 1 la 6"}
          </strong>
          {", în trepte de jumătate de punct. Primești un scor pentru fiecare secțiune și un scor general, calculat ca media celor patru rezultate, rotunjită conform regulilor ETS."}
        </p>
        <p>
          {"În perioada de tranziție de doi ani, raportul include și "}
          <strong>
            {"un scor general comparabil pe scala anterioară, de la 0 la 120"}
          </strong>
          {"."}
        </p>
        <table>
          <thead>
            <tr>
              <th scope={"col"}>
                {"Nivel CEFR"}
              </th>
              <th scope={"col"}>
                {"Scor TOEFL pe scala 1–6"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope={"row"}>
                {"A1"}
              </th>
              <td>
                {"1–1,5"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"A2"}
              </th>
              <td>
                {"2–2,5"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"B1"}
              </th>
              <td>
                {"3–3,5"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"B2"}
              </th>
              <td>
                {"4–4,5"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"C1"}
              </th>
              <td>
                {"5–5,5"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"C2"}
              </th>
              <td>
                {"6"}
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>
            {"Nu există un punctaj unic de admitere pentru toate universitățile."}
          </strong>
          {" Fiecare instituție își stabilește cerințele și poate solicita scoruri minime atât la nivel general, cât și pentru anumite secțiuni."}
        </p>
        <p>
          {"Rezultatele TOEFL iBT sunt "}
          <strong>
            {"valabile doi ani de la data testului"}
          </strong>
          {"."}
        </p>
        <h2>
          {"Cui se adresează?"}
        </h2>
        <p>
          {"TOEFL iBT poate fi o opțiune pentru cei care au nevoie de dovada competențelor de limba engleză pentru admitere la studii universitare sau postuniversitare, burse ori alte programe care acceptă acest test."}
        </p>
        <p>
          {"Înainte de înscriere, este important să verifici "}
          <strong>
            {"varianta de test acceptată, scorurile solicitate și termenul de transmitere a rezultatelor"}
          </strong>
          {". Dacă urmărești echivalarea unei probe din sistemul de învățământ românesc, trebuie consultate condițiile oficiale aplicabile."}
        </p>
        <h2>
          {"Cum te ajutăm să te pregătești?"}
        </h2>
        <ul>
          <li>
            <strong>
              {"Clarificăm obiectivul."}
            </strong>
            {" Discutăm cerințele instituției vizate și diferențele dintre TOEFL și IELTS, dacă ambele sunt acceptate."}
          </li>
          <li>
            <strong>
              {"Îți consolidăm nivelul de engleză."}
            </strong>
            {" Dezvoltăm vocabularul, corectitudinea gramaticală și toate cele patru competențe evaluate."}
          </li>
          <li>
            <strong>
              {"Exersăm formatul actual al testului."}
            </strong>
            {" Lucrăm pe tipurile de sarcini și pe strategii potrivite fiecărei secțiuni."}
          </li>
          <li>
            <strong>
              {"Antrenăm gestionarea timpului și concentrarea."}
            </strong>
            {" Înveți să lucrezi organizat și să îți dozezi efortul."}
          </li>
          <li>
            <strong>
              {"Dezvoltăm exprimarea orală și scrisă."}
            </strong>
            {" Exersezi răspunsuri clare, coerente și relevante pentru cerință."}
          </li>
          <li>
            <strong>
              {"Susținem studiul individual."}
            </strong>
            {" Îți recomandăm resurse online și materiale potrivite aspectelor pe care ai nevoie să le consolidezi."}
          </li>
        </ul>
        <p>
          {"Alternăm exercițiile specifice testului cu activități interactive, pentru ca pregătirea să fie antrenantă și să dezvolte abilități utile și dincolo de examen."}
        </p>
        <h2>
          {"Suntem alături de tine la fiecare etapă"}
        </h2>
        <ul>
          <li>
            {"Organizăm "}
            <strong>
              {"o simulare la sediul nostru"}
            </strong>
            {", înainte de înscrierea la test."}
          </li>
          <li>
            {"Oferim "}
            <strong>
              {"rapoarte periodice de evaluare"}
            </strong>
            {", care evidențiază progresul și aspectele de consolidat."}
          </li>
          <li>
            {"Te sprijinim în "}
            <strong>
              {"procesul de înscriere"}
            </strong>
            {"."}
          </li>
        </ul>
        <h2>
          {"TOEFL sau IELTS?"}
        </h2>
        <p>
          {"Alegerea pornește de la cerințele instituției la care dorești să aplici, apoi de la particularitățile fiecărui test și de la modul tău de lucru."}
        </p>
        <p>
          {"Pentru TOEFL iBT, este util să te simți confortabil să citești și să redactezi pe computer și să îți înregistrezi răspunsurile orale la microfon. Familiarizarea cu aceste activități face parte din pregătire."}
        </p>
        <p>
          <strong>
            {"Datele disponibile, centrele și taxa de examinare se verifică pe "}
            <a href={"https://www.ets.org/toefl.html"} target={"_blank"} rel={"noopener noreferrer"}>
              {"site-ul oficial ETS"}
            </a>
            {", la momentul înscrierii."}
          </strong>
        </p>
        <p>
          <strong>
            {"Pornim de la obiectivul tău și construim împreună un parcurs de pregătire către scorul de care ai nevoie."}
          </strong>
        </p>
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
              {"“TOEFL iBT®”"}
            </h2>
            <div className={"course-price"}>
              <sup>
                {"Lei"}
              </sup>
              <span>
                {"130"}
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
                  {"Frecvența: "}
                </strong>
                {"un curs / săptămână"}
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
                {"maxim 10"}
                {"în grupă"}
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
                {"17 ani și peste"}
              </li>
            </ul>
            <p></p>
          </div>
          <div className={"course-details-footer"}>
            <a href={"/inscriere-cursuri-pro-erudio/"} className={"course-enroll-button"}>
              {"Inscrie-te la acest curs"}
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
              {"4095 lei"}
            </strong>
          </li>
          <li>
            {"în 5 tranșe egale (septembrie, noiembrie, ianuarie, martie si mai) (5% reducere), "}
            {"864 lei/trașă plată."}
          </li>
          <li>
            {"Lunar până pe data de 5 a fiecarei luni prin înmulțirea numărului maxim de cursuri din lună"}
            {"cu prețul pe curs."}
          </li>
        </ul>
        <div data-href={"https://www.facebook.com/proerudio"} data-layout={"standard"} data-action={"like"} data-show-faces={"true"} data-share={"false"}></div>
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
          <a className={"related-content-card"} href={"/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-ketpet/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"" + image2 + "\")"}}>
              <h3>
                {"Head for Key/Preliminary — pregătire pentru examenele Cambridge English"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"12–19 ani"}
              </span>
              <p>
                {"Cursuri pentru copii și adolescenți de 12–18 ani, disponibile la sediu și online"}
              </p>
              <span className={"related-content-action"}>
                {"Vezi cursul"}
                <span aria-hidden={"true"}>
                  {"→"}
                </span>
              </span>
            </div>
          </a>
          <a className={"related-content-card"} href={"/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-fce-cae-cpe/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"" + image3 + "\")"}}>
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
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"" + image4 + "\")"}}>
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
        </div>
      </section>
    </article>
  </ContentPageLayout>;
}
