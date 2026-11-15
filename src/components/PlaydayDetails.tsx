import { CalendarDays, Clock, Sun } from 'lucide-react';

export default function PlaydayDetails() {
  return <section aria-labelledby="playday-details-title">
    <h2 id="playday-details-title">Detalii organizatorice</h2>
    <div className="course-details-panel playday-details">
      <div className="course-details-header">
        <div className="course-details-photo">
          <img src="https://www.proerudio.ro/wp-content/uploads/2016/01/playday-brut.jpg" alt="Activități de joacă la Play Day" loading="lazy" decoding="async" />
        </div>
        <h3>Play Day</h3>
        <p>O sesiune de joacă, cântec și distracție, integral supravegheată.</p>
        <dl className="playday-prices">
          <div><dt>Cursanți Pro Erudio</dt><dd><span>50</span> lei <small>/ 4 ore</small></dd></div>
          <div><dt>Copii care nu urmează cursurile noastre</dt><dd><span>100</span> lei <small>/ 4 ore</small></dd></div>
        </dl>
      </div>
      <div className="course-details-facts">
        <ul>
          <li className="course-fact"><span className="course-fact-icon"><Clock aria-hidden="true" /></span><strong>Durata unei sesiuni</strong>4 ore</li>
          <li className="course-fact"><span className="course-fact-icon"><Sun aria-hidden="true" /></span><strong>Interval orar</strong>09:00–13:00</li>
          <li className="course-fact"><span className="course-fact-icon"><CalendarDays aria-hidden="true" /></span><strong>Când se organizează</strong>În vacanțe, conform anunțurilor de pe pagina noastră de Facebook.</li>
        </ul>
      </div>
      <div className="course-details-footer">
        <a className="course-enroll-button" href="https://www.facebook.com/proerudio" target="_blank" rel="noopener noreferrer">Vezi programul pe Facebook</a>
      </div>
    </div>
  </section>;
}
