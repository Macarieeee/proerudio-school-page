import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/ProErudioSchoolofEnglish.svg";

const Footer = () => {
  const phoneNumbers = ["0741.389.897", "0724.527.838", "0771.753.323"];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="mb-6 inline-flex rounded-lg bg-background p-3">
              <img
                src={logoImage}
                alt="ProErudio School of English"
                className="h-16 w-auto max-w-[220px] object-contain"
              />
            </Link>
            <p className="text-background/80 mb-6 leading-relaxed">
              Cursuri de limba engleză pentru copii și adolescenți, pregătire Cambridge, cursuri de vară și tabere
              de limba engleză.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/proerudio?locale=ro_RO" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label="Facebook ProErudio">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pro_erudio/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label="Instagram ProErudio">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@ProerudioRo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label="YouTube ProErudio">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Link-uri rapide</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/cursuri-engleza" className="text-background/80 hover:text-primary transition-colors">
                  Cursuri de limba engleză
                </Link>
              </li>
              <li>
                <Link to="/cursuri-copii" className="text-background/80 hover:text-primary transition-colors">
                  Alte cursuri pentru copii
                </Link>
              </li>
              <li>
                <Link to="/cursuri-vara" className="text-background/80 hover:text-primary transition-colors">
                  Cursuri de vară
                </Link>
              </li>
              <li>
                <Link to="/tabere" className="text-background/80 hover:text-primary transition-colors">
                  Tabere
                </Link>
              </li>
              <li>
                <Link to="/despre" className="text-background/80 hover:text-primary transition-colors">
                  Despre noi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Resurse</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/examene-cambridge" className="text-background/80 hover:text-primary transition-colors">
                  Examene Cambridge
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-primary transition-colors">
                  Ultimele articole
                </Link>
              </li>
              <li>
                <Link to="/inscriere" className="text-background/80 hover:text-primary transition-colors">
                  Înscriere cursuri
                </Link>
              </li>
              <li>
                <Link to="/intrebari-frecvente" className="text-background/80 hover:text-primary transition-colors">
                  Întrebări frecvente
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  Bulevardul George Coșbuc Nr. 69, Sector 5, Cartier Rahova, București
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  Str. Locotenent Aviator Gheorghe Caranda nr. 9-11, Sector 6, Zona Răzoare, Drumul Sării
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\./g, "")}`}
                      className="text-background/80 hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:office@proerudio.ro" className="text-background/80 hover:text-primary transition-colors">
                  office@proerudio.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © 2026 ProErudio English School. Toate drepturile rezervate.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/politica-confidentialitate" className="text-background/70 hover:text-primary transition-colors">
                Politica de confidențialitate
              </Link>
              <Link to="/cookies" className="text-background/70 hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
