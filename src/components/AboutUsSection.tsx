import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import aboutImage from "@/assets/about-classroom.jpg";

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
              Despre noi
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              ProErudio - Pasiune pentru educație de peste 15 ani
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Fondată în 2008, ProErudio și-a construit reputația pe rezultate remarcabile și 
              dedicare față de fiecare elev. Suntem mândri că am format generații de vorbitori 
              fluenți de limba engleză care au reușit să-și atingă obiectivele academice și profesionale.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Misiunea noastră este să oferim educație de calitate superioară într-un mediu care 
              inspiră încredere și curiozitate. Credem că fiecare elev are potențialul de a stăpâni 
              limba engleză, iar noi suntem aici să îi ghidăm în această călătorie.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-semibold">Peste 5.000 de absolvenți</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-semibold">Partener oficial Cambridge Assessment English</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-semibold">Experiență de 15 ani în educație</span>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Descoperă povestea noastră
            </Button>
          </div>

          {/* Video/Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src={aboutImage} 
              alt="ProErudio classroom" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-primary ml-1" />
              </div>
            </button>
            <div className="absolute bottom-8 left-8 right-8 text-background">
              <p className="text-sm mb-2 font-semibold">Video de prezentare</p>
              <h3 className="text-2xl font-bold">
                Vizitează virtual școlile ProErudio
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
