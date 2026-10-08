import { ArrowRight, Mail, Briefcase, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SocialIcons from "@/components/SocialIcons";
import profilePic from "@/assets/profile-hero.jpg";

const Hero = () => {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "100%", label: "Client Focused" },
  ];

  return (
    <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-24 pb-16">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,hsl(var(--primary)/0.14),transparent_55%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(var(--accent)/0.12),transparent_55%)] -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Available for freelance & long-term projects
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                <span className="text-primary">Rashid Azam</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Web Developer <span className="text-primary">•</span> SEO Expert{" "}
                <span className="text-primary">•</span> Digital Marketing Specialist
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I build fast, search-optimised websites and automation systems that help
              businesses rank higher, convert better, and run leaner — with WordPress,
              modern web stacks, SEO and AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="group shadow-lg shadow-primary/20">
                <Link to="/contact">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Work With Me
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="group backdrop-blur-md">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild className="group">
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>

            <SocialIcons />

            {/* Stats */}
            <dl className="grid grid-cols-3 gap-4 max-w-lg pt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-md p-4 text-center"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-2xl md:text-3xl font-bold text-primary">
                      {stat.value}
                    </span>
                    <span className="block text-xs md:text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative w-80 h-96 md:w-[26rem] md:h-[32rem] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-3xl opacity-25 animate-glow-pulse" />
              <img
                src={profilePic}
                alt="Rashid Azam — Web Developer, SEO Expert and Digital Marketing Specialist"
                width={832}
                height={1024}
                decoding="async"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
