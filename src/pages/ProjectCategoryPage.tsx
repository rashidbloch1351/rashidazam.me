import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projectCategories } from "@/data/projectsData";

const ProjectCategoryPage = () => {
  const { slug } = useParams();
  const category = projectCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Helmet>
          <title>Category Not Found | Rashid Azam</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>{category.title} | Portfolio | Rashid Azam</title>
        <meta name="description" content={category.description} />
        <link rel="canonical" href={`https://rashidazam.me/projects/${slug}`} />
        <meta property="og:title" content={`${category.title} | Rashid Azam Portfolio`} />
        <meta property="og:description" content={category.description} />
        <meta property="og:url" content={`https://rashidazam.me/projects/${slug}`} />
      </Helmet>

      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {category.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              {category.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in-up">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {category.projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.url && (
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <Button size="sm" variant="secondary" className="w-full" asChild>
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit Live Site
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                Detailed case studies coming soon for this category.
              </p>
              <Button asChild>
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectCategoryPage;
