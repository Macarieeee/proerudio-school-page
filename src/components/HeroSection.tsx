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
        <div className="max-w-2xl">
          <p className="text-background/90 text-sm font-semibold tracking-wider mb-4 uppercase">
            Interactive Learning
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-background mb-6 leading-tight">
            Master English Through
            Collaborative Learning
          </h1>
          <p className="text-background/90 text-lg mb-8 leading-relaxed">
            Join ProErudio English School and unlock your potential through immersive language education. 
            Our proven methodology combines interactive lessons with real-world practice to ensure your success.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
