import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AboutUsSection from "@/components/AboutUsSection";
import PersonalDevelopmentSection from "@/components/PersonalDevelopmentSection";
import SummerCampsSection from "@/components/SummerCampsSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[88px]">
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        <WhyChooseSection />
        <AboutUsSection />
        <PersonalDevelopmentSection />
        <SummerCampsSection />
        <BlogSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
