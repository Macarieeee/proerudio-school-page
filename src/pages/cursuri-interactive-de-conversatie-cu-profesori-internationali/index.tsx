import heroImage from '@/assets/cursuri-interactive-de-conversatie-cu-profesori-internationali.jpg';
import ContentPageLayout from '@/components/ContentPageLayout';
import image1 from "@/assets/cursuri-de-conversatie.jpg";
import image2 from "@/assets/about-classroom.jpg";

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
            {"Pregătire examene Cambridge"}
          </p>
          <h1 className={"mb-6 text-4xl font-bold leading-tight md:text-6xl"}>
            {"Cursuri interactive cu profesori internaționali"}
          </h1>
          <p className={"max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl"}>
            {"Conversație autentică, fluență și încredere alături de traineri internaționali."}
          </p>
        </div>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Cursuri interactive cu profesori internaționali"}>
        <img src={image1 + ""} alt={"Cursuri interactive cu profesori internaționali"} decoding={"async"} />
        <h1>
          {"Cursuri interactive cu profesori internaționali"}
        </h1>
        <p>
          {"Conversație autentică, fluență și încredere alături de traineri internaționali."}
        </p>
      </section>
      <div>
        <h4>
          <span>
            {"Pentru copii cu nivel minim elementar de limba engleză."}
          </span>
        </h4>
        <p>
          {"Optica părinţilor şi cea a profesorilor cu privire la modul în care ar trebui învăţată o limbă străină în zilele noastre diferă extrem de mult: de la părerea că tot ce ai nevoie este să petreci timp într-o ţară în care limba maternă este limba ţintă a cursantului, până la părerea că aşa cum noi am învăţat totul din cărţi, copiii noştri trebuie să procedeze la fel, ajutaţi fiind de toate resursele tehnologiei moderne de care noi, evident, nu ne-am bucurat în anii şcolii."}
        </p>
        <h3>
          <span>
            {"Vezi mai jos detaliile acestui curs"}
          </span>
        </h3>
        <p>
          {"La Pro Erudio încercăm să îmbinăm cele două modalităţi de învăţare a limbii engleze pentru o învăţare eficientă, recunoscând meritele ambelor metode. Cursurile obişnuite de limba engleză sunt ţinute de profesori calificaţi, profesori români de limba engleză, pentru a aduce învăţarea cât mai aproape de nevoile cursantului. Încercăm să sintetizăm aici câteva dintre beneficiile învăţării limbii engleze sub îndrumarea unui profesor român de limba engleză:"}
        </p>
        <ul>
          <li>
            {"posibilitatea traducerii în momentul în care toate celelalte metode de a explica/demonstra/reprezenta au eşuat;"}
          </li>
          <li>
            {"cunoaşterea dificultăţilor specifice pe care le întâmpina copiii români în învăţarea limbii engleze, deci oferirea de explicaţii punctuale pentru a le elimina cu uşurinţă ( de exemplu în limba română spunem “confortabil”, în timp ce în limba engleză cuvântul corect este “comfortable”, cu “m”, nu “n” – diferenţa pe care doar un cunoscător al ambelor limbi o poate puncta);"}
          </li>
          <li>
            {"posibilitatea de comparare a felului în care ne exprimăm corect în limba engleză, spre deosebire de limba română pentru a evita, de exemplu, o topica greşită ( spunem “a red shoe”, nu “a shoe red”, aşa cum am spune sub influenţă limbii materne)"}
          </li>
          <li>
            {"înţelegerea prin asocierea cu limba română a mesajului pe care copilul doreşte să îl transmită chiar şi atunci când este foarte diferit de felul în care ar trebui exprimat în engleză şi oferirea de ghidaj corespunzător (de exemplu expresiile idiomatice de genul “beat the fields”"}
            {" - “a bate câmpii” traducere cuvânt cu cuvânt din limba română - sunt greu de înţeles de o persoană nevorbitoare de limba română că fiind “beat around/about the bush” din limba engleză)"}
          </li>
          <li>
            {"cunoaşterea gramaticii române şi predarea prin comparaţie (chiar şi în limba română acolo unde este cazul) este foarte eficientă deoarece reduce ani de corectură şi consolidare prin exerciţii repetitive la o explicaţie de câteva minute, explicaţie urmată desigur de efortul de a urmă regulă pentru a formă automatisme (de exemplu explicaţia că în limba engleză, spre deosebire de limba română, cuvântul “money” se foloseşte doar la singular);"}
          </li>
        </ul>
        <p>
          <strong>
            {"Toate avantajele mai sus enumerate nu înseamnă că interacţiunea cu cu trainer internaționali nu este deosebit de importantă. Iată şi câteva motive:"}
          </strong>
        </p>
        <ul>
          <li>
            {"necesitatea autentică de a folosi exclusiv limba engleză ca mijloc de comunicare (cu un profesor român copilul știe că are alternativă);"}
          </li>
          <li>
            {"o metodă diferită de învățare, mai relaxată, flexibilă, bazată pe comunicare și legarea de prietenii;"}
          </li>
          <li>
            {"alte tipuri de activităţi în timpul cursului (fără gramatică şi exerciţii scrise, doar jocuri interactive pentru copiii mai mici şi conversaţie autentică pentru cei mai mari);"}
          </li>
          <li>
            {"subiecte de discuție orientate pe nevoile copilului, adesea chiar la sugestia lor;"}
          </li>
          <li>
            {"creșterea motivației pentru învățarea limbii engleze întrucât copilul înțelege că învățarea se face cu un scop precis, acela de a folosi cunoștințele acumulate la curs în situații din viața reală (de exemplu călătorii sau discutii online cu partenerii de joacă de alte naționalități);"}
          </li>
          <li>
            {"creșterea stimei de sine și a încrederii că se poate face înțeles de copii de alte naționalități dacă amândoi știu limba engleză;"}
          </li>
          <li>
            {"și nu în ultimul rând, faptul că aceste ateliere sunt programate în timpul weekend-ului, când se poate bucura de interacțiunea de la curs fără presiunea temelor de la școală."}
          </li>
        </ul>
        <h3>
          {"Cursuri de conversație "}
          <span>
            {"cu trainer internațional "}
          </span>
          {"în weekend"}
        </h3>
        <h4>
          <span>
            {"Ești gata să pornești într-o aventură lingvistică ca nimeni altul? "}
          </span>
        </h4>
        <p>
          <span>
            {"Alătură-te cursului nostru interactiv ("}
            <strong>
              {"pentru copii de 7-12 ani"}
            </strong>
            {") sau de conversație ("}
            <strong>
              {"12-16 ani"}
            </strong>
            {") predat de un profesor internațional și deblochează o lume de posibilități. "}
          </span>
        </p>
        <p>
          <span>
            {"Cu fiecare cuvânt și expresie pe care o înveți, nu numai că vei stăpâni o nouă limbă, dar vei descoperi și bogata tapiserie a culturii, obiceiurilor și tradițiilor care fac parte dintr-o alta cultură. "}
          </span>
        </p>
        <p>
          <span>
            {"Cufundă-te într-o călătorie de comunicare, în care vei discuta despre o mulțime de subiecte interacționând cu colegii tăi, jucând jocuri conversaționale în care vei dobândi fluență în exprimare, coerență în organizarea discursului, rapiditate în procesarea întrebării și pregătirea răspunsului, spontaneitate și creativitate în argumentare!"}
          </span>
        </p>
        <p>
          <strong>
            {"Dintre subiectele abordate (grupa de vârstă 7-12, nivel minim elementar) amintim:"}
          </strong>
        </p>
        <ul>
          <li>
            {"My Family"}
          </li>
          <li>
            {"My House"}
          </li>
          <li>
            {"Pets"}
          </li>
          <li>
            {"Seasons"}
          </li>
        </ul>
        <ul>
          <li>
            {"My favourite food"}
          </li>
          <li>
            {"Toys and sports"}
          </li>
          <li>
            {"Cartoons"}
          </li>
          <li>
            {"Feelings"}
          </li>
        </ul>
        <p>
          {"Temele vor fi abordate prin joc și cu mult material didactic de sprijin."}
        </p>
        <p>
          <strong>
            {"Dintre subiectele abordate (grupa de vârstă 12+, nivel minim B1) amintim:"}
          </strong>
        </p>
        <ul>
          <li>
            {"Mâncare exotică? Cât de aventuros ești?"}
          </li>
          <li>
            {"A spune „NU” este uneori o acțiune benefică?"}
          </li>
          <li>
            {"Economisiți sau cheltuiți bani?"}
          </li>
        </ul>
        <ul>
          <li>
            {"Cât de importante sunt promisiunile?"}
          </li>
          <li>
            {"Crezi în superstiții?"}
          </li>
          <li>
            {"Comportamente neadecvate și tipuri de pedepse"}
          </li>
        </ul>
        <p>
          {"Dacă temele de conversație pe care le propunem nu te inspiră, nicio problemă! Propune altele și ne vom conforma!"}
        </p>
        <h4>
          {"Înscrie-te astăzi și lasă magia limbii să ne unească pe toți!"}
        </h4>
        <div className={"course-details-panel"}>
          <div className={"course-details-header"}>
            <div className={"course-details-photo"} style={{"backgroundImage": "url(\"" + image2 + "\")"}}>
              <img src={image2 + ""} alt={""} />
            </div>
            <h2>
              {"ATELIERE CU TRAINER INTERNAȚIONAL"}
            </h2>
            <div className={"course-price"}>
              <sup>
                {"Lei"}
              </sup>
              <span>
                {"200"}
              </span>
              <sup>
                {"Modul"}
              </sup>
            </div>
            <hr />
            <p>
              <big>
                {"Ateliere interactive / de conversație cu profesor internațional"}
              </big>
            </p>
          </div>
          <div className={"course-details-facts"}>
            <ul>
              <li className={"course-fact"}>
                <span className={"course-fact-icon"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <rect x={"3"} y={"5"} width={"18"} height={"16"} rx={"3"}></rect>
                    <path d={"M7 3v4m10-4v4M3 11h18"}></path>
                  </svg>
                </span>
                <strong>
                  {"Durată modul: "}
                </strong>
                {"4 ședințe de curs"}
              </li>
            </ul>
            <ul>
              <li className={"course-fact"}>
                <span className={"course-fact-icon"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>
                    <circle cx={"12"} cy={"12"} r={"9"}></circle>
                    <path d={"M12 7v5l3 2"}></path>
                  </svg>
                </span>
                <strong>
                  {"Durată curs: "}
                </strong>
                {"55 minute"}
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
                  {"Frecvența:"}
                </strong>
                {" un curs / săptămână"}
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
                  {"Vârsta recomandată: 7+"}
                </strong>
              </li>
            </ul>
            {"\nNotă! Cursul se desfășoară vineri după-amiază sau sâmbătă dimineața. Plasarea în grupe se face în funcție de vârstă și nivel.\n\n*Prețul afișat este valabil doar pentru copiii înscriși la cursurile Pro Erudio. Pentru copiii din exterior prețul unui modul este de 250 lei.\n"}
            <ul>
              {"Atelierele vor fi susținute de colega noastră Dilan Yalcin, profesor de origine turcă, pe care o parte dintre elevii noștri au cunoscut-o în taberele English Explorers Camps."}
            </ul>
          </div>
          <div className={"course-details-footer"}>
            <a href={"/inscriere-cursuri-pro-erudio/"} className={"course-enroll-button"}>
              {"Inscrie-te la acest curs"}
            </a>
          </div>
        </div>
        <div data-href={"https://www.facebook.com/proerudio"} data-layout={"standard"} data-action={"like"} data-show-faces={"true"} data-share={"false"}></div>
        <h3>
          {"Alte cursuri pentru copii:"}
        </h3>
      </div>
      <section className={"not-prose mt-14 border-t pt-10"}>
        <div className={"mb-6"}>
          <p className={"mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"}>
            {"Continuă pregătirea"}
          </p>
          <h2 className={"!m-0 !border-0 !p-0 !text-xl font-bold !text-foreground md:!text-2xl"}>
            {"Alte cursuri de pregătire pentru examene"}
          </h2>
        </div>
        <div id={":r0:"} className={"related-content-grid"}>
          <a className={"related-content-card"} href={"/modul-optional-de-pregatire-pentru-examenele-cambridge-english/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2019/02/Modul-de-pregatire-pentru-examenele-Cambridge-English.jpg\")"}}>
              <h3>
                {"Modul opțional de pregătire pentru examenele Cambridge English"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"Cursuri Pro Erudio"}
              </span>
              <p>
                {"Consolidare și simulări înaintea examenelor Cambridge English."}
              </p>
              <span className={"related-content-action"}>
                {"Vezi cursul"}
                <span aria-hidden={"true"}>
                  {"→"}
                </span>
              </span>
            </div>
          </a>
          <a className={"related-content-card"} href={"/cambridge-mock-tests/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2026/04/ProErudio-English-Mock-Tests.png\")"}}>
              <h3>
                {"Cambridge Mock Tests"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"Cursuri Pro Erudio"}
              </span>
              <p>
                {"Simulări în condiții de examen pentru evaluarea realistă a nivelului și a progresului."}
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
