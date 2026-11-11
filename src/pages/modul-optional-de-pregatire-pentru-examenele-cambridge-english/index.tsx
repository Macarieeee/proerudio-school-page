import heroImage from '@/assets/modul-optional-de-pregatire-pentru-examenele-cambridge-english.jpg';
import ContentPageLayout from '@/components/ContentPageLayout';

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
            {"Modul opțional de pregătire pentru examenele Cambridge English"}
          </h1>
          <p className={"max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl"}>
            {"Consolidare și simulări înaintea examenelor Cambridge English."}
          </p>
        </div>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Modul opțional de pregătire pentru examenele Cambridge English"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2019/02/Modul-de-pregatire-pentru-examenele-Cambridge-English.jpg"} alt={"Modul opțional de pregătire pentru examenele Cambridge English"} decoding={"async"} />
        <h1>
          {"Modul opțional de pregătire pentru examenele Cambridge English"}
        </h1>
        <p>
          {"Consolidare și simulări înaintea examenelor Cambridge English."}
        </p>
      </section>
      <div>
        <h3>
          <span>
            {"Modulele de pregătire pentru examene sunt special dedicate copiilor care vor susține examenele Cambridge English la sfârșitul anului scolar. "}
          </span>
        </h3>
        <h3>
          {"Ce vom face la cursuri?"}
        </h3>
        <ul>
          <li>
            <span>
              {"ne vom familiariza cu structura examenului;"}
            </span>
          </li>
          <li>
            <span>
              {"vom lucra teste, cu accent pe strategii de abordare pentru fiecare parte, la fiecare probă;"}
            </span>
          </li>
          <li>
            <span>
              {"vom exersa părțile probei de interacțiune verbală, incluzând trucuri care să ne scoată din încurcătură în timpul examenului;"}
            </span>
          </li>
          <li>
            <span>
              {"vom învăța să ne organizăm timpul pentru a acoperi toate exercițiile;"}
            </span>
          </li>
          <li>
            <span>
              {"vom învăța cum să ne autoevaluăm munca pentru a putea stabili în mod independent unde trebuie să mai lucrăm;"}
            </span>
          </li>
        </ul>
        <h3>
          <span>
            {"De ce am hotărât să organizăm module de pregătire în loc să lucrăm teste la curs?"}
          </span>
        </h3>
        <ol>
          <li>
            <span>
              {"Obiectivul principal al cursului este să ne asigurăm că toți copiii învață limba engleză, exersând toate abilitățile: scris, citit, vorbit, ascultat. Obiectivul unui examen este să măsoare aceste abilități, urmând o structură standard. Obiective diferite, cursuri diferite."}
            </span>
          </li>
          <li>
            <span>
              {"Așa cum nu putem măsura fără să fi predat conținuturi noi, tot așa nu ne putem prezenta la examen fără să fi descifrat probă cu probă ce se așteaptă de la noi."}
            </span>
          </li>
          <li>
            <span>
              {"Programa cursului este oricum stufoasă, deci este aproape imposibil să predăm noțiuni noi, să le consolidăm prin exerciții (scris citit etc) și să lucrăm și structura examenului în timpul scurt pe care îl petrecem împreună."}
            </span>
          </li>
          <li>
            <span>
              {"Nu toți copiii doresc să participe la examen, deci ar fi nedrept să îi forțăm pe toți să lucreze teste."}
            </span>
          </li>
        </ol>
        <h1>
          <span>
            {"Cursurile se vor desfășura sâmbăta în următoarele perioade:"}
          </span>
        </h1>
        <h4>
          {"Modul 1"}
        </h4>
        <ul>
          <li>
            {"14, 21, 28 martie și 18 aprilie"}
          </li>
        </ul>
        <h4>
          {"Modul 2"}
        </h4>
        <ul>
          <li>
            {"25 aprilie, 9, 16, 23 mai"}
          </li>
        </ul>
        <p>
          <span>
            {"Înscrierile"}
            {"pentru modulele de pregătire în vederea susținerii examenelor Cambridge English se fac direct"}
            <span>
              <strong>
                {"la secretariat"}
              </strong>
            </span>
            {"(Adelina) sau "}
            <span>
              <strong>
                {"prin sms"}
              </strong>
            </span>
            {"(0771 753 323)."}
          </span>
        </p>
        <p>
          <span>
            <strong>
              {"Termen limită pentru înscrieri: 11 martie"}
            </strong>
          </span>
        </p>
        <p>
          <span>
            {"Ne rezervăm dreptul de a anula cursul dacă nu se înscriu suficienți copii pentru o anumita serie sau de a forma mai multe serii dacă se înscriu mai mult de 10 copii pentru un anumit nivel."}
          </span>
        </p>
        <h4>
          <span>
            {"Orarul cursurilor și profesorii care le vor susține se vor stabili în urma finalizarii înscrierilor. Înscrierile pentru oricare dintre cele două variante se fac imediat după primirea Raportului de evaluare în urma susținerii simulării."}
          </span>
        </h4>
        <p></p>
        <p>
          {"Plata modulului se face imediat după confirmarea grupelor și a orarului. Suportul de curs nu este inclus în preț. Prețul setului de teste variază între"}
          <strong>
            {"50 și 100 de lei"}
          </strong>
          {", în funcție de nivelul examenului."}
        </p>
        <p>
          <strong>
            {"Preț* modul YLE:"}
            {"280"}
            {"lei/4 cursuri,"}
          </strong>
          {"fiecare curs cu durata de 90 de minute"}
          <br />
          <strong>
            {"Preț* modul Key/Preliminary/:"}
            {"400"}
            {"lei/ 4 cursuri,"}
          </strong>
          {"fiecare curs cu durata de 2 ore"}
          <br />
          <strong>
            {"Preț* modul First:"}
            {"480"}
            {"lei/4 cursuri,"}
          </strong>
          {"fiecare curs cu durata de 2 ore si 15 min"}
          <br />
          <strong>
            {"Pret* modul Advanced/Proficiency/IELTS:"}
            {"500"}
            {"lei/ 4 cursuri,"}
          </strong>
          {"fiecare cu durata de 2 ore si 15 min"}
        </p>
        <p>
          {"*Prețurile de mai sus sunt valabile doar pentru cursanții Pro Erudio."}
        </p>
        <p>
          {"\nÎn limita locurilor disponibile, pot participa la module și copii care nu participă la cursurile noastre de limbă engleză. Prețul unui modul pentru copiii din exterior sunt cu 50 lei mai mare decât cel standard, pentru cursanții noștri, adică"}
          {"330 lei"}
          {"(YLE),"}
          {"450 lei"}
          {"(Key/Preliminary),"}
          {"530 lei"}
          {"(First) și"}
          {"550"}
          {"lei (CAE/CPE/IELTS)."}
        </p>
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
          <a className={"related-content-card"} href={"/cursuri-de-weekend-in-limba-engleza/cursuri-interactive-de-conversatie-cu-profesori-internationali/"}>
            <div className={"related-content-media"} style={{"backgroundImage": "url(\"https://www.proerudio.ro/wp-content/uploads/2024/11/cursuri-de-conversatie.jpg\")"}}>
              <h3>
                {"Cursuri interactive cu profesori internaționali"}
              </h3>
            </div>
            <div className={"related-content-body"}>
              <span className={"related-content-badge"}>
                {"Cursuri Pro Erudio"}
              </span>
              <p>
                {"Conversație autentică, fluență și încredere alături de traineri internaționali."}
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
