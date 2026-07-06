import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import romaniaImage from "@/assets/summer-camp-romania.jpg";
import ukImage from "@/assets/summer-camp-uk.jpg";

const SummerCampsSection = () => {
  const camps = [
    {
      title: "Storytime",
      location: "Cursuri de vară în limba engleză",
      duration: "4 - 7 ani",
      description:
        "În vacanță e timpul să călătorim. Storytime este mijlocul magic de transport cu ajutorul căruia copiii se deplasează în timp și spațiu și trăiesc aventuri de neuitat.",
      features: [
        "Povești și aventuri în limba engleză",
        "Activități pentru copii mici",
        "Dezvoltarea comunicării",
        "Învățare prin joc și imaginație",
      ],
      image: romaniaImage,
      href: "https://www.proerudio.ro/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/storytime-copii-4-7-ani/",
    },
    {
      title: "Cinematics",
      location: "Cursuri de vară în limba engleză",
      duration: "13 - 18 ani",
      description:
        "Fie că te consideri cinefil sau doar îți plac filmele, acest curs este pentru tine. Explorează lumea filmelor, de la cele mute la tehnologiile moderne ale efectelor speciale.",
      features: [
        "Discuții și activități pe teme de film",
        "Vocabular și comunicare în engleză",
        "Creativitate și analiză",
        "Activități potrivite adolescenților",
      ],
      image: ukImage,
      href: "https://www.proerudio.ro/cursuri-de-vara/cursuri-de-vara-in-limba-engleza/cinematics-copii-13-18-ani/",
    },
    {
      title: "Tabere de engleză și aventură",
      location: "România",
      duration: "7 - 14 ani",
      description:
        "Taberele de limba engleză și aventură combină comunicarea în limba engleză cu experiențe memorabile, activități în aer liber și socializare.",
      features: [
        "Limba engleză în contexte reale",
        "Activități de aventură",
        "Socializare și autonomie",
        "Experiențe educaționale de vacanță",
      ],
      image: romaniaImage,
      href: "https://www.proerudio.ro/tabere/tabara-de-limba-engleza-si-aventura-in-romania/",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
            Cursuri de vară și tabere
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Cursuri de vară și tabere de limba engleză
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Programe de vacanță pentru copii și adolescenți, cu engleză, creativitate și aventură
          </p>
        </div>

        <div className="space-y-12">
          {camps.map((camp, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{camp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{camp.duration}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {camp.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {camp.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {camp.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href={camp.href} target="_blank" rel="noopener noreferrer">Află mai mult</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCampsSection;
