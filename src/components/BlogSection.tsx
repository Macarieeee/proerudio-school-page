import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "Examen Cambridge English: de ce să îl susții?",
      excerpt:
        "Un articol despre utilitatea examenelor Cambridge English și despre felul în care acestea pot susține obiectivele academice ale copiilor și adolescenților.",
      author: "ProErudio",
      date: "Articol publicat",
      category: "Examene Cambridge",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      href: "https://www.proerudio.ro/examen-cambridge-english-de-ce-sa-il-sustii/",
    },
    {
      title: "8 motive să-mi trimit copilul într-o tabără",
      excerpt:
        "Taberele oferă copiilor ocazia de a deveni mai autonomi, de a socializa și de a învăța prin experiențe directe și memorabile.",
      author: "ProErudio",
      date: "Articol publicat",
      category: "Tabere",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      href: "https://www.proerudio.ro/8-motive-sa-mi-trimit-copilul-tabara/",
    },
    {
      title: "Expresii din limbi străine folosite în viața de zi cu zi",
      excerpt:
        "O selecție de expresii intrate în comunicarea curentă, utile pentru copiii și adolescenții pasionați de limbi străine.",
      author: "ProErudio",
      date: "Articol publicat",
      category: "Limbi străine",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
      href: "https://www.proerudio.ro/expresii-din-limbi-straine-folosite-in-viata-de-zi-cu-zi/",
    },
    {
      title: "Copii fericiți versus copii de succes",
      excerpt:
        "Un articol despre echilibrul dintre performanță, copilărie, dezvoltare emoțională și valorile care susțin o creștere armonioasă.",
      author: "ProErudio",
      date: "Articol publicat",
      category: "Educație",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      href: "https://www.proerudio.ro/copii-fericiti-versus-copii-de-succes-secretele-unei-copilarii-fericite/",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
            Ultimele articole publicate
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Resurse pentru părinți și elevi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Articole despre examene Cambridge, tabere, limbi străine și educație
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
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

                <Button asChild variant="ghost" className="p-0 h-auto hover:gap-2 group/btn">
                  <a href={article.href} target="_blank" rel="noopener noreferrer">
                    Citește mai mult
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            <a href="https://www.proerudio.ro/blog/" target="_blank" rel="noopener noreferrer">
              Vezi toate articolele
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
