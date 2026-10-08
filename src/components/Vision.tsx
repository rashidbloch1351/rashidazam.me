import { Target, Lightbulb, TrendingUp } from "lucide-react";
import visionPhoto from "@/assets/vision-photo.png";

const Vision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.1),transparent_50%)] -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">My Vision</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 md:order-1">
              <div className="relative w-72 h-80 md:w-80 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-3xl opacity-20 animate-glow-pulse" />
                <img
                  src={visionPhoto}
                  alt="Rashid Azam — Empowering Digital Success"
                  loading="lazy"
                  className="relative rounded-2xl shadow-2xl w-full h-full object-cover border-4 border-primary/20"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                Empowering Digital Success
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  I believe that <span className="text-foreground font-semibold">skills matter more than grades</span>. 
                  Your CGPA doesn't define your potential—your dedication, creativity, and willingness to learn do.
                </p>
                
                <p className="leading-relaxed">
                  My mission is to help businesses and individuals transform their ideas into 
                  <span className="text-foreground font-semibold"> powerful digital solutions</span> that drive real results. 
                  Whether it's building a fast website, ranking it on Google, or automating the work behind it, 
                  I'm committed to delivering excellence.
                </p>
                
                <p className="leading-relaxed">
                  I work directly with every client — no handoffs, no account managers. That means{" "}
                  <span className="text-foreground font-semibold">clear communication</span> and
                  work that's built around your goals, one success story at a time.
                </p>
              </div>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <Lightbulb className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2 text-center">Innovation First</h3>
              <p className="text-sm text-muted-foreground text-center">
                Staying ahead with cutting-edge solutions
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <Target className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2 text-center">Results Driven</h3>
              <p className="text-sm text-muted-foreground text-center">
                Focused on delivering measurable outcomes
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border hover:border-primary/50 transition-colors">
              <TrendingUp className="h-8 w-8 text-primary mb-3 mx-auto" />
              <h3 className="font-semibold mb-2 text-center">Growth Mindset</h3>
              <p className="text-sm text-muted-foreground text-center">
                Continuous learning and improvement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
