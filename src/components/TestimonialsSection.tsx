import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Popescu",
      role: "Părinte",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 5,
      text: "Fiica mea a făcut progrese uimitoare în doar 6 luni la ProErudio. Profesorii sunt dedicați și crează un mediu în care copiii se simt confortabil să vorbească engleza. Recomand cu încredere!",
    },
    {
      name: "Andrei Ionescu",
      role: "Elev, 16 ani",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 5,
      text: "Am reușit să iau FCE cu nota A datorită pregătirii de la ProErudio. Lecțiile sunt interactive și nu m-am plictisit niciodată. Acum pot comunica fluent în engleză și sunt pregătit pentru facultate.",
    },
    {
      name: "Elena Dumitrescu",
      role: "Părinte",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      rating: 5,
      text: "Cei doi copii ai mei merg cu plăcere la cursuri. Au participat și la tabăra din UK și a fost o experiență de neuitat pentru ei. Profesionalismul și atenția ProErudio sunt remarcabile.",
    },
    {
      name: "Alexandru Popa",
      role: "Elev, 14 ani",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 5,
      text: "La ProErudio am învățat mult mai mult decât la școală. Profesorii explică clar și avem parte de activități super interesante. Acum engleza este materia mea preferată!",
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
            Testimoniale
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Ce spun elevii și părinții noștri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mii de povești de succes care ne motivează să fim cei mai buni
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
