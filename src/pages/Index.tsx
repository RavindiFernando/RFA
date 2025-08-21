import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
