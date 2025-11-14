import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Linkedin, Youtube, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      {/* Top bar */}
      <div className="bg-muted/50 py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Timing: 9:00am - 6:00pm
            </span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="tel:(888)1234-5678" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>(888) 1234-5678</span>
            </a>
            <a href="mailto:info@proerudio.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@proerudio.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
              <Youtube className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-2xl font-bold text-secondary-foreground">P</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">PROERUDIO</h1>
              <p className="text-xs text-muted-foreground">ENGLISH SCHOOL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/cursuri-engleza" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-y-[-2px]">
              Cursuri de limba engleză
            </Link>
            <Link to="/cursuri-copii" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-y-[-2px]">
              Alte cursuri pentru copii
            </Link>
            <Link to="/cursuri-vara" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-y-[-2px]">
              Cursuri de vară
            </Link>
            <Link to="/evenimente" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-y-[-2px]">
              Evenimente
            </Link>
            <Link to="/tabere" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-y-[-2px]">
              Tabere
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-y-[-2px]">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform">
              <Link to="/inscriere">Înscrie-te</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link to="/cursuri-engleza" className="text-foreground hover:text-primary transition-colors font-medium">
                Cursuri de limba engleză
              </Link>
              <Link to="/cursuri-copii" className="text-foreground hover:text-primary transition-colors font-medium">
                Alte cursuri pentru copii
              </Link>
              <Link to="/cursuri-vara" className="text-foreground hover:text-primary transition-colors font-medium">
                Cursuri de vară
              </Link>
              <Link to="/evenimente" className="text-foreground hover:text-primary transition-colors font-medium">
                Evenimente
              </Link>
              <Link to="/tabere" className="text-foreground hover:text-primary transition-colors font-medium">
                Tabere
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </Link>
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
