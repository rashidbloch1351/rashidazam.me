import { Helmet } from "react-helmet-async";
import { profileUrls } from "@/data/socialLinks";

const SchemaMarkup = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://rashidazam.me/#person",
    "name": "Rashid Azam",
    "alternateName": ["M. Rashid Azam", "Muhammad Rashid Azam", "M Rashid Azam"],
    "jobTitle": "Web Developer, SEO Expert & Digital Marketing Specialist",
    "description":
      "Rashid Azam is a web developer, SEO expert and digital marketing specialist from Pakistan, building fast WordPress and modern websites, technical SEO programmes and AI automation systems.",
    "url": "https://rashidazam.me",
    "image": "https://rashidazam.me/og-image.png",
    "nationality": "Pakistani",
    "sameAs": profileUrls,
    "knowsAbout": [
      "Web Development",
      "Search Engine Optimization",
      "Technical SEO",
      "Local SEO",
      "WordPress",
      "WooCommerce",
      "AI Automation",
      "Digital Marketing",
      "Content Writing",
      "Google Ads",
      "Meta Ads"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Web Developer, SEO Expert & Digital Marketing Specialist",
      "skills":
        "Web Development, WordPress, Technical SEO, On-Page SEO, Local SEO, AI Automation, Digital Marketing, Content Writing"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rashid Azam",
    "alternateName": "Rashid Azam Official Website",
    "url": "https://rashidazam.me",
    "description":
      "Official website of Rashid Azam — Web Developer, SEO Expert and Digital Marketing Specialist.",
    "publisher": {
      "@type": "Person",
      "@id": "https://rashidazam.me/#person"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://rashidazam.me/#service",
    "name": "Rashid Azam — Web Development & SEO Services",
    "url": "https://rashidazam.me/services",
    "provider": { "@type": "Person", "@id": "https://rashidazam.me/#person" },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        "Web Development",
        "Technical SEO",
        "On-Page SEO",
        "Local SEO",
        "WordPress SEO",
        "SEO Audits",
        "AI & Automation",
        "Digital Marketing"
      ].map((name) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": name }
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rashidazam.me/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://rashidazam.me/about" },
      { "@type": "ListItem", "position": 3, "name": "Services", "item": "https://rashidazam.me/services" },
      { "@type": "ListItem", "position": 4, "name": "Portfolio", "item": "https://rashidazam.me/projects" },
      { "@type": "ListItem", "position": 5, "name": "Blog", "item": "https://rashidazam.me/blog" },
      { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://rashidazam.me/contact" }
    ]
  };

  return (
    <Helmet>
      <title>Rashid Azam | Web Developer, SEO Expert & Digital Marketing Specialist</title>
      <meta
        name="description"
        content="Rashid Azam — Web Developer, SEO Expert and Digital Marketing Specialist. WordPress builds, technical SEO, AI automation and marketing that grow your business online."
      />
      <meta
        name="keywords"
        content="Rashid Azam, M Rashid Azam, Muhammad Rashid Azam, Rashid Azam web developer, Rashid Azam SEO expert, web developer Pakistan, SEO expert Pakistan, WordPress developer, AI automation, digital marketing specialist"
      />
      <meta property="og:title" content="Rashid Azam | Web Developer • SEO Expert • Digital Marketing Specialist" />
      <meta
        property="og:description"
        content="Web development, technical SEO, WordPress and AI automation that help businesses rank higher and convert better."
      />
      <meta property="og:image" content="https://rashidazam.me/og-image.png" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://rashidazam.me" />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(professionalServiceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};

export default SchemaMarkup;
