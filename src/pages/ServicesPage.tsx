import { Helmet } from "react-helmet-async";
import Services from "@/components/Services";
import SeoServices from "@/components/SeoServices";

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Services | Web Development, SEO, AI Automation | Rashid Azam</title>
        <meta name="description" content="Professional web development, SEO optimization, AI automation, YouTube automation, digital marketing, and content writing services by M. Rashid Azam." />
        <link rel="canonical" href="https://rashidazam.me/services" />
        <meta property="og:title" content="Services | Web Development, SEO & AI Automation" />
        <meta property="og:description" content="Comprehensive digital solutions: web development, SEO, AI automation, YouTube automation, digital marketing, and content writing." />
        <meta property="og:url" content="https://rashidazam.me/services" />
      </Helmet>
      <Services />
      <SeoServices />
    </div>
  );
};

export default ServicesPage;
