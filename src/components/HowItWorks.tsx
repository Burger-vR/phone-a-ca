import { Phone, MessageSquare, CreditCard } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Call or book a session",
    description: "Connect directly with a Chartered Accountant",
  },
  {
    icon: MessageSquare,
    title: "Discuss your need",
    description: "Budgeting, cash flow, tax, systems, or strategy",
  },
  {
    icon: CreditCard,
    title: "Pay only for the time you use",
    description: "Expert advice, on your terms",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting expert financial advice is simple and straightforward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative mb-6">
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[var(--shadow-elegant)]">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
