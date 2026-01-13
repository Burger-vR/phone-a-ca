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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Why Choose <span className="whitespace-nowrap">Phone-a-CA</span>
          </h2>
        </div>

        <ul className="max-w-2xl mx-auto space-y-6">
          {benefits.map((benefit, index) => (
            <li
              key={benefit.title}
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                <benefit.icon className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <span className="text-lg md:text-xl font-semibold text-foreground">
                {benefit.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default WhyChoose;
