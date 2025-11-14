import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "Cum să îți motivezi copilul să învețe limba engleză",
      excerpt: "Descoperă 7 strategii eficiente pentru a face învățarea limbii engleze plăcută și captivantă pentru copii.",
      author: "Ana Popescu",
      date: "15 Dec 2024",
      category: "Sfaturi pentru părinți",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    },
    {
      title: "Beneficiile învățării limbii engleze de la vârstă fragedă",
      excerpt: "Studiile arată că copiii care învață engleza devreme dezvoltă abilități cognitive superioare. Află de ce.",
      author: "Maria Ionescu",
      date: "10 Dec 2024",
      category: "Educație",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    },
    {
      title: "Pregătire pentru examene Cambridge: Ghid complet",
      excerpt: "Tot ce trebuie să știi despre examenele Cambridge și cum să te pregătești pentru succes garantat.",
      author: "Prof. Elena Dumitrescu",
      date: "5 Dec 2024",
      category: "Examene",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
            Articole publicate
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Resurse și sfaturi educaționale
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cele mai recente articole despre învățarea limbii engleze și educație
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Button variant="ghost" className="p-0 h-auto hover:gap-2 group/btn">
                  Citește mai mult
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            Vezi toate articolele
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
