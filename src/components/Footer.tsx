import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary py-20 md:py-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Phone-a-CA
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-4">
              Your on-demand friend in finance.
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Instant Chartered Accountant guidance for uncertainty in your organisation's finance function.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Primary CTA */}
            <Button
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-[var(--shadow-glow)] transition-all text-base px-8 py-6 rounded-xl font-semibold"
              asChild
            >
              <a href="https://wa.me/27781347607" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Start a conversation
              </a>
            </Button>

            {/* Secondary CTAs */}
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-md text-base px-8 py-6 rounded-xl font-semibold hover:border-white/50 transition-all"
              asChild
            >
              <a href="tel:+27781347607">
                <Phone className="mr-2 h-5 w-5" />
                Call us
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
                Book online
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
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
