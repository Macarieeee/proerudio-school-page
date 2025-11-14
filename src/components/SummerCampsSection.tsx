import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";
import romaniaImage from "@/assets/summer-camp-romania.jpg";
import ukImage from "@/assets/summer-camp-uk.jpg";

const SummerCampsSection = () => {
  const camps = [
    {
      title: "Tabere de vară în România",
      location: "Munții Carpați",
      duration: "1-2 săptămâni",
      description: "Învață engleza într-un cadru natural spectaculos! Programul nostru combină lecțiile interactive de limba engleză cu activități în aer liber, excursii și jocuri educative. Copiii se distrează în timp ce își îmbunătățesc abilitățile de comunicare.",
      features: [
        "Lecții zilnice de engleză cu profesori certificați",
        "Activități outdoor și sporturi",
        "Drumeții și explorarea naturii",
        "Serate tematice și jocuri de rol în engleză"
      ],
      image: romaniaImage,
    },
    {
      title: "Tabere de vară în UK",
      location: "Londra, Oxford, Cambridge",
      duration: "2-4 săptămâni",
      description: "O experiență autentică de imersie în cultura britanică! Elevii noștri participă la programe intensive de engleză la școli de prestigiu din UK, locuiesc în campus sau familii gazdă și descoperă cele mai frumoase orașe britanice.",
      features: [
        "Cursuri intensive la școli britanice",
        "Cazare în campus universitar sau familii gazdă",
        "Excursii la obiective turistice iconice",
        "Certificat de participare recunoscut internațional"
      ],
      image: ukImage,
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
            Vacanțe de neuitat cu ProErudio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transformă vacanța de vară într-o aventură educațională memorabilă
          </p>
        </div>

        <div className="space-y-12">
          {camps.map((camp, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img 
                    src={camp.image} 
                    alt={camp.title} 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
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

                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Află mai mult
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
