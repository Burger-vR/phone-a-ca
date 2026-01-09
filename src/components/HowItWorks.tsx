import { Phone, MessageSquare, CreditCard, Lightbulb } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Connect with a CA",
    description: "Call, book, or chat with a Chartered Accountant",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Discuss your need",
    description: "Share your finance challenge or question",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Collaborate and receive expert advice",
    description: "Work together to find practical solutions",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Pay only for time used",
    description: "Transparent pricing with no hidden fees",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}
              
              <div className="relative mb-8">
                {/* Step number */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {step.number}
                </div>

                {/* Icon container */}
                <div className="relative mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[var(--shadow-elegant)] group-hover:shadow-[var(--shadow-hover)] group-hover:scale-110 transition-all duration-300 mt-8">
                  <step.icon className="h-12 w-12 text-white" strokeWidth={2} />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
