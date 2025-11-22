import { Building2, Rocket, Heart, Users } from "lucide-react";

const audiences = [
  { icon: Building2, title: "SMEs and startups", color: "from-primary to-secondary" },
  { icon: Heart, title: "Non-profits and schools", color: "from-accent to-accent/70" },
  { icon: Rocket, title: "Business owners and founders", color: "from-secondary to-primary" },
  { icon: Users, title: "Finance managers and team leads", color: "from-primary to-accent" },
];

const WhoWeHelp = () => {
  return (
    <section id="who-we-help" className="relative py-24 md:py-32 bg-[#1a1a1a] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-secondary tracking-wider uppercase">Our Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Who We Help
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Trusted financial expertise for businesses at every stage
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] border border-white/10 hover:border-white/20 hover:shadow-[var(--shadow-elegant)] transition-all duration-500 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.color} text-white shadow-lg group-hover:scale-110 group-hover:shadow-[var(--shadow-glow)] transition-all duration-300`}>
                  <audience.icon className="h-8 w-8" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-white transition-colors">
                  {audience.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
