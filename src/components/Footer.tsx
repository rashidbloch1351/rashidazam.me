import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SocialIcons from "@/components/SocialIcons";
import logo from "@/assets/logo.png";

const Footer = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Development",
    "SEO Expert Services",
    "WordPress Development",
    "AI & Automation",
    "Digital Marketing",
  ];

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Rashid Azam" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-xl font-bold">Rashid Azam</span>
            </Link>
            <p className="text-muted-foreground">
              Web Developer • SEO Expert • Digital Marketing Specialist
            </p>
            <SocialIcons />
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold">Ready to Start?</h3>
            <p className="text-sm text-muted-foreground">
              Let's discuss your project and bring your vision to life.
            </p>
            <Button asChild className="w-full">
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Work With Me
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust Links */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rashid Azam | All Rights Reserved</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
