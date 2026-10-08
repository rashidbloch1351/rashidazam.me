import { useEffect, useRef, useState } from "react";
import { Rocket, Video, FileText, Globe, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    { icon: Rocket, value: 50, suffix: "+", label: "Projects Delivered" },
    { icon: Video, value: 10, suffix: "+", label: "YouTube Channels Automated" },
    { icon: FileText, value: 100, suffix: "+", label: "SEO Articles Written" },
    { icon: Globe, value: 5, suffix: "+", label: "Countries Served" },
    { icon: Clock, value: 3, suffix: "+", label: "Years of Experience" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span className="text-5xl md:text-6xl font-bold text-primary">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-semibold mb-2">Achievements</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I've Achieved So Far
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect dedication, expertise, and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.label}
              className="text-center hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <Counter end={achievement.value} suffix={achievement.suffix} />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {achievement.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
