import { Building2, Rocket, Heart, Users } from "lucide-react";

const audiences = [
  { icon: Building2, title: "SMEs and startups" },
  { icon: Heart, title: "Non-profits and schools" },
  { icon: Rocket, title: "Business owners and founders" },
  { icon: Users, title: "Finance managers and team leads" },
];

const WhoWeHelp = () => {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Who We Help
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Trusted financial expertise for businesses at every stage
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group p-6 rounded-2xl bg-[#2a2a2a] border border-white/10 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                <audience.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-white">{audience.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
