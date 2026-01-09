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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.color} text-white shadow-lg group-hover:scale-110 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300`}>
                  <audience.icon className="h-8 w-8" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {audience.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default WhoWeHelp;
