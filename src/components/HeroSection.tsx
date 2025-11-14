import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-background mb-6 leading-tight animate-fade-in">
            Învață limba engleză cu încredere și bucurie
          </h1>
          <p className="text-background/90 text-xl mb-10 leading-relaxed animate-fade-in">
            La ProErudio, transformăm învățarea limbii engleze într-o experiență plăcută și eficientă. 
            Cu profesori certificați Cambridge și metode moderne de predare, îți oferim toate instrumentele 
            pentru a atinge fluența în limba engleză.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover:scale-105 transition-transform">
              Vezi cursurile
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background/20 px-8">
              Contactează-ne
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
