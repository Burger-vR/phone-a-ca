import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Chartered Accountants you can trust",
  "Fast, flexible, and affordable",
  "Practical advice that drives action",
  "No retainers. No hidden costs. Just expertise when you need it.",
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Phone-a-CA
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-all"
              >
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
