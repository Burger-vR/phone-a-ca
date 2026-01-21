import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary py-20 md:py-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get Started - Choose Your Preferred Way to Connect
            </h2>
          </div>

          {/* Free 15 Minutes Notice */}
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <p className="text-xl md:text-2xl font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 inline-block">
              First 15 Minutes Free
            </p>
          </div>

          {/* Three Options as Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Schedule a Call */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all hover:shadow-2xl hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Schedule a Call</h3>
              <p className="text-white/80 text-center mb-6">Book a time that works for you</p>
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="https://calendar.app.google/jz4xrFXiK1CvdUdA7" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </div>

            {/* Call Us Now */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all hover:shadow-2xl hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Call Us Now</h3>
              <p className="text-white/80 text-center mb-6">Speak to a CA immediately</p>
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="tel:+27781347607">
                  Call Now
                </a>
              </Button>
            </div>

            {/* WhatsApp Us */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all hover:shadow-2xl hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">WhatsApp Us</h3>
              <p className="text-white/80 text-center mb-6">Quick questions? Message us</p>
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="https://wa.me/27781347607?text=Hi%20Phone-a-CA%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services%20and%20book%20a%20free%2015-minute%20call.%20Thanks%21" target="_blank" rel="noopener noreferrer">
                  Message Us
                </a>
              </Button>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-white/80 italic">
              Phone-a-CA — bringing clarity and confidence to your organisation's finances.
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/20 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-white/60">
              © 2026 Phone-a-CA. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-[150px]" />
    </footer>
  );
};

export default Footer;
