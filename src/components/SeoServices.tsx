import { Search, FileSearch, MapPin, Layers, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const seoServices = [
  {
    icon: Layers,
    title: "Technical SEO",
    description:
      "Crawlability, indexation, Core Web Vitals, structured data and clean site architecture so search engines can read every page properly.",
  },
  {
    icon: FileSearch,
    title: "On-Page SEO",
    description:
      "Keyword mapping, titles and meta descriptions, heading structure, internal linking and content optimisation built around real search intent.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Google Business Profile optimisation, local landing pages, citations and review strategy to win customers in your city.",
  },
  {
    icon: Search,
    title: "WordPress SEO",
    description:
      "Theme and plugin tuning, schema setup, speed optimisation and clean permalinks for WordPress and WooCommerce sites.",
  },
  {
    icon: Gauge,
    title: "SEO Audits",
    description:
      "A full technical and content audit with prioritised, plain-English fixes you can action immediately — or have me implement for you.",
  },
];

const SeoServices = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1),transparent_60%)] -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-primary font-semibold mb-2">Premium SEO Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            SEO That Actually Moves Rankings
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete search programme — technical foundations, on-page depth, local
            visibility and ongoing audits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoServices.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </article>
          ))}

          <div className="rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-md p-7 flex flex-col justify-center gap-4 animate-fade-in-up">
            <h3 className="text-xl font-bold">Not sure where to start?</h3>
            <p className="text-muted-foreground">
              Send me your website and I'll tell you what's holding your rankings back.
            </p>
            <Button asChild className="w-full">
              <Link to="/contact">Request an SEO Audit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoServices;
