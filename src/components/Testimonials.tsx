import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import client1 from "@/assets/testimonials/client1.jpg";
import client2 from "@/assets/testimonials/client2.jpg";
import client3 from "@/assets/testimonials/client3.jpg";
import client4 from "@/assets/testimonials/client4.jpg";
import client5 from "@/assets/testimonials/client5.jpg";
import client6 from "@/assets/testimonials/client6.jpg";
import client7 from "@/assets/testimonials/client7.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Entrepreneur",
      country: "Pakistan",
      image: client1,
      rating: 5,
      text: "Rashid transformed my website into a professional online store. Sales doubled within 3 months."
    },
    {
      name: "Sarah Williams",
      role: "YouTuber",
      country: "USA",
      image: client2,
      rating: 5,
      text: "His YouTube automation service was a game changer. I hit 10K subs faster than I imagined."
    },
    {
      name: "Ali Raza",
      role: "Startup Owner",
      country: "UAE",
      image: client3,
      rating: 5,
      text: "Very reliable and skilled. He designed my corporate site with modern animations."
    },
    {
      name: "Emily Johnson",
      role: "Blogger",
      country: "UK",
      image: client4,
      rating: 5,
      text: "His SEO writing helped my blogs rank on the first page of Google."
    },
    {
      name: "Bilal Ahmed",
      role: "Shopify Store Owner",
      country: "KSA",
      image: client5,
      rating: 5,
      text: "The Shopify store Rashid built for me is smooth, secure, and already generating sales."
    },
    {
      name: "Jessica Brown",
      role: "Digital Creator",
      country: "Canada",
      image: client6,
      rating: 5,
      text: "Professional and creative. My personal brand site looks outclass."
    },
    {
      name: "Omar Farooq",
      role: "NGO Director",
      country: "Qatar",
      image: client7,
      rating: 5,
      text: "He built us a donation website that truly represents our cause. Highly recommended."
    },
    {
      name: "David Chen",
      role: "Tech Startup CEO",
      country: "Singapore",
      image: client1,
      rating: 5,
      text: "Outstanding developer! Built our SaaS platform with incredible attention to detail."
    },
    {
      name: "Fatima Al-Rashid",
      role: "Fashion Brand Owner",
      country: "Kuwait",
      image: client2,
      rating: 5,
      text: "My e-commerce site looks stunning and sales have increased by 180% since launch."
    },
    {
      name: "James Miller",
      role: "Real Estate Agent",
      country: "Australia",
      image: client3,
      rating: 5,
      text: "The property listing website is modern, fast, and exactly what I needed for my business."
    },
    {
      name: "Aisha Mohammed",
      role: "Life Coach",
      country: "UAE",
      image: client4,
      rating: 5,
      text: "My coaching website attracts clients daily. Rashid understood my vision perfectly."
    },
    {
      name: "Michael Brown",
      role: "Restaurant Owner",
      country: "USA",
      image: client5,
      rating: 5,
      text: "Online ordering system increased our revenue by 200%. Best investment ever!"
    },
    {
      name: "Layla Hassan",
      role: "Educational Platform",
      country: "Egypt",
      image: client6,
      rating: 5,
      text: "Our online learning platform is beautiful, user-friendly, and students love it."
    },
    {
      name: "Robert Taylor",
      role: "Fitness Trainer",
      country: "UK",
      image: client7,
      rating: 5,
      text: "My fitness website with booking system is perfect. Getting clients non-stop now."
    },
    {
      name: "Noor Abdullah",
      role: "Travel Agency Owner",
      country: "Bahrain",
      image: client1,
      rating: 5,
      text: "The travel booking website exceeded expectations. Bookings have tripled!"
    }
  ];

  const testimonialsCount = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsCount);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonialsCount]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const scrollPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-semibold mb-2">Client Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What My Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients from around the world have to say.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${currentIndex}-${index}`}
                className="hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 animate-slide-in-right"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover animate-scale-in"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} · {testimonial.country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full h-10 w-10 hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full h-10 w-10 hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
