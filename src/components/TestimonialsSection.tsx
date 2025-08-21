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
    name: "Suresh Wickramasinghe",
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-br from-white/5 to-primary2/10">
      <div className="container mx-auto px-4">
        <div className={`text-center space-y-4 mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Hear from our valued clients who have experienced our commitment to engineering excellence.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
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
              <CardContent className="p-6 md:p-8">
                <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary/20 mb-4 group-hover:text-primary/30 transition-colors duration-300" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <h4 className="text-sm md:text-base font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300">{testimonial.name}</h4>
                  {/* <p className="text-xs md:text-sm text-muted-foreground">{testimonial.position}</p> */}
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