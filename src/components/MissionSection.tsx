import { Button } from "@/components/ui/button";
import { Target, Lightbulb, Phone, ThumbsUp } from "lucide-react";
import missionImage from "@/assets/mission-building.jpg";

const MissionSection = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-secondary-foreground/90 text-sm font-semibold tracking-wider mb-4 uppercase">
              Our Mission
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Empowering Students To Reach
              Their Full Potential
            </h2>
            <p className="text-secondary-foreground/80 mb-12 leading-relaxed">
              ProErudio English School is dedicated to providing exceptional English education that 
              opens doors to global opportunities. We create a nurturing environment where every 
              student can flourish and achieve their language learning goals.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div>
                <div className="w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Personalized Learning Paths
                </h3>
                <p className="text-secondary-foreground/70">
                  Customized curriculum tailored to your specific goals and learning style for optimal progress.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 rounded-full bg-background/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Interactive Learning Methods
                </h3>
                <p className="text-secondary-foreground/70">
                  Engaging activities and modern teaching approaches that make learning English enjoyable.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore More
              </Button>
              <a 
                href="tel:(888)1234-5678"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-background/20 hover:bg-background/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(888) 1234 5678</span>
              </a>
            </div>
          </div>

          {/* Image with Overlay Card */}
          <div className="relative">
            <img 
              src={missionImage} 
              alt="ProErudio Building" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Our School Provides A Supportive
                    & Stimulating Atmosphere.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
