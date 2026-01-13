import { Building2, Rocket, Heart, Users } from "lucide-react";

const audiences = [
  { icon: Building2, title: "Business owners and SMEs", color: "from-primary to-secondary" },
  { icon: Rocket, title: "Founders and startups", color: "from-primary to-secondary" },
  { icon: Heart, title: "Non-profits & institutions", color: "from-primary to-secondary" },
  { icon: Users, title: "Finance managers and team leads", color: "from-primary to-secondary" },
];

const WhoWeHelp = () => {
  return (
    <section id="who-we-help" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Who We Help
          </h2>
        </div>

        <ul className="max-w-2xl mx-auto space-y-6">
          {audiences.map((audience, index) => (
            <li
              key={audience.title}
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${audience.color} text-white shadow-lg`}>
                <audience.icon className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <span className="text-lg md:text-xl font-semibold text-foreground">
                {audience.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default WhoWeHelp;
