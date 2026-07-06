import { Languages, Music, Palmtree, Sparkles } from "lucide-react";

const PersonalDevelopmentSection = () => {
  const courses = [
    {
      icon: Music,
      title: "Cursuri de dans",
      description:
        "Cursuri pentru copii de 5 - 9 ani, parte din oferta noastră de dezvoltare armonioasă prin activități creative și expresive.",
      color: "bg-primary",
      href: "https://www.proerudio.ro/descopera-magia-dansului/",
    },
    {
      icon: Palmtree,
      title: "Cursuri de vară",
      description:
        "Programe pentru copii de 4 - 9 ani, gândite pentru vacanțe active, comunicare, creativitate și relaționare cu ceilalți copii.",
      color: "bg-brand-cyan",
      href: "https://www.proerudio.ro/cursuri-de-vara/",
    },
    {
      icon: Languages,
      title: "Wieso nicht?",
      description:
        "Curs de limba germană pentru copii de 4 - 16 ani, o provocare pentru cei care cred că germana este inaccesibilă copiilor.",
      color: "bg-secondary",
      href: "https://www.proerudio.ro/alte-cursuri-pentru-copii/cursuri-de-limba-germana-pentru-copii-si-adolescenti/",
    },
    {
      icon: Sparkles,
      title: "Educație completă",
      description:
        "Cursuri de limbi străine și activități care dezvoltă calitățile native, echilibrul emoțional și valorile estetice și morale.",
      color: "bg-brand-cyan",
      href: "https://www.proerudio.ro/cine-suntem/",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
            Cursuri de dezvoltare personală
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Educație pentru viață
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Pe lângă limba engleză, oferim cursuri și activități care contribuie la dezvoltarea armonioasă a copiilor
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalDevelopmentSection;
