import { Button } from "@/components/ui/button";
import { Award, BookOpen, TrendingUp, Users } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "Join Us in Englishland",
      level: "4 - 7 ani",
      description:
        "Cursul trezește interesul și plăcerea copiilor pentru învățarea limbii engleze, cu accent pe înțelegerea mesajului audiat și dezvoltarea comunicării verbale.",
      features: ["Preșcolari și clasele 0 - I", "Activități interactive", "Comunicare verbală"],
      href: "https://www.proerudio.ro/cursuri-de-limba-engleza-pentru-copii-de-4-11-ani/curs-de-limba-engleza-join-us-in-englishland/",
    },
    {
      icon: Users,
      title: "Join Us for English",
      level: "8 - 11 ani",
      description:
        "Continuă parcursul început la Join Us in Englishland și dezvoltă abilități mai complexe de comunicare, înțelegere și folosire a limbii engleze.",
      features: ["Clasele II - IV", "Vocabular extins", "Comunicare ghidată"],
      href: "https://www.proerudio.ro/cursuri-de-limba-engleza-pentru-copii-de-4-11-ani/curs-de-limba-engleza-join-us-for-english/",
    },
    {
      icon: TrendingUp,
      title: "Head for KET/PET",
      level: "12 - 14 ani",
      description:
        "Pregătirea pentru examene oferă un scop concret învățării și crește motivația copiilor prin obiective clare, exerciții aplicate și feedback constant.",
      features: ["Pregătire Cambridge", "Strategii de examen", "Simulări și feedback"],
      href: "https://www.proerudio.ro/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-ketpet/",
    },
    {
      icon: Award,
      title: "Head for FCE/CAE",
      level: "14 - 19 ani",
      description:
        "Cursurile ghidează adolescenții către obținerea certificatelor Cambridge prin antrenarea tuturor abilităților: scris, citit, ascultat și vorbit.",
      features: ["Pregătire FCE/CAE/CPE", "Competențe lingvistice", "Certificare Cambridge"],
      href: "https://www.proerudio.ro/cursuri-de-limba-engleza-pentru-copii-de-12-19-ani/curs-de-limba-engleza-head-for-fce-cae-cpe/",
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
            Cursuri de engleză pentru copii și adolescenți
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Programe adaptate vârstei, nivelului și obiectivelor fiecărui copil
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
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
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
              <Button asChild className="w-full bg-primary hover:bg-primary/90" size="lg">
                <a href={course.href} target="_blank" rel="noopener noreferrer">Detalii curs</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
