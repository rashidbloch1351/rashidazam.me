import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projectCategories } from "@/data/projectsData";

const Projects = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-semibold mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects That Speak for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results for real clients. Here's a selection of projects I'm proud to have delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCategories.map((category, index) => (
            <Card
              key={category.slug}
              className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Link to={`/projects/${category.slug}`}>
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Button size="sm" variant="secondary" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                </div>
              </Link>
              <CardContent className="p-6">
                <Link to={`/projects/${category.slug}`}>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-4 text-sm">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
