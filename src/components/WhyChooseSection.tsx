import { GraduationCap, Heart, MessageCircle, Sparkles, Trophy } from "lucide-react";

const WhyChooseSection = () => {
  const advantages = [
    {
      icon: GraduationCap,
      title: "Pregătire examene Cambridge",
      description:
        "Din 2011 pregătim cursanți pentru examenele Cambridge English, iar din 2025 suntem Centru de Pregătire GOLD datorită rezultatelor excelente obținute de candidații noștri.",
    },
    {
      icon: Trophy,
      title: "Feedback și evaluare",
      description:
        "Evaluăm progresul copiilor la sfârșitul fiecărei unități de învățare și, de două ori într-un an școlar, urmărim progresul pe fiecare competență lingvistică.",
    },
    {
      icon: Heart,
      title: "Dragoste pentru copii",
      description:
        "Suntem profesori din dragoste pentru copii, deci nu ne lipsesc zâmbetul de pe buze și entuziasmul în lucrul cu cei mici.",
    },
    {
      icon: MessageCircle,
      title: "Comunicare cu familia",
      description:
        "Părinții se pot informa față în față, prin consultații telefonice, prin email la office@proerudio.ro sau prin raportul de apreciere a progresului.",
    },
    {
      icon: Sparkles,
      title: "Doar în engleză",
      description:
        "Comunicăm preponderent în limba țintă cu toate grupele de vârstă pentru a crea un mediu natural și eficient de învățare.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
            De ce cursuri la ProErudio?
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Avantajele ProErudio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Pregătire solidă, evaluare constantă și comunicare deschisă cu familia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{advantage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
