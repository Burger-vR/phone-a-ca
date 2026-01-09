import { Home, Users, ListChecks, Briefcase, Award, Phone, MoreVertical, User, DollarSign } from "lucide-react";

const navigationItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "who-we-help", label: "Who We Help", icon: Users },
  { id: "how-it-works", label: "How It Works", icon: ListChecks },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "why-choose", label: "Why Choose Us", icon: Award },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "footer", label: "Contact", icon: Phone },
];

const NavigationSidebar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 group">
      {/* Hover trigger area */}
      <div className="flex items-center">
        {/* Collapsed button indicator */}
        <div className="w-8 h-16 bg-accent rounded-r-lg shadow-lg group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
          <MoreVertical className="w-6 h-6 text-accent-foreground" strokeWidth={2.5} />
        </div>

        {/* Expanded sidebar */}
        <div className="absolute left-0 bg-background/95 backdrop-blur-md border border-border/50 rounded-r-2xl shadow-2xl py-4 px-2 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-xl hover:bg-primary/10 hover:text-primary transition-colors duration-200 group/item"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover/item:text-primary transition-colors" />
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationSidebar;
