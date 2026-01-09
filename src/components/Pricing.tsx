import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Calendar, Mail, Handshake } from "lucide-react";

const pricingPlan = {
  name: "Pay-As-You-Go",
  price: "R1 200",
  unit: "/hour",
  discount: "Launch offer — Jan & Feb",
  features: [
    "No long-term contracts or complex SLAs",
    "Book only the time you need",
    "Phone, video, or in-person",
    "Same-day availability (subject to capacity)",
    "Pay only for time used",
  ],
  gradient: "from-primary/20 to-secondary/20",
};

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Pricing
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card
            className="group relative overflow-hidden transition-all duration-500 border-border bg-white shadow-2xl animate-scale-in"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-4 py-1 text-xs font-bold rounded-bl-lg">
              {pricingPlan.discount}
            </div>

            <CardHeader className="relative z-10 pb-8 pt-8">
              <div className="text-center space-y-2">
                <CardTitle className="text-2xl md:text-3xl text-foreground">
                  {pricingPlan.name}
                </CardTitle>
              </div>

              <div className="text-center mt-6">
                <div className="flex items-baseline justify-center gap-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-muted-foreground line-through">
                      {pricingPlan.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {pricingPlan.unit}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-accent">
                      R600
                    </span>
                    <span className="text-xl text-accent">
                      {pricingPlan.unit}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <ul className="space-y-3 mb-8">
                {pricingPlan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-foreground text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg text-base py-6 rounded-xl font-semibold transition-all mb-4"
                onClick={() => {
                  const element = document.getElementById('footer');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Handshake className="mr-2 h-5 w-5 text-accent" />
                Start a conversation
              </Button>

              {/* Trust marker */}
              <div className="text-center text-sm text-foreground/60">
                Chartered Accountants | South Africa
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional info */}
        <div className="max-w-3xl mx-auto text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-3">
              Not sure if this is the right fit?
            </h3>
            <p className="text-white/70 mb-6">
              Book a free 15-minute discovery call to explore your needs and see whether Phone-a-CA is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <a href="tel:+27781347607">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 078 134 7607
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                asChild
              >
                <a href="https://calendar.app.google/jz4xrFXiK1CvdUdA7" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
