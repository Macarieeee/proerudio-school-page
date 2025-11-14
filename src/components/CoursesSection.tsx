import { Button } from "@/components/ui/button";
import { BookOpen, Award, Users, TrendingUp } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "Beginner",
      level: "A1-A2",
      description: "Perfect pentru cei care încep învățarea limbii engleze. Acoperim bazele gramaticii, vocabularului și pronunției într-un mod interactiv și plăcut.",
      features: ["Profesori certificați", "Grupe mici", "Materiale incluse"],
    },
    {
      icon: Users,
      title: "Intermediate",
      level: "B1-B2",
      description: "Dezvoltă-ți abilitățile de comunicare și înțelegere. Perfecționează gramatica și extinde vocabularul pentru conversații fluente în situații diverse.",
      features: ["Conversații practice", "Exerciții interactive", "Pregătire examene"],
    },
    {
      icon: TrendingUp,
      title: "Advanced",
      level: "C1-C2",
      description: "Atingi nivelul de fluență aproape nativ. Perfecționează nuanțele limbii, stilul formal și informal pentru comunicare profesională sau academică.",
      features: ["Discuții complexe", "Business English", "Certificare Cambridge"],
    },
    {
      icon: Award,
      title: "Pregătire Cambridge",
      level: "Toate nivelurile",
      description: "Cursuri specializate pentru examenele Cambridge (KET, PET, FCE, CAE, CPE). Strategii de examen, practice tests și feedback personalizat.",
      features: ["Mock exams", "Tehnici de examen", "Rezultate garantate"],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
            Cursuri de limba engleză
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Alege nivelul potrivit pentru tine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            De la primii pași până la fluență completă, avem programul perfect pentru fiecare etapă
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <course.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">{course.title}</h3>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                  {course.level}
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>
              <ul className="space-y-2 mb-6">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Detalii curs
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
