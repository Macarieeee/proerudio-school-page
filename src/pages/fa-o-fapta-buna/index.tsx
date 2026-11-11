import ContentPageLayout from '@/components/ContentPageLayout';
import image0 from "@/assets/Fa-o-Fapta-Buna-Pro-Erudio-fundal.png";
import image1 from "@/assets/Fa-o-Fapta-Buna-Pro-Erudio.png";

export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body py-16 md:py-20" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground"}>
      <img src={image0 + ""} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
            {"Pro Erudio"}
          </p>
          <h1 className={"mb-6 text-4xl font-bold leading-tight md:text-6xl"}>
            {"Fă o faptă bună"}
          </h1>
          <p className={"max-w-3xl text-lg leading-relaxed text-background/90 md:text-xl"}>
            {"Ajută-ne să oferim acces la educație copiilor motivați care au nevoie de sprijin."}
          </p>
        </div>
      </div>
    </section>
  }>
    <article className={"page-content min-w-0 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Fă o faptă bună"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2021/10/Fa-o-fapta-buna.jpg"} alt={"Fă o faptă bună"} decoding={"async"} />
        <h1>
          {"Fă o faptă bună"}
        </h1>
        <p>
          {"Ajută-ne să oferim acces la educație copiilor motivați care au nevoie de sprijin."}
        </p>
      </section>
      <div>
        <h2>
          {"O ȘANSĂ LA UN VIITOR MAI BUN"}
        </h2>
        <img src={image1 + ""} data-good-deed-image={""} alt={"Fă o faptă bună – Pro Erudio"} />
        <p>
          {"Uneori, un gest mic poate schimba un destin. ❤️"}
        </p>
        <p>
          {"Există copii care visează să învețe, să descopere lumea și să își construiască un viitor frumos, dar pentru care posibilitățile financiare ale familiei reprezintă un obstacol."}
        </p>
        <p>
          {"Noi credem că "}
          <strong>
            {"fiecare copil merită o șansă, indiferent de situația financiară în care s-a născut."}
          </strong>
          {" ❤️"}
        </p>
        <p>
          {"De aceea, la "}
          <strong>
            {"Pro Erudio"}
          </strong>
          {", oferim anual "}
          <strong>
            {"10 burse de studiu pentru cursuri GRATUITE de limba engleză"}
          </strong>
          {". Și ne dorim din tot sufletul ca aceste locuri să ajungă la copii care își doresc cu adevărat să învețe, dar ale căror familii nu își permit să le ofere asemenea oportunități."}
        </p>
        <p>
          {"🌷 "}
          <strong>
            {"Cunoști un astfel de copil?"}
          </strong>
        </p>
        <p>
          {"Poate este crescut de un singur părinte. Poate părinții lui se confruntă cu probleme de sănătate. Poate familia lui face eforturi uriașe pentru a acoperi cheltuielile de zi cu zi."}
        </p>
        <p>
          {"Dacă știi un copil silitor, dornic să învețe, pentru care un curs de engleză ar însemna enorm, "}
          <strong>
            {"ajută-ne să ajungem la el!"}
          </strong>
        </p>
        <p>
          {"📩 Scrie-ne la "}
          <a href={"mailto:office@proerudio.ro"}>
            <strong>
              {"office@proerudio.ro"}
            </strong>
          </a>
          {", oferindu-ne câteva informații despre situația familiei și datele de contact ale unui părinte, cu acordul acestuia."}
        </p>
        <p>
          {"📚 Pentru acordarea bursei, vom solicita documente care să ateste situația financiară a familiei, precum și rezultatele școlare ale copilului."}
        </p>
        <p>
          {"📅 "}
          <strong>
            {"Termen-limită: 15 septembrie"}
          </strong>
        </p>
        <p>
          {"📞 Informații: "}
          <strong>
            {"0724 527 838"}
          </strong>
        </p>
        <p>
          {"❤️ "}
          <strong>
            {"Nu putem schimba lumea pentru toți copiii, dar putem schimba lumea unor copii."}
          </strong>
        </p>
        <p>
          {"Iar uneori, tot ce trebuie să facem este să dăm mai departe un mesaj."}
        </p>
        <p>
          {"🙏 "}
          <strong>
            {"Te rugăm să distribui acest anunț!"}
          </strong>
          {" Poate chiar printre prietenii tăi se află cineva care cunoaște un asemenea copil."}
        </p>
        <p>
          <strong>
            {"Hai să oferim împreună o șansă acolo unde este cea mai mare nevoie de ea!"}
          </strong>
          {" 💙"}
        </p>
      </div>
    </article>
  </ContentPageLayout>;
}
