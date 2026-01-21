import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary py-24 md:py-40">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-white tracking-wide">YOUR ON-CALL FRIEND IN FINANCE</span>
            </div>
          </div>
          
          <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in-up">
            Phone-a-CA
          </h1>

          <p className="mb-10 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Instant Chartered Accountant guidance for uncertainties in your organisation's finance function.
          </p>

          <div className="flex justify-center mb-6 px-4 md:px-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Primary CTA - Scrolls to Contact Section */}
            <Button
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-[var(--shadow-glow)] transition-all text-base px-6 md:px-8 py-6 rounded-xl font-semibold w-full md:w-auto max-w-md"
              onClick={() => {
                const footer = document.getElementById("footer");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Calendar className="mr-2 h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="leading-snug">Book a Session - First 15 Minutes Free</span>
            </Button>
          </div>

          <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed italic animate-fade-in" style={{ animationDelay: "0.25s" }}>
            From cash flow and budgeting to reporting and processes, we provide on-demand, practical guidance to help you make informed finance decisions.
          </p>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]" />
    </section>
  );
};

export default Hero;
