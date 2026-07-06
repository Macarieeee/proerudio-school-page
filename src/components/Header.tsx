import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Menu, X, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/ProErudioSchoolofEnglish.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { to: "/cursuri-engleza", label: "Cursuri de limba engleză" },
    { to: "/cursuri-copii", label: "Alte cursuri pentru copii" },
    { to: "/cursuri-vara", label: "Cursuri de vară" },
    { to: "/evenimente", label: "Evenimente" },
    { to: "/tabere", label: "Tabere" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="bg-muted/50 py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Program: 9:00 - 18:00
            </span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="mailto:office@proerudio.ro" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>office@proerudio.ro</span>
            </a>
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/proerudio?locale=ro_RO" target="_blank" rel="noopener noreferrer" aria-label="Facebook ProErudio">
                <Facebook className="w-4 h-4 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.instagram.com/pro_erudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram ProErudio">
                <Instagram className="w-4 h-4 hover:text-primary transition-colors" />
              </a>
              <a href="https://www.youtube.com/@ProerudioRo" target="_blank" rel="noopener noreferrer" aria-label="YouTube ProErudio">
                <Youtube className="w-4 h-4 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={logoImage}
              alt="ProErudio School of English"
              className="h-14 w-auto max-w-[210px] object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-y-[-2px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform">
              <Link to="/inscriere">Înscrie-te</Link>
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                <Link to="/inscriere">Înscrie-te</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
