import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Helmet>
          <title>Blog Post Not Found | Rashid Azam</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>{post.title} | Blog | Rashid Azam</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://rashidazam.me/blog/${id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://rashidazam.me/blog/${id}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-[400px] object-cover rounded-xl shadow-2xl animate-fade-in-up animation-delay-200"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <p className="lead text-xl text-muted-foreground mb-8">
              {post.content.introduction}
            </p>

            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.imageAlt || section.heading}
                    loading="lazy"
                    className="w-full rounded-xl shadow-lg mt-6 object-cover"
                  />
                )}
              </div>
            ))}

            <div className="mt-12 p-6 bg-secondary/30 rounded-xl border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
              <p className="text-muted-foreground leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Button variant="ghost" asChild className="group/btn p-0 h-auto">
                        <Link to={`/blog/${relatedPost.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
