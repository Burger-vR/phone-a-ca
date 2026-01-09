import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyChoose from "@/components/WhyChoose";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <Hero />
      <Services />
      <WhoWeHelp />
      <HowItWorks />
      <WhyChoose />
      <Pricing />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
