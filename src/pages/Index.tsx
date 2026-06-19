import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FocusAreas from "@/components/FocusAreas";
import AboutSection from "@/components/AboutSection";

import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FocusAreas />
      <AboutSection />
      
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
