import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Dr. Samantha Perera",
    position: "Project Director, Urban Development Authority",
    content: "RFA's structural engineering expertise turned our vision into reality. Their innovative solutions and precision exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Johnson",
    position: "CEO, Construction Dynamics Ltd",
    content: "Working with Ranmal Fernando Associates has been outstanding. Their technical knowledge, reliability, and project management skills are truly world-class.",
    rating: 5
  },
  {
    name: "Priya Wijesinghe",
    position: "Municipal Commissioner",
    content: "The factory project delivered by RFA is a landmark of engineering excellence. Their professional and innovative approach stood out from start to finish.",
    rating: 5
  }
];



const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white/5 to-primary2/10">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-primary">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our valued clients who have experienced our commitment to engineering excellence.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-700 hover:scale-105 group ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4 group-hover:text-primary/30 transition-colors duration-300" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;