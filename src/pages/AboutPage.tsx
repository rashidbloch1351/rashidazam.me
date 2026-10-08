import { Helmet } from "react-helmet-async";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>About Rashid Azam | Web Developer & SEO Expert</title>
        <meta name="description" content="Learn about Rashid Azam — web developer, SEO expert and digital marketing specialist building WordPress sites, technical SEO programmes and AI automation. 50+ projects delivered." />
        <link rel="canonical" href="https://rashidazam.me/about" />
        <meta property="og:title" content="About Rashid Azam | Web Developer & SEO Expert" />
        <meta property="og:description" content="Web Developer, SEO Expert and Digital Marketing Specialist. 50+ projects delivered worldwide." />
        <meta property="og:url" content="https://rashidazam.me/about" />
      </Helmet>
      <About />
    </div>
  );
};

export default AboutPage;
