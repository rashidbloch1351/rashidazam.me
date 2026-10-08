import { Helmet } from "react-helmet-async";
import Blog from "@/components/Blog";

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Blog | Web Development, SEO & Digital Marketing Insights | Rashid Azam</title>
        <meta name="description" content="Read expert articles on web development, SEO optimization, AI automation, digital marketing strategies, and YouTube growth by M. Rashid Azam." />
        <link rel="canonical" href="https://rashidazam.me/blog" />
        <meta property="og:title" content="Blog | Digital Marketing & Web Development Insights" />
        <meta property="og:description" content="Expert articles on web development, SEO, AI automation, and digital marketing strategies." />
        <meta property="og:url" content="https://rashidazam.me/blog" />
      </Helmet>
      <Blog />
    </div>
  );
};

export default BlogPage;
