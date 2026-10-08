import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SeoServices from "@/components/SeoServices";
import Projects from "@/components/Projects";
import Vision from "@/components/Vision";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Rashid Azam | Web Developer, SEO Expert & Digital Marketing</title>
        <meta name="description" content="Rashid Azam — Web Developer, SEO Expert and Digital Marketing Specialist. WordPress builds, technical SEO, AI automation and marketing that grow your business online." />
        <link rel="canonical" href="https://rashidazam.me/" />
      </Helmet>
      <Hero />
      <Services />
      <SeoServices />
      <Projects />
      <Vision />
      <Achievements />
      <Testimonials />
    </div>
  );
};

export default Home;
