import { ChevronRight } from "lucide-react";
import libraryImage from "@/assets/facility-library.jpg";
import researchImage from "@/assets/facility-research.jpg";
import auditoriumImage from "@/assets/facility-auditorium.jpg";
import counselingImage from "@/assets/facility-counseling.jpg";

const FacilitiesSection = () => {
  const facilities = [
    {
      title: "Library & Resources",
      description: "Extensive collection of English learning materials",
      image: libraryImage,
    },
    {
      title: "Language Lab",
      description: "State-of-the-art technology for practice",
      image: researchImage,
    },
    {
      title: "Events & Workshops",
      description: "Regular cultural and speaking events",
      image: auditoriumImage,
    },
    {
      title: "Career & Counseling",
      description: "Professional guidance and support",
      image: counselingImage,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-wider mb-4 uppercase">
            Our Facilities
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Our Advanced
            Learning Environments
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience world-class facilities designed to enhance your English learning journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-[400px]"
            >
              <img 
                src={facility.image} 
                alt={facility.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <h3 className="text-2xl font-bold mb-2">{facility.title}</h3>
                <p className="text-background/90 text-sm">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 text-primary hover:gap-4 transition-all font-semibold">
            View All Facilities
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
