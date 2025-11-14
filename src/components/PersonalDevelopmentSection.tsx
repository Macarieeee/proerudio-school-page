import { Mic, Lightbulb, Users2, Target } from "lucide-react";

const PersonalDevelopmentSection = () => {
  const courses = [
    {
      icon: Mic,
      title: "Public Speaking",
      description: "Dezvoltă încrederea de a vorbi în public cu tehnici profesionale de prezentare",
      color: "bg-blue-500",
    },
    {
      icon: Lightbulb,
      title: "Creativitate & Inovație",
      description: "Stimulează gândirea creativă și abilitățile de rezolvare a problemelor",
      color: "bg-green-500",
    },
    {
      icon: Users2,
      title: "Lucru în echipă",
      description: "Învață să colaborezi eficient și să comunici într-un mediu de echipă",
      color: "bg-secondary",
    },
    {
      icon: Target,
      title: "Leadership",
      description: "Dezvoltă abilități de conducere și management pentru viitorul tău",
      color: "bg-primary",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
            Dezvoltare personală
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Cursuri de dezvoltare personală pentru copii
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Pe lângă limba engleză, oferim cursuri care dezvoltă competențe esențiale pentru succes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[300px] hover:-translate-y-2"
            >
              <div className={`absolute inset-0 ${course.color} opacity-90`} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-background text-center">
                <div className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <course.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className="text-background/90 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalDevelopmentSection;
