import { Helmet } from "react-helmet-async";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Contact Rashid Azam | Hire a Web Developer & SEO Expert</title>
        <meta name="description" content="Get in touch with Rashid Azam for web development, SEO, AI automation, and digital marketing services. Available on WhatsApp, Fiverr, and Freelancer." />
        <link rel="canonical" href="https://rashidazam.me/contact" />
        <meta property="og:title" content="Contact Rashid Azam | Hire a Web Developer" />
        <meta property="og:description" content="Get in touch for web development, SEO, and digital marketing services. Available on WhatsApp, Fiverr, and Freelancer." />
        <meta property="og:url" content="https://rashidazam.me/contact" />
      </Helmet>
      <Contact />
    </div>
  );
};

export default ContactPage;
