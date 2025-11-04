import { CheckCircle2, Zap, Shield, TrendingUp, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Chartered Accountants you can trust",
    description: "Work with qualified professionals who understand your business",
  },
  {
    icon: Zap,
    title: "Fast, flexible, and affordable",
    description: "Get expert help exactly when you need it, on your schedule",
  },
  {
    icon: TrendingUp,
    title: "Practical advice that drives action",
    description: "Strategic guidance that translates into real business results",
  },
  {
    icon: DollarSign,
    title: "No retainers. No hidden costs.",
    description: "Just expertise when you need it, with transparent pricing",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-secondary tracking-wider uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Why Choose Phone-a-CA
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the difference of having expert financial guidance at your fingertips
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                    <benefit.icon className="h-7 w-7" strokeWidth={2.5} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default WhyChoose;
