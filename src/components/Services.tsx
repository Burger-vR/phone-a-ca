import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, TrendingUp, Shield, Lightbulb, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategic Finance",
    subtitle: "Helping leaders plan with clarity and confidence",
    items: [
      "Budgeting and forecasting",
      "Cash flow management",
      "Business model review & pricing strategy",
      "Funding and capital structure",
      "Risk management and internal control design",
      "Growth and expansion planning",
      "Building and structuring your finance team",
    ],
    gradient: "from-primary/10 to-secondary/10",
  },
  {
    icon: TrendingUp,
    title: "Operational Finance",
    subtitle: "Keeping daily finance operations efficient and compliant",
    items: [
      "Invoicing, revenue and debtor management",
      "Vendor vetting, payments and creditors",
      "Accounting and chart of accounts advice",
      "Cost management and expense control",
      "Payroll & employee benefits",
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
      "Accounting systems advice (Xero, Sage, QuickBooks, etc.)",
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
      "Scenario planning & decision support",
      "Valuation, succession & investor readiness",
      "Coaching for finance leaders and founders",
    ],
    gradient: "from-secondary/10 to-primary/10",
  },
];

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title);
    setHoveredCard(null); // Clear hover state on click for mobile
  };

  const isCardActive = (title: string) => {
    return expandedCard === title || hoveredCard === title;
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What We Offer
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We provide guidance and advice to assist you in ensuring the below areas within your finance departments are being managed optimally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => {
            const isActive = isCardActive(service.title);
            const isExpanded = expandedCard === service.title;

            return (
              <div
                key={service.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card
                  className={`relative overflow-hidden transition-all duration-500 border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] backdrop-blur-sm cursor-pointer ${
                    isActive
                      ? 'shadow-[0_20px_60px_hsl(210_85%_20%_/_0.4)] scale-[1.02] border-primary/50 z-10'
                      : hoveredCard && hoveredCard !== service.title
                      ? 'opacity-60'
                      : 'hover:shadow-[var(--shadow-hover)]'
                  }`}
                  onMouseEnter={() => setHoveredCard(service.title)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleCardClick(service.title)}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`} />

                  <CardHeader className="relative z-10 pb-6">
                    <div className="flex flex-col items-center text-center">
                      <div className={`mb-6 inline-flex items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg transition-all duration-500 ${
                        isActive ? 'w-24 h-24 shadow-[var(--shadow-glow)]' : 'w-20 h-20'
                      }`}>
                        <service.icon className={`transition-all duration-500 ${
                          isActive ? 'h-12 w-12' : 'h-10 w-10'
                        }`} strokeWidth={2.5} />
                      </div>

                      <CardTitle className="text-2xl md:text-3xl mb-3 text-white transition-colors">
                        {service.title}
                      </CardTitle>

                      <p className="text-base text-white/70 leading-relaxed mb-4">
                        {service.subtitle}
                      </p>

                      {/* Hint text - only show when not expanded */}
                      {!isExpanded && (
                        <div className="flex items-center gap-2 text-sm text-accent/80 transition-opacity duration-300">
                          <span className="hidden md:inline">Hover to explore</span>
                          <span className="md:hidden">Tap to explore</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${
                            isActive ? 'rotate-180' : ''
                          }`} />
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  {/* Expandable content */}
                  <div className={`relative z-10 transition-all duration-500 overflow-hidden ${
                    isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <CardContent className="pt-0 pb-6">
                      <ul className="space-y-3">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                            <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                            <span className="text-white/90 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Referral note */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed italic">
            If your needs fall outside our scope, we will connect you with a trusted service provider or firm from our network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
