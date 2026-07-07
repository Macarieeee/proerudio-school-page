import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Music,
  Palette,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";
import summerImage from "@/assets/summer-camp-romania.jpg";
import classroomImage from "@/assets/about-classroom.jpg";

const outcomes = [
  "Vor descoperi placerea de a asculta povesti in limba engleza",
  "Vor putea spune cateva povesti in limba engleza",
  "Isi vor imbogati vocabularul legat de temele abordate",
  "Vor putea purta scurte dialoguri ghidate",
  "Vor reactiona verbal si nonverbal la instructiuni date in limba engleza",
  "Vor canta in limba engleza",
];

const activities = [
  {
    icon: BookOpen,
    title: "Povesti in engleza",
    text: "The Princess and the Frog, Puss in Boots, Gerry the Giant si alte aventuri potrivite copiilor de 4-7 ani.",
  },
  {
    icon: Palette,
    title: "Lucru manual si motricitate",
    text: "Coloram, decupam, lipim, trasam si unim pentru a fixa vocabularul prin activitati practice.",
  },
  {
    icon: Music,
    title: "Cantece si miscare",
    text: "Invatam poezii cu miscare, cantece si jocuri de echipa care incurajeaza comunicarea naturala.",
  },
  {
    icon: Sparkles,
    title: "Jocuri si concursuri",
    text: "Treasure hunts, charades, guess what si alte jocuri care transforma engleza intr-o experienta vie.",
  },
];

const details = [
  { icon: Users, label: "Varsta", value: "4-7 ani" },
  { icon: Clock, label: "Sedinta", value: "90 minute" },
  { icon: CalendarDays, label: "Modul", value: "Luni-vineri, 1 saptamana" },
  { icon: MapPin, label: "Format", value: "La sediu si online" },
];

const Storytime = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[88px]">
        <section className="relative flex min-h-[620px] items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${summerImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/20" />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/80">
                Curs intensiv de vara pentru copii
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-background lg:text-6xl">
                Storytime!
              </h1>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-background/90">
                Engleza prin povesti pentru copii de 4-7 ani, cu jocuri, cantece, activitati creative si aventuri
                care ii ajuta pe cei mici sa invete natural.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary px-8 hover:bg-primary/90">
                  <a href="https://www.proerudio.ro/inscriere-cursuri-pentru-copii-si-adolescenti/#vara">
                    Inscrie-te la curs
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-background bg-background/10 px-8 text-background backdrop-blur-sm hover:bg-background/20"
                >
                  <a href="#detalii">Vezi detaliile</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="detalii" className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {details.map((item) => (
                <div key={item.label} className="rounded-lg border bg-card p-6 shadow-sm">
                  <item.icon className="mb-4 h-8 w-8 text-primary" />
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-xl font-bold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  Engleza prin povesti
                </p>
                <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-5xl">
                  O calatorie de vara in timp, spatiu si imaginatie
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    In vacanta e timpul sa calatorim. Storytime este mijlocul magic de transport prin care copiii
                    traiesc aventuri de neuitat, iar limba engleza devine instrumentul prin care dezleaga mistere.
                  </p>
                  <p>
                    Fiecare ora aduce o alta poveste, iar invatarea se face prin joc, dialoguri ghidate, secvente video,
                    cantece, poezii cu miscare si activitati in echipa.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={classroomImage}
                  alt="Copii la cursul de engleza"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <div className="mb-14 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                Activitati la curs
              </p>
              <h2 className="text-3xl font-bold text-foreground lg:text-5xl">
                Povesti, creativitate si comunicare
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {activities.map((activity) => (
                <div key={activity.title} className="rounded-lg border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <activity.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{activity.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{activity.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  La sfarsitul cursului
                </p>
                <h2 className="mb-8 text-3xl font-bold text-foreground lg:text-5xl">
                  Copiii pleaca mai increzatori in engleza
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {outcomes.map((outcome) => (
                    <div key={outcome} className="flex gap-3 rounded-lg bg-background p-4 shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="rounded-lg border bg-card p-8 shadow-lg">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                  Detalii organizatorice
                </p>
                <h3 className="mb-2 text-3xl font-bold text-foreground">Storytime!</h3>
                <p className="mb-6 text-muted-foreground">Curs de vara de limba engleza</p>
                <div className="mb-6 flex items-end gap-2">
                  <span className="text-5xl font-bold text-foreground">350</span>
                  <span className="pb-2 text-lg font-semibold text-muted-foreground">Lei / modul</span>
                </div>
                <ul className="mb-8 space-y-3 text-muted-foreground">
                  <li>Durata unui modul: 5 sedinte</li>
                  <li>Numar participanti: maxim 9 copii in grupa</li>
                  <li>Orarul se stabileste in urma inscrierii</li>
                  <li>10% reducere la achizitia unui nou modul</li>
                </ul>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <a href="https://www.proerudio.ro/inscriere-cursuri-pentru-copii-si-adolescenti/#vara">
                    Inscrie-te la acest curs
                  </a>
                </Button>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                Din sala de curs
              </p>
              <h2 className="text-3xl font-bold text-foreground lg:text-5xl">Momente Storytime</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {["https://www.youtube.com/embed/tiKXx6WTeqk", "https://www.youtube.com/embed/sKV_LBmW1fg"].map(
                (video) => (
                  <div key={video} className="overflow-hidden rounded-lg border bg-card shadow-sm">
                    <div className="relative aspect-video">
                      <iframe
                        src={video}
                        title="Video Storytime"
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <PlayCircle className="h-6 w-6" />
                <span className="font-semibold uppercase tracking-wider">Locuri limitate</span>
              </div>
              <h2 className="text-3xl font-bold lg:text-4xl">Inscrie copilul la Storytime!</h2>
            </div>
            <Button asChild size="lg" variant="secondary" className="px-8">
              <a href="https://www.proerudio.ro/inscriere-cursuri-pentru-copii-si-adolescenti/#vara">
                Formular inscriere
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Storytime;
