import { ArrowRight, BookOpen, Check, UserRound, UsersRound } from 'lucide-react';

const inputClass = 'registration-input';

const studentFields = [
  ['your-name', 'Numele și prenumele cursantului', true],
  ['your-birth', 'Data nașterii', true],
  ['your-orar', 'Orar grădiniță/școală', false],
  ['your-clasa', 'Clasa/grupa', false],
  ['your-provenienta', 'Școala/grădinița de proveniență', false],
] as const;
const parentFields = [
  ['your-parent', 'Numele și prenumele părintelui', 'text'],
  ['your-phone', 'Telefon', 'tel'],
  ['your-email', 'Email', 'email'],
  ['your-adress', 'Adresa (numele străzii)', 'text'],
] as const;

function SelectField({ name, label, options }: { name: string; label: string; options: string[] }) {
  return <label className="registration-field">
    {label}
    <select name={name} className={inputClass} defaultValue="">
      <option value="">Alege o opțiune</option>
      {options.map(option => <option key={option} value={option}>{option === 'IMI ESTE INDIFERENT' ? 'Îmi este indiferent' : option}</option>)}
    </select>
  </label>;
}

export default function CourseRegistrationForm() {
  return <form action="https://www.proerudio.ro/inscriere-cursuri-pro-erudio/#wpcf7-f10423-p700-o1" method="post" acceptCharset="UTF-8" className="course-registration-form" aria-label="Formular de înscriere la cursuri">
    <div className="registration-welcome">
      <span className="registration-eyebrow"><BookOpen size={16} aria-hidden="true" /> UN NOU PAS ÎN ÎNVĂȚARE</span>
      <h3>Înscrie-te la Pro Erudio</h3>
      <p>Alege cursul potrivit și completează datele de mai jos. Câmpurile marcate cu * sunt obligatorii.</p>
    </div>
    <input type="hidden" name="_wpcf7" value="10423" />
    <input type="hidden" name="_wpcf7_version" value="6.1.7" />
    <input type="hidden" name="_wpcf7_locale" value="en_US" />
    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f10423-p700-o1" />
    <input type="hidden" name="_wpcf7_container_post" value="700" />
    <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
    <fieldset className="registration-section">
      <legend><BookOpen size={20} aria-hidden="true" /> Alege cursul</legend>
      <div className="registration-grid">
    <SelectField name="menu-792" label="Sediul la care doriți înscrierea" options={['COȘBUC', 'ORIZONT', 'IMI ESTE INDIFERENT']} />
    <SelectField name="menu-791" label="Cursul la care doriți înscrierea" options={['Cursuri engleză', 'Cursuri germană', 'Cursuri franceză', 'Module de conversație', 'Cursuri șah']} />
    <SelectField name="online-lasediu" label="Modalitatea de participare" options={['Online', 'La sediu', 'Mixt']} />
      </div>
    </fieldset>
    <fieldset className="registration-section">
      <legend><UserRound size={20} aria-hidden="true" /> Date despre cursant</legend>
      <div className="registration-grid">
      {studentFields.map(([name, label, required]) => <label key={name} className="registration-field">
        {label}{required && ' *'}
        <input name={name} type="text" required={required} maxLength={400} className={inputClass} placeholder={name === 'your-birth' ? 'ZZ.LL.AAAA' : undefined} />
      </label>)}
      </div>
    </fieldset>
    <fieldset className="registration-section">
      <legend><UsersRound size={20} aria-hidden="true" /> Date despre unul dintre părinți</legend>
      <div className="registration-grid">
      {parentFields.map(([name, label, type]) => <label key={name} className="registration-field">
        {label} *
        <input name={name} type={type} required maxLength={400} className={inputClass} />
      </label>)}
      </div>
    </fieldset>
    <fieldset className="registration-section">
      <legend><Check size={20} aria-hidden="true" /> Ultimele detalii</legend>
    <SelectField name="menu-research" label="Cum ați aflat de cursurile noastre?" options={['Căutare Google', 'Site-uri partenere', 'Târguri educaționale', 'Fluturași / Flyere', 'Reclamă stradală', 'De la cunoștințe', 'Alte surse']} />
    <div className="registration-consents">
    <label className="registration-consent">
      <input className="mt-1 h-4 w-4 shrink-0" type="checkbox" name="acceptance-569" value="1" required />
      <span>Am înțeles această <a href="/declaratie-de-consimtamant/" target="_blank" rel="noopener noreferrer">declarație de consimțământ</a> și sunt de acord cu procesarea datelor mele personale prin canalele de mai sus în scopurile descrise în această declarație de consimțământ.</span>
    </label>
    <label className="registration-consent">
      <input className="mt-1 h-4 w-4 shrink-0" type="checkbox" name="acceptance-570" value="1" required />
      <span>Am citit și sunt de acord cu <a href="/regulament-de-ordine-interioara/" target="_blank" rel="noopener noreferrer">regulamentul de funcționare</a>.</span>
    </label>
    </div>
    </fieldset>
    <div className="registration-footer">
      <span>Mai aproape de următoarea aventură în învățare.</span>
      <button type="submit">Trimite înscrierea <ArrowRight size={18} aria-hidden="true" /></button>
    </div>
  </form>;
}
