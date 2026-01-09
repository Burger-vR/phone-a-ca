import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navigationItems = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "how-it-works", label: "How It Works" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
];

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Phone-a-CA
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection("footer")}
              >
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border/50">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-foreground hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-2 shadow-lg"
                onClick={() => {
                  scrollToSection("footer");
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-16" />
    </>
  );
};

export default NavigationBar;
