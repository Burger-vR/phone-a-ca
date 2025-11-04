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
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What We Offer
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive financial expertise across all aspects of your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#222222]"
            >
              <CardHeader>
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl mb-2 text-white">{service.title}</CardTitle>
                <p className="text-sm text-white/60">{service.subtitle}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="text-secondary mt-1">✓</span>
                      <span className="text-white/80">{item}</span>
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
