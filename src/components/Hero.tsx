import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-5xl md:text-7xl font-bold text-white leading-tight">
            Phone-a-CA
          </h1>
          
          <p className="mb-6 text-xl md:text-2xl text-white/90 font-medium">
            A finance expert in your pocket
          </p>
          
          <p className="mb-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Running a business is demanding — keeping on top of your finances shouldn't be.
            Get on-demand access to experienced Chartered Accountants who help you make smart, 
            confident financial decisions — without the cost of hiring a full-time finance team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="tel:+27781347607">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Session
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default Hero;
