import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PROERUDIO</h3>
                <p className="text-xs text-background/70">ENGLISH SCHOOL</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Școala de limba engleză unde învățarea devine o aventură plăcută și rezultatele sunt garantate.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
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
                <Link to="/tabere" className="text-background/80 hover:text-primary transition-colors">
                  Tabere
                </Link>
              </li>
              <li>
                <Link to="/despre" className="text-background/80 hover:text-primary transition-colors">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resurse</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/examene-cambridge" className="text-background/80 hover:text-primary transition-colors">
                  Examene Cambridge
                </Link>
              </li>
              <li>
                <Link to="/materiale" className="text-background/80 hover:text-primary transition-colors">
                  Materiale gratuite
                </Link>
              </li>
              <li>
                <Link to="/testimoniale" className="text-background/80 hover:text-primary transition-colors">
                  Testimoniale
                </Link>
              </li>
              <li>
                <Link to="/intrebari-frecvente" className="text-background/80 hover:text-primary transition-colors">
                  Întrebări frecvente
                </Link>
              </li>
              <li>
                <Link to="/termeni" className="text-background/80 hover:text-primary transition-colors">
                  Termeni și condiții
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  Str. Exemplu Nr. 123<br />
                  București, România
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+40888123456" className="text-background/80 hover:text-primary transition-colors">
                  +40 (888) 123-456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@proerudio.ro" className="text-background/80 hover:text-primary transition-colors">
                  contact@proerudio.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">
              © 2024 ProErudio English School. Toate drepturile rezervate.
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
