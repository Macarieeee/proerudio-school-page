import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import cambridgeGoldImage from "@/assets/CambridgeGold.png";

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
              De ce ProErudio?
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Centru de Pregătire GOLD pentru examenele Cambridge
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Suntem Centru de Pregătire GOLD pentru examenele Cambridge cu ajutorul partenerilor noștri de la
              EECentre (European Examinations Center), iar prin parteneriatul cu Fundația Study Abroad Advising
              Centre susținem tinerii pentru continuarea studiilor în străinătate.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Oferta noastră include cursuri de limbi străine, cursuri de inițiere în lumea dansului, cursuri de
              vară și tabere de limba engleză în România și Marea Britanie, pentru formarea unor personalități
              complexe și armonioase.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-semibold">Limba engleză pentru copii și adolescenți</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-semibold">Promovabilitate excelentă pentru examenele internaționale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-semibold">Flexibilitate, cursuri de vară și tabere pentru copii</span>
              </div>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="https://www.proerudio.ro/cine-suntem/">Citește mai multe</a>
            </Button>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <button
                className="group relative min-h-[420px] rounded-2xl border border-border bg-background p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Deschide imaginea Cambridge GOLD pe tot ecranul"
              >
                <span className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
                  <Search className="h-4 w-4" />
                  Mărește
                </span>
                <span className="flex h-full min-h-[360px] items-center justify-center">
                  <img
                    src={cambridgeGoldImage}
                    alt="Cambridge English GOLD Preparation Centre"
                    className="max-h-[360px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-[96vw] border-0 bg-transparent p-0 shadow-none">
              <DialogTitle className="sr-only">
                Cambridge English GOLD Preparation Centre
              </DialogTitle>
              <DialogDescription className="sr-only">
                Imagine mărită cu badge-ul Cambridge English GOLD Preparation Centre.
              </DialogDescription>
              <div className="flex h-[88vh] w-[96vw] items-center justify-center rounded-2xl bg-background p-4 shadow-2xl sm:p-8">
                <img
                  src={cambridgeGoldImage}
                  alt="Cambridge English GOLD Preparation Centre"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
