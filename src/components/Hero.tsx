import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary py-24 md:py-40">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur-md border border-white/20 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-white tracking-wide">A FINANCE EXPERT IN YOUR POCKET</span>
            </div>
          </div>
          
          <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in-up">
            Phone-a-CA
          </h1>
          
          <p className="mb-10 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            We provide on-demand, professional financial insight for business owners and leaders who need clarity, not complexity. Our Chartered Accountants advise on everything from financial management and cash flow to processes and reporting — helping you act with confidence and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-[var(--shadow-glow)] transition-all text-base px-8 py-6 rounded-xl font-semibold"
              asChild
            >
              <a href="tel:+27781347607">
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Call Us Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-md text-base px-8 py-6 rounded-xl font-semibold hover:border-white/50 transition-all"
              asChild
            >
              <a href="https://calendar.app.google/jz4xrFXiK1CvdUdA7" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Session
              </a>
            </Button>
          </div>
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
