import { Code, Video, TrendingUp, PenTool, Search, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Fast, responsive, conversion-focused websites built with modern technologies for speed, security, and scalability.",
      features: ["Custom Websites", "Landing Pages", "E-Commerce", "Web Applications"]
    },
    {
      icon: Search,
      title: "SEO Expert Services",
      description: "Technical, on-page and local SEO that earns rankings — driven by keyword research, clean architecture, and real search intent.",
      features: ["Technical SEO", "On-Page SEO", "Local SEO", "SEO Audits"]
    },
    {
      icon: PenTool,
      title: "WordPress Development",
      description: "Custom WordPress and WooCommerce builds, theme tuning, and SEO-ready setups that are easy for you to manage.",
      features: ["Custom Themes", "WooCommerce", "Speed Optimization", "WordPress SEO"]
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "AI-powered tools and automated workflows that remove repetitive work, cut costs, and scale your operations.",
      features: ["AI Chatbots", "Workflow Automation", "AI Content Tools", "Smart Analytics"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable results across social media, Google Ads, and Meta Ads.",
      features: ["Social Media Marketing", "Google Ads", "Meta Ads", "Analytics & Reporting"]
    },
    {
      icon: Video,
      title: "Content & YouTube",
      description: "SEO-optimized content and full YouTube channel setup — from strategy and scripting to growth and monetization.",
      features: ["Blog & SEO Writing", "Copywriting", "Channel Setup", "Content Strategy"]
    }
  ];


  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-semibold mb-2">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How I Can Help You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to grow your business and establish your online presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
