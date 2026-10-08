import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-semibold mb-2">Insights & Knowledge</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learn from My Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Articles, guides, and insights to help you succeed in the digital world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((blog, index) => (
            <Card
              key={blog.id}
              className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Link to={`/blog/${blog.id}`}>
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </Link>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blog.readTime}
                  </div>
                </div>
                <Link to={`/blog/${blog.id}`}>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {blog.excerpt}
                </p>
                <Button variant="ghost" asChild className="group/btn p-0 h-auto">
                  <Link to={`/blog/${blog.id}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
