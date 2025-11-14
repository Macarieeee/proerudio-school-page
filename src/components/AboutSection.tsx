import { Button } from "@/components/ui/button";
import { BookOpen, Users } from "lucide-react";
import classroomImage from "@/assets/about-classroom.jpg";
import studentImage from "@/assets/about-student.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={classroomImage} 
                alt="Students learning English" 
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="absolute bottom-0 right-0 lg:bottom-8 lg:right-8 w-64 h-80 z-20">
              <img 
                src={studentImage} 
                alt="Student with backpack" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
              About Us
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Empowering Communication Through
              English Excellence
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At ProErudio, we believe in transforming language learning into an engaging journey. 
              Our innovative approach combines traditional teaching methods with modern technology, 
              creating an environment where students thrive and achieve their goals.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    Modern Teaching Methods
                  </h3>
                  <p className="text-muted-foreground">
                    Experience cutting-edge educational techniques designed to maximize your learning potential 
                    and ensure rapid progress in English proficiency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    Interactive Communication Skills
                  </h3>
                  <p className="text-muted-foreground">
                    Build confidence through practical conversation practice, group discussions, and 
                    real-world scenarios that prepare you for any English-speaking environment.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90">
              Explore Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
