import { CalendarDays, MapPin, Users, Sparkles, Music, Ghost, Shirt, Mail, MessageCircle, Camera, Play, ArrowUpRight } from 'lucide-react';
import ContentPageLayout from '@/components/ContentPageLayout';


export default function Page() {
  return <ContentPageLayout bodyClass="detail-page-body bg-muted/35 py-16 md:py-24" hero={
    <section className={"desktop-page-hero page-hero relative isolate overflow-hidden bg-foreground text-background"}>
      <img src={"https://www.proerudio.ro/wp-content/uploads/2025/08/halloween.jpg"} alt={""} className={"absolute inset-0 h-full w-full object-cover"} />
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
          {"Halloween Party"}
        </h1>
      </div>
    </section>
  }>
    <article className={"page-content halloween-page min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10"}>
      <section className={"mobile-page-intro"} aria-label={"Halloween Party"}>
        <img src={"https://www.proerudio.ro/wp-content/uploads/2025/08/halloween.jpg"} alt={"Halloween Party"} decoding={"async"} />
        <h1>
          {"Halloween Party"}
        </h1>
      </section>
      <section className="halloween-welcome" aria-labelledby="party-title">
        <span className="halloween-eyebrow"><Ghost aria-hidden="true" /> Halloween @ Pro Erudio</span>
        <h2 id="party-title">No tricks.<br /><span>Just treats!</span></h2>
        <p>Pregătește-ți costumul, adună-ți curajul și vino la o petrecere cu jocuri, muzică, provocări și multă voie bună!</p>
        <a className="halloween-button" href="#participare">Detalii de participare <ArrowUpRight aria-hidden="true" /></a>
        <Ghost className="halloween-decoration" aria-hidden="true" />
      </section>

      <dl className="halloween-facts">
        <div><CalendarDays aria-hidden="true" /><dt>Când ne întâlnim</dt><dd>31 octombrie 2026<span>Sâmbătă · ora se comunică prin email</span></dd></div>
        <div><MapPin aria-hidden="true" /><dt>Unde are loc</dt><dd>Pro Erudio<span><a href="https://maps.app.goo.gl/4zpWVBFp12RsiEMU7" target="_blank" rel="noopener noreferrer">Vezi locația pe hartă ↗</a></span></dd></div>
        <div><Users aria-hidden="true" /><dt>Pentru cine</dt><dd>Copii de 6 - 14 ani<span>Activități adaptate pe grupe de vârstă</span></dd></div>
      </dl>

      <section className="halloween-section" aria-labelledby="activities-title">
        <span className="halloween-eyebrow">O zi în afara obișnuitului</span>
        <h2 id="activities-title">Puțini fiori. Multă distracție.</h2>
        <p>Descoperim engleza împreună cu tradițiile și cultura din spatele ei. Halloweenul, una dintre cele mai îndrăgite sărbători din lumea vorbitoare de engleză, este și una dintre activitățile noastre preferate.</p>
        <div className="halloween-activities">
          <section><Ghost aria-hidden="true" /><h3>Personaje de poveste</h3><p>Vrăjitori, vampiri, pirați sau supereroi: bucuria deghizării aduce împreună prieteni vechi și noi.</p></section>
          <section><Music aria-hidden="true" /><h3>Muzică și jocuri</h3><p>Ritmuri de Halloween, provocări și jocuri care transformă emoțiile în râsete și voie bună.</p></section>
          <section><Sparkles aria-hidden="true" /><h3>Atmosferă de Halloween</h3><p>Dovleci sculptați, personaje misterioase și dulciuri pentru cel mai înfricoșător moment al anului.</p></section>
        </div>
      </section>

      <section className="halloween-costumes" aria-labelledby="costumes-title">
        <div><span className="halloween-eyebrow"><Shirt aria-hidden="true" /> Dress code: imaginație</span><h2 id="costumes-title">Tu ce personaj alegi?</h2><p>Înfricoșător, haios, creativ sau magic — alege costumul în care te simți bine. Poate fi cumpărat, făcut acasă sau improvizat!</p><div className="halloween-tags"><span>Vrăjitor</span><span>Pirat</span><span>Supererou</span><span>Prințesă</span><span>…sau surprinde-ne!</span></div></div>
        <div className="halloween-checklist"><h3>Înainte să pornești</h3><ul><li>Vino costumat și pregătit de distracție.</li><li>Lasă acasă accesoriile care pot răni: săbii, bastoane, baghete rigide sau mături cu coadă.</li><li>Poți aduce un dovleac sculptat, fără lumânare sau flacără aprinsă.</li></ul></div>
      </section>

      <section id="participare" className="halloween-section" aria-labelledby="registration-title">
        <span className="halloween-eyebrow">Tot ce trebuie să știi</span>
        <h2 id="registration-title">Cum participi la petrecere</h2>
        <div className="halloween-registration">
          <div><ol className="halloween-steps"><li><h3>Trimite numele și vârsta copilului</h3><p>Prin email sau mesaj pe telefon, până la <strong>20 octombrie</strong>. Aceste detalii ne ajută să organizăm grupele de vârstă.</p></li><li><h3>Verifică emailul pe 22 octombrie</h3><p>Îți comunicăm ora petrecerii și repartizarea pe grupe, pentru activități potrivite intereselor copiilor.</p></li></ol><p className="halloween-note">În perioada 24–31 octombrie este vacanță, așa că organizăm înscrierile din timp.</p></div>
          <aside className="halloween-ticket" aria-label="Tarife de participare"><span className="halloween-eyebrow">Biletul tău la distracție</span><h3>Gratuit</h3><p>pentru cursanții Pro Erudio</p><hr /><p><strong>50 lei / prieten invitat</strong><br />Cursanții pot participa împreună cu prietenii lor.</p><a className="halloween-button" href="mailto:proerudio@gmail.com"><Mail aria-hidden="true" /> Scrie-ne un email</a><a className="halloween-contact" href="sms:0771753323"><MessageCircle aria-hidden="true" /> Trimite SMS: 0771 753 323</a><span className="halloween-email">proerudio@gmail.com</span></aside>
        </div>
      </section>

      <section className="halloween-memories" aria-labelledby="memories-title">
        <span className="halloween-eyebrow">Din edițiile trecute</span>
        <h2 id="memories-title">Aruncă o privire la distracție</h2>
        <p>Costume, zâmbete și pași de dans: descoperă atmosfera petrecerilor noastre.</p>
        <div className="halloween-media">
          {[
            { label: 'Album foto · partea I', href: 'https://www.facebook.com/media/set?vanity=proerudio&set=a.1418712076372820', icon: Camera },
            { label: 'Album foto · partea a II-a', href: 'https://www.facebook.com/media/set/?vanity=proerudio&set=a.1420296469547714', icon: Camera },
            { label: 'Halloween pe Facebook', href: 'https://www.facebook.com/100047021245698/videos/a.1416869369890424/1815580939066784', icon: Play },
            { label: 'Petrecerea pe YouTube', href: 'https://www.youtube.com/watch?v=gEIb0aBpYnc&t=6s', icon: Play },
            { label: 'Dance and Freeze', href: 'https://www.facebook.com/reel/524665347152010', icon: Music },
          ].map(({ label, href, icon: Icon }) => <a key={href} href={href} target="_blank" rel="noopener noreferrer"><Icon aria-hidden="true" /><span>{label}</span><ArrowUpRight aria-hidden="true" /></a>)}
        </div>
      </section>
    </article>
  </ContentPageLayout>;
}
