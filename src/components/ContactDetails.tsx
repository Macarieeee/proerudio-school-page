import { ArrowUpRight, Clock3, Globe, Mail, MapPin, MessageSquare, Phone, UsersRound } from 'lucide-react';
import '@/styles/contact-page.css';

const officeHours = [
  ['Luni', '12.00–19.00'],
  ['Marți', '09.30–19.00'],
  ['Miercuri', '09.30–17.00'],
  ['Joi', '09.30–16.00'],
  ['Vineri', '08.30–14.30'],
];

const locations = [
  {
    name: 'Coșbuc',
    area: 'Sector 5 · Rahova',
    address: 'Bulevardul George Coșbuc nr. 69, Sector 5, Cartier Rahova, București',
    maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Pro Erudio Bulevardul George Coșbuc 69 București'),
  },
  {
    name: 'Orizont',
    area: 'Sector 6 · Răzoare, Drumul Sării',
    address: 'Str. Locotenent Aviator Gheorghe Caranda nr. 9–11, sector 6 (Zona Răzoare, Drumul Sării)',
    maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Pro Erudio Strada Locotenent Aviator Gheorghe Caranda 9-11 București'),
  },
];

export default function ContactDetails() {
  return <article className="page-content contact-page min-w-0 rounded-2xl border bg-card p-6 shadow-sm md:p-10">
    <section className="mobile-page-intro mobile-page-intro-no-image" aria-label="Contact">
      <h1>Contact</h1>
    </section>

    <section className="contact-welcome" aria-labelledby="contact-title">
      <span className="contact-eyebrow"><MessageSquare aria-hidden="true" /> Suntem aici pentru tine</span>
      <h2 id="contact-title">Întrebări sau nelămuriri?<br /><span>Hai să vorbim.</span></h2>
      <p>Găsește mai jos datele de contact, programul secretariatului și informațiile despre cele două sedii Pro Erudio.</p>
      <a className="contact-primary-action" href="mailto:office@proerudio.ro"><Mail aria-hidden="true" /> Scrie-ne un email <ArrowUpRight aria-hidden="true" /></a>
    </section>

    <section className="contact-quick" aria-label="Contact rapid, valabil pentru ambele sedii">
      <div className="contact-quick-card">
        <span className="contact-icon"><Phone aria-hidden="true" /></span>
        <h3>Înscrieri, plăți și absențe</h3>
        <a href="tel:0771753323">0771 753 323</a>
        <p>Disponibil doar în timpul programului pentru informații referitoare la plăți și absențe.</p>
      </div>
      <div className="contact-quick-card">
        <span className="contact-icon"><Phone aria-hidden="true" /></span>
        <h3>Informații despre evoluția cursanților</h3>
        <a href="tel:0724527838">0724 527 838</a>
        <p>Disponibil și în afara orelor de program pentru situații de urgență.</p>
      </div>
      <div className="contact-quick-card">
        <span className="contact-icon"><Mail aria-hidden="true" /></span>
        <h3>Întrebări pe email</h3>
        <a href="mailto:office@proerudio.ro">office@proerudio.ro</a>
        <p>Datele de contact sunt valabile pentru ambele sedii.</p>
      </div>
    </section>

    <section className="contact-section" aria-labelledby="locations-title">
      <span className="contact-eyebrow">Ne găsești în București</span>
      <h2 id="locations-title">Două sedii. Aceeași pasiune pentru învățare.</h2>
      <div className="contact-locations">
        {locations.map((location, index) => <section className="contact-location" key={location.name} aria-labelledby={`location-${index}`}>
          <div className="contact-location-heading">
            <span className="contact-icon"><MapPin aria-hidden="true" /></span>
            <div><span className="contact-area">{location.area}</span><h3 id={`location-${index}`}>Sediul Pro Erudio {location.name}</h3></div>
          </div>
          <address>{location.address}</address>
          <a className="contact-map-action" href={location.maps} target="_blank" rel="noopener noreferrer">Vezi pe Google Maps <ArrowUpRight aria-hidden="true" /></a>
          <div className="contact-location-media">
            {index === 0 ? <iframe
              title="Prezentarea sediului Pro Erudio Coșbuc"
              loading="lazy"
              src="https://www.youtube.com/embed/LVf-xSG23KU?wmode=opaque&n38cUR4mXus&rel=0&enablejsapi=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            /> : <iframe
              title="Videoclip sediul Pro Erudio Orizont"
              src="https://www.youtube.com/embed/onSvZc9-ZQw?rel=0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />}
          </div>
          <span className="contact-media-caption">Sediul Pro Erudio {location.name}</span>
        </section>)}
      </div>
    </section>

    <div className="contact-practical">
      <section className="contact-hours" aria-labelledby="office-hours-title">
        <span className="contact-icon"><Clock3 aria-hidden="true" /></span>
        <h2 id="office-hours-title">Program secretariat</h2>
        <p>Adelina · etajul 2, sediul Coșbuc</p>
        <dl>{officeHours.map(([day, hours]) => <div key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}</dl>
        <a href="tel:0771753323"><Phone aria-hidden="true" /> 0771 753 323</a>
      </section>

      <section className="contact-parents" aria-labelledby="parents-title">
        <span className="contact-eyebrow"><UsersRound aria-hidden="true" /> Pentru cursanți și părinți</span>
        <h2 id="parents-title">Păstrăm legătura</h2>
        <div className="contact-parent-item">
          <h3>Vrei să discuți cu un profesor?</h3>
          <p>Sunteți cursant/părinte Pro Erudio și doriți să discutați cu unul dintre profesorii noștri? Sunați la <a href="tel:0771753323">0771 753 323</a> în intervalele puse la dispoziție pentru consultații (orarul îl găsiți afișat în sala de așteptare) sau trimiteți un SMS pentru a solicita o programare.</p>
          <a className="contact-text-action" href="sms:0771753323"><MessageSquare aria-hidden="true" /> Solicită o programare prin SMS <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="contact-parent-item">
          <h3>Anunță absența copilului</h3>
          <p>Doriți să anunțați absența copilului la curs? Trimiteți un SMS la numărul <a href="sms:0771753323">0771 753 323</a> și vi se va răspunde în aceeași zi în intervalul <strong>14.00–20.00, de luni până vineri</strong>.</p>
          <a className="contact-text-action" href="sms:0771753323"><MessageSquare aria-hidden="true" /> Trimite un SMS <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>
    </div>

    <footer className="contact-footer"><Globe aria-hidden="true" /><a href="/">www.proerudio.ro</a><span>Pro Erudio · School of English</span></footer>
  </article>;
}
