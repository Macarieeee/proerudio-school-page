import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import programImage from "@/assets/programs-student.jpg";

const ProgramsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
              What We Provide
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Discover Our Learning
              Tools And Resources
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Access comprehensive English learning materials designed to support your journey 
              from beginner to advanced levels. Our resources are carefully curated to ensure 
              effective and enjoyable learning experiences.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    Comprehensive Curriculum
                  </h3>
                </div>
                <p className="text-muted-foreground ml-7">
                  Structured lessons covering grammar, vocabulary, reading, writing, listening, 
                  and speaking skills with progressive difficulty levels.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    Interactive Practice & Assessment
                  </h3>
                </div>
                <p className="text-muted-foreground ml-7">
                  Regular exercises, quizzes, and practical assignments to reinforce learning 
                  and track your progress throughout the course.
                </p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90">
              Explore Now
            </Button>
          </div>

          {/* Image with Video Button */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src={programImage} 
              alt="Student learning with technology" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PlayCircle className="w-10 h-10 text-primary" />
              </button>
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-background">
              <h3 className="text-2xl font-bold">
                Leveraging Technology For
                Personalized Progress Monitoring
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
