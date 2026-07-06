import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, UserRound } from "lucide-react";

const TestimonialsSection = () => {
  const contactOptions = [
    {
      icon: UserRound,
      title: "Față în față",
      text: "La sfârșitul sau începutul cursului, în limita timpului disponibil.",
    },
    {
      icon: Phone,
      title: "Consultații",
      text: "Față în față sau telefonice, conform graficului afișat în sala de așteptare.",
    },
    {
      icon: Mail,
      title: "Email",
      text: "Prin email la office@proerudio.ro, pentru întrebări și informații suplimentare.",
    },
    {
      icon: MessageSquare,
      title: "Raport de progres",
      text: "Prin Raportul de apreciere a progresului întocmit în urma evaluării semestriale.",
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
            Comunicare cu familia
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Rămâneți informați despre progresul copilului
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Punem la dispoziție mai multe modalități prin care puteți urmări evoluția fiului sau fiicei dumneavoastră
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <option.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">{option.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{option.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-12 max-w-3xl overflow-hidden rounded-2xl bg-foreground shadow-xl">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/LVf-xSG23KU"
              title="Video de prezentare ProErudio"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="bg-background rounded-2xl border border-border p-8 text-center shadow-lg">
          <p className="text-muted-foreground mb-6 text-lg">
            Dacă încă nu v-ați făcut o părere sau doriți informații suplimentare, navigați în pagina „Cine suntem”
            sau folosiți butoanele de mai jos pentru a afla despre noi ori pentru a vă înscrie la un curs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="https://www.proerudio.ro/cine-suntem/">Citește mai multe</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              <a href="https://www.proerudio.ro/inscriere-cursuri-pro-erudio/">Înscrie-te</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
