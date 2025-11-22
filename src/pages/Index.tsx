import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import NavigationSidebar from "@/components/NavigationSidebar";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationSidebar />
      <Hero />
      <WhoWeHelp />
      <HowItWorks />
      <Services />
      <WhyChoose />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
