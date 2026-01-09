import { CheckCircle2, Zap, Shield, TrendingUp, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "SAICA registered Chartered Accountants you can trust",
  },
  {
    icon: Zap,
    title: "Fast, flexible, and affordable",
  },
  {
    icon: TrendingUp,
    title: "Practical advice that drives action",
  },
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="relative py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Why Choose Phone-a-CA
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                    <benefit.icon className="h-8 w-8" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {benefit.title}
                  </h3>
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
