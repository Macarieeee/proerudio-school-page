import { GraduationCap, Trophy, Heart } from "lucide-react";

const WhyChooseSection = () => {
  const advantages = [
    {
      icon: GraduationCap,
      title: "Profesori certificați",
      description:
        "Echipa noastră este formată din profesori cu certificări internaționale și ani de experiență în predare. Fiecare lecție este pregătită cu atenție pentru a asigura progres rapid.",
    },
    {
      icon: Trophy,
      title: "Rezultate excepționale",
      description:
        "Peste 95% din elevii noștri promovează examenele Cambridge la prima încercare. Succesul lor este dovada calității programelor noastre educaționale.",
    },
    {
      icon: Heart,
      title: "Mediu modern și prietenos",
      description:
        "Săli de clasă dotate cu tehnologie modernă, materiale interactive și o atmosferă caldă care încurajează învățarea și exprimarea liberă în limba engleză.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">De ce să ne alegi?</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Avantajele ProErudio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descoperă de ce suntem alegerea preferată a sute de familii
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
