import heroImage from '@/assets/curs-de-limba-engleza-head-for-ielts.jpg';
import ContentPageLayout from '@/components/ContentPageLayout';
import image1 from "@/assets/about-classroom.jpg";
import image2 from "@/assets/curriculum-students.jpg";
import image3 from "@/assets/facility-auditorium.jpg";
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
            {"Head for IELTS — pregătire pentru următorul pas"}
          </h1>
          <p className={"max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl"}>
            {"Cursuri pentru tineri de 17 ani și peste, disponibile la sediu și online"}
          </p>
        </div>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Head for IELTS — pregătire pentru următorul pas"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2016/01/Curs-de-limba-engleza-HEAD-FOR-IELTS.jpg"} alt={"Head for IELTS — pregătire pentru următorul pas"} decoding={"async"} />
        <h1>
          {"Head for IELTS — pregătire pentru următorul pas"}
        </h1>
        <p>
          {"Cursuri pentru tineri de 17 ani și peste, disponibile la sediu și online"}
        </p>
      </section>
      <div>
        <p>
          {"Îți dorești să studiezi în străinătate sau ai nevoie de o certificare a competențelor tale de limba engleză? Cursul "}
          <strong>
            {"„Head for IELTS”"}
          </strong>
          {" te ajută să îți organizezi pregătirea în funcție de obiectivul tău și să abordezi testul cu mai multă siguranță."}
        </p>
        <p>
          {"Îmbinăm dezvoltarea cunoștințelor de engleză cu exersarea cerințelor specifice IELTS, astfel încât să înțelegi ce ai de făcut la fiecare probă și cum îți poți îmbunătăți performanța."}
        </p>
        <h2>
          {"Ce este IELTS?"}
        </h2>
        <p>
          <strong>
            {"IELTS — International English Language Testing System"}
          </strong>
          {" este un test internațional care evaluează patru competențe de limba engleză: "}
          <strong>
            {"ascultare, citire, scriere și vorbire"}
          </strong>
          {"."}
        </p>
        <p>
          {"Există două variante principale:"}
        </p>
        <ul>
          <li>
            <strong>
              {"IELTS Academic"}
            </strong>
            {" — destinat, în principal, celor care doresc să urmeze studii universitare sau postuniversitare și celor care au nevoie de certificare pentru anumite profesii."}
          </li>
          <li>
            <strong>
              {"IELTS General Training"}
            </strong>
            {" — utilizat pentru anumite proceduri de migrație, formare și studii sub nivel universitar."}
          </li>
        </ul>
        <p>
          {"Alegerea variantei trebuie făcută în funcție de cerințele instituției sau autorității căreia îi vei prezenta rezultatul."}
        </p>
        <h2>
          {"Cum este structurat testul?"}
        </h2>
        <p>
          {"IELTS cuprinde patru probe:"}
        </p>
        <ul>
          <li>
            <strong>
              {"Listening"}
            </strong>
            {" — înțelegerea mesajelor audiate;"}
          </li>
          <li>
            <strong>
              {"Reading"}
            </strong>
            {" — înțelegerea textelor scrise;"}
          </li>
          <li>
            <strong>
              {"Writing"}
            </strong>
            {" — redactarea unor texte conform cerințelor;"}
          </li>
          <li>
            <strong>
              {"Speaking"}
            </strong>
            {" — comunicare orală în cadrul unui interviu cu un examinator."}
          </li>
        </ul>
        <p>
          {"Durata totală este de aproximativ "}
          <strong>
            {"2 ore și 45 de minute"}
          </strong>
          {", iar proba de Speaking durează "}
          <strong>
            {"11–14 minute"}
          </strong>
          {". Programarea exactă a probelor este comunicată de centrul de examinare."}
        </p>
        <p>
          {"Probele de Listening și Speaking sunt comune celor două variante, în timp ce Reading și Writing au cerințe diferite."}
        </p>
        <h2>
          {"Cum se interpretează rezultatele?"}
        </h2>
        <p>
          {"IELTS folosește o "}
          <strong>
            {"scală de punctaj de la 0 la 9"}
          </strong>
          {", cu scoruri întregi sau jumătăți de bandă. Primești un rezultat pentru fiecare competență și un scor general."}
        </p>
        <p>
          {"Nu există un prag unic de promovare: fiecare universitate, organizație sau autoritate stabilește scorul necesar și poate solicita rezultate minime pentru fiecare probă."}
        </p>
        <p>
          {"Ca reper orientativ, scorurile se raportează la Cadrul European Comun de Referință pentru Limbi astfel:"}
        </p>
        <table>
          <thead>
            <tr>
              <th scope={"col"}>
                {"Nivel CEFR"}
              </th>
              <th scope={"col"}>
                {"Scor IELTS orientativ"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope={"row"}>
                {"B1"}
              </th>
              <td>
                {"4,0–5,0"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"B2"}
              </th>
              <td>
                {"5,5–6,5"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"C1"}
              </th>
              <td>
                {"7,0–8,0"}
              </td>
            </tr>
            <tr>
              <th scope={"row"}>
                {"C2"}
              </th>
              <td>
                {"8,5–9,0"}
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          {"Această corespondență este orientativă; pentru înscriere contează cerințele exacte ale instituției alese."}
        </p>
        <p>
          {"Rezultatele IELTS sunt recomandate pentru utilizare în termen de "}
          <strong>
            {"doi ani de la susținerea testului"}
          </strong>
          {". Instituțiile care le acceptă pot avea propriile reguli privind vechimea acestora."}
        </p>
        <h2>
          {"Cum te ajutăm să te pregătești?"}
        </h2>
        <ul>
          <li>
            <strong>
              {"Clarificăm obiectivul."}
            </strong>
            {" Analizăm cerințele programului sau instituției vizate și discutăm diferențele dintre IELTS și TOEFL, dacă ambele sunt acceptate."}
          </li>
          <li>
            <strong>
              {"Îți consolidăm nivelul de engleză."}
            </strong>
            {" Lucrăm la vocabular, gramatică și la toate cele patru competențe evaluate."}
          </li>
          <li>
            <strong>
              {"Exersăm formatul testului."}
            </strong>
            {" Te familiarizezi cu sarcinile și criteriile de evaluare și înveți strategii pentru fiecare probă."}
          </li>
          <li>
            <strong>
              {"Antrenăm gestionarea timpului."}
            </strong>
            {" Înveți să prioritizezi, să păstrezi un ritm potrivit și să îți verifici răspunsurile."}
          </li>
          <li>
            <strong>
              {"Dezvoltăm exprimarea clară și argumentată."}
            </strong>
            {" Exersăm organizarea ideilor, redactarea și susținerea unui punct de vedere."}
          </li>
          <li>
            <strong>
              {"Construim o pregătire organizată."}
            </strong>
            {" Prin exercițiu, feedback și simulări, te ajutăm să gestionezi mai bine presiunea evaluării."}
          </li>
          <li>
            <strong>
              {"Susținem studiul individual."}
            </strong>
            {" Îți recomandăm resurse online și materiale de pregătire potrivite obiectivelor tale."}
          </li>
        </ul>
        <h2>
          {"Suntem alături de tine la fiecare etapă"}
        </h2>
        <p>
          {"Înainte de înscrierea la test:"}
        </p>
        <ul>
          <li>
            {"organizăm "}
            <strong>
              {"o simulare la sediul nostru"}
            </strong>
            {", pentru a te familiariza cu desfășurarea probelor;"}
          </li>
          <li>
            {"redactăm "}
            <strong>
              {"rapoarte de evaluare"}
            </strong>
            {", care evidențiază punctele forte și aspectele de consolidat;"}
          </li>
          <li>
            {"te sprijinim în "}
            <strong>
              {"procesul de înscriere"}
            </strong>
            {"."}
          </li>
        </ul>
        <h2>
          {"Este IELTS potrivit pentru tine?"}
        </h2>
        <p>
          {"Alegerea pornește de la scopul pentru care ai nevoie de test și de la cerințele instituției vizate. Discutăm apoi particularitățile probelor și modul în care te poți pregăti pentru ele."}
        </p>
        <p>
          {"La IELTS Academic, de exemplu, prima sarcină de Writing presupune descrierea unor informații vizuale, precum grafice, tabele, diagrame sau procese. În cadrul cursului, înveți să selectezi informațiile relevante și să le prezinți clar și structurat."}
        </p>
        <p>
          {"IELTS este disponibil și "}
          <strong>
            {"pe computer"}
          </strong>
          {". Formatul și opțiunile de susținere trebuie verificate la centrul ales, împreună cu datele disponibile și taxa de examinare."}
        </p>
        <p>
          <strong>
            {"Pornim de la planurile tale și construim împreună un parcurs de pregătire către scorul de care ai nevoie."}
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
              {"“HEAD FOR IELTS”"}
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
