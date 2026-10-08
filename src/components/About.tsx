import { Download, Award, Code, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ceoPic from "@/assets/ceo-profile.jpg";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Modern tech stack & best practices"
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "ROI-focused strategies"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "50+ successful projects"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 animate-glow-pulse" />
              <img
                src={ceoPic}
                alt="Rashid Azam — Web Developer, SEO Expert and Digital Marketing Specialist"
                loading="lazy"
                className="relative rounded-2xl shadow-xl w-full h-auto animate-scale-in"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-primary font-semibold">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Building Digital Success Stories
              </h2>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Hi, I'm <strong className="text-foreground">Rashid Azam</strong> — a{" "}
                <strong className="text-foreground">Web Developer, SEO Expert and
                Digital Marketing Specialist</strong> based in Pakistan, working with
                clients worldwide.
              </p>
              <p>
                I build fast, accessible websites with{" "}
                <strong className="text-foreground">WordPress and modern web stacks</strong>,
                then make them earn traffic through technical SEO, on-page optimisation
                and content that answers real search intent.
              </p>
              <p>
                I also design <strong className="text-foreground">AI and automation
                workflows</strong> that cut repetitive work — so the systems I deliver keep
                producing results long after launch.
              </p>
              <p>
                I believe in <strong className="text-foreground">skills over grades</strong>:
                what matters is{" "}
                <strong className="text-foreground">delivering results, not just promises</strong>.
              </p>
            </div>


            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item) => (
                <Card
                  key={item.title}
                  className="p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>

            <Button size="lg" className="group" asChild>
              <a
                href="https://docs.google.com/document/d/1-6c1kQtiV3RYTxRV8-kyHP53yP06giKs/edit?usp=drive_link&ouid=108652776299425305638&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download My Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
