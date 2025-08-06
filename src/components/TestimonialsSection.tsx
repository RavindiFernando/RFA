import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Samantha Perera",
    position: "Project Director, Urban Development Authority",
    content: "RFA's expertise in infrastructure design transformed our vision into reality. Their attention to detail and innovative solutions exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Johnson",
    position: "CEO, Construction Dynamics Ltd",
    content: "Working with Ranmal Fernando Associates has been exceptional. Their structural engineering expertise and project management skills are world-class.",
    rating: 5
  },
  {
    name: "Priya Wijesinghe",
    position: "Municipal Commissioner",
    content: "The bridge project delivered by RFA stands as a testament to their engineering excellence. Professional, reliable, and innovative approach throughout.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-primary">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from industry leaders who trust us with their most challenging engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
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