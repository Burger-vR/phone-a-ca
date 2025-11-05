import { Phone, MessageSquare, CreditCard } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Call or book a session",
    description: "Connect directly with a Chartered Accountant",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Discuss your need",
    description: "Budgeting, cash flow, tax, systems, or strategy",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Pay only for the time you use",
    description: "Expert advice, on your terms",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-secondary tracking-wider uppercase">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Getting expert financial advice is simple and straightforward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-secondary/50 to-transparent" />
              )}
              
              <div className="relative mb-8">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {step.number}
                </div>
                
                {/* Icon container */}
                <div className="relative mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[var(--shadow-elegant)] group-hover:shadow-[var(--shadow-hover)] group-hover:scale-110 transition-all duration-300">
                  <step.icon className="h-12 w-12 text-white" strokeWidth={2} />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default HowItWorks;
