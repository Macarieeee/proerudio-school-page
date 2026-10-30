import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-background mb-6 leading-tight animate-fade-in">
            Cursuri de engleză pentru copii și adolescenți
          </h1>
          <p className="text-background/90 text-xl mb-10 leading-relaxed animate-fade-in">
            Pro Erudio School of English organizează cursuri de limba engleză pentru copii și adolescenți, cursuri de vară și tabere de limba engleză în România și în străinătate. 
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover:scale-105 transition-transform">
              <Link to="/cursuri-de-limba-engleza-pentru-copii-si-adolescenti/">Vezi cursurile</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background/20 px-8">
              <Link to="/inscriere-cursuri-pro-erudio/">Înscrie-te</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
