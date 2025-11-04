import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, TrendingUp, Shield, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategic Finance",
    subtitle: "Helping you plan with clarity and confidence",
    items: [
      "Budgeting and forecasting",
      "Cash flow management",
      "Business model review & pricing strategy",
      "Funding and capital structure advice",
      "Risk management and internal control design",
      "Growth and expansion planning",
      "Building and structuring your finance team",
    ],
    gradient: "from-primary/10 to-secondary/10",
  },
  {
    icon: TrendingUp,
    title: "Operational Finance",
    subtitle: "Keeping your daily finances healthy and compliant",
    items: [
      "Invoicing, revenue and debtor management",
      "Vendor vetting, payments and creditors",
      "Cost management and expense control",
      "Payroll & employee benefits",
      "Taxation (VAT, PAYE, income and provisional tax)",
      "Bookkeeping and month-end processes",
      "Management reporting and analysis",
    ],
    gradient: "from-secondary/10 to-accent/10",
  },
  {
    icon: Shield,
    title: "Governance, Compliance & Systems",
    subtitle: "Ensuring your finance operations are sound, transparent and audit-ready",
    items: [
      "Internal control frameworks & approval policies",
      "Audit preparation & year-end readiness",
      "SARS, FICA, POPIA & Companies Act compliance",
      "Accounting systems setup (Xero, Sage, QuickBooks, etc.)",
      "Automation and process optimisation",
    ],
    gradient: "from-accent/10 to-primary/10",
  },
  {
    icon: Lightbulb,
    title: "Leadership & Advisory",
    subtitle: "Turning numbers into insight for better decisions",
    items: [
      "Financial storytelling for CEOs and boards",
      "Crisis and turnaround management",
      "Scenario planning & decision support",
      "Valuation, succession & investor readiness",
      "Coaching for finance leaders and founders",
    ],
    gradient: "from-secondary/10 to-primary/10",
  },
];

const Services = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-secondary tracking-wider uppercase">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            What We Offer
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Comprehensive financial expertise across all aspects of your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-500 border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10 pb-4">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg group-hover:scale-110 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <service.icon className="h-8 w-8" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-3 text-white group-hover:text-white transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-base text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
                  {service.subtitle}
                </p>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                      <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors" />
                      <span className="text-white/80 group-hover:text-white/90 transition-colors leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
