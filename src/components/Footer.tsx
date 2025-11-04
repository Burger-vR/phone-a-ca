import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Phone-a-CA
          </h2>
          <p className="text-xl text-white/90 mb-8">
            A finance expert in your pocket.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call us
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book online
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Let's talk about your numbers
            </Button>
          </div>

          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Phone-a-CA. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
    </footer>
  );
};

export default Footer;
