import { Helmet } from "react-helmet-async";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Portfolio & Projects | E-Commerce, SEO, AI Apps | Rashid Azam</title>
        <meta name="description" content="Explore 50+ projects by M. Rashid Azam including e-commerce stores, SEO projects, YouTube automation channels, corporate websites, and AI-powered applications." />
        <link rel="canonical" href="https://rashidazam.me/projects" />
        <meta property="og:title" content="Portfolio & Projects | Rashid Azam" />
        <meta property="og:description" content="Explore 50+ projects: e-commerce stores, SEO, YouTube automation, corporate websites, and AI apps." />
        <meta property="og:url" content="https://rashidazam.me/projects" />
      </Helmet>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
