import { Award, Languages, Laptop } from "lucide-react";
import curriculumImage from "@/assets/curriculum-students.jpg";

const CurriculumSection = () => {
  const programs = [
    {
      icon: Award,
      title: "Certification Programs",
      description: "Earn recognized English proficiency certificates including TOEFL, IELTS preparation and Cambridge certifications to boost your career prospects.",
    },
    {
      icon: Languages,
      title: "Conversation Classes",
      description: "Practice speaking English in a supportive environment with native speakers and international students from diverse backgrounds.",
    },
    {
      icon: Laptop,
      title: "Online Learning Platform",
      description: "Access our comprehensive digital learning platform with interactive lessons, video tutorials, and practice materials available 24/7.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={curriculumImage} 
              alt="Students learning together" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
              Our Programs
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Discover How To Unlock
              Your English Potential
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive programs are designed to meet diverse learning needs, from beginners 
              taking their first steps in English to advanced learners perfecting their fluency.
            </p>

            <div className="space-y-8">
              {programs.map((program, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {program.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
