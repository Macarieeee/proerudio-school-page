import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import CurriculumSection from "@/components/CurriculumSection";
import MissionSection from "@/components/MissionSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProgramsSection />
        <FacilitiesSection />
        <CurriculumSection />
        <MissionSection />
      </main>
    </div>
  );
};

export default Index;
