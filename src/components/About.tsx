import { Award, BookOpen, Target, Users, User } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Award,
    title: "CA(SA) Qualified",
    description: "Chartered Accountant registered with SAICA",
  },
  {
    icon: BookOpen,
    title: "10+ Years Experience",
    description: "Extensive experience across industries and business stages",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on practical solutions that drive real outcomes",
  },
  {
    icon: Users,
    title: "50+ Clients Served",
    description: "Trusted by startups, SMEs, and established businesses",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Meet the Founders
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content - Left side */}
            <div className="space-y-6 animate-fade-in order-2 lg:order-1">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello there! Burger and Anne van Rooyen here. We co-founded Phone-a-CA in 2025 with a simple vision:
                  to make high-quality organisational finance advisory services accessible at a competitive price.
                </p>

                <p>
                  We believe that entrepreneurs, team leaders, pastors, and principals make better decisions—and
                  build healthier organisations—when they have access to trusted Chartered Accountants who
                  understand numbers, businesses, and people.
                </p>

                <p>
                  Phone-a-CA exists to support you with practical, professional finance guidance, so you can
                  grow what you're building with confidence.
                </p>

                <p>
                  This is just the beginning. We're excited to journey with South Africans, Africans, and every
                  nation we encounter, as we partner with leaders to build organisations that contribute to a
                  better world.
                </p>

                <p className="text-xl font-semibold text-foreground pt-2">
                  Chat soon,<br />
                  Burger and Anne
                </p>
              </div>

              {/* Founder Action Buttons - directly below text */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Burger HoverCard */}
                <HoverCard openDelay={200}>
                  <HoverCardTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-base px-8 py-6 rounded-xl font-semibold hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <User className="mr-2 h-5 w-5" />
                      About Burger
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 sm:w-96" side="top" align="center">
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-1">Burger van Rooyen</h4>
                        <p className="text-sm font-semibold text-primary">Qualified Chartered Accountant</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-2 text-sm">Experience:</h5>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>External auditing (financial services, retail and manufacturing)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>General financial management</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                {/* Anne HoverCard */}
                <HoverCard openDelay={200}>
                  <HoverCardTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-base px-8 py-6 rounded-xl font-semibold hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <User className="mr-2 h-5 w-5" />
                      About Anne
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 sm:w-96" side="top" align="center">
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-1">Anne van Rooyen</h4>
                        <p className="text-sm font-semibold text-primary">Industrial Engineer</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-2 text-sm">Experience:</h5>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Data management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Product management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Information systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            <span>Startup consulting</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>

            {/* Founders Photo - Right side */}
            <div className="animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.1s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
                <img
                  src="/founders-photo.jpg"
                  alt="Burger and Anne van Rooyen - Founders of Phone-a-CA"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default About;
