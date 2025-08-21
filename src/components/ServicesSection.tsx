import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ShieldCheck, Anchor, Info, ClipboardCheck } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    icon: Building2,
    title: "Structural Engineering",
    description: "We deliver safe and innovative solutions for residential, commercial, and industrial projects, ensuring strength, durability, and cost-effectiveness."
  },
  {
    icon: Anchor,
    title: "Foundation & Sub-Structure Engineering",
    description: "We design shallow and deep foundations, retaining walls, and basements to ensure stability and long-term reliability."
  },
  {
    icon: ShieldCheck,
    title: "Structural Assessments & Strengthening",
    description: "We assess existing buildings for safety and provide retrofitting and strengthening to extend their lifespan."
  },
  {
    icon: ClipboardCheck,
    title: "Construction Supervision & Quality Control",
    description: "Our engineers handle site inspections, reinforcement checks, and compliance reviews to maintain quality and safety."
  },
  {
    icon: Info,
    title: "Consultancy & Advisory",
    description: "We offer feasibility studies, cost-effective solutions, and support with approvals to guide projects smoothly."
  }
];

const ServicesSection = () => {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-items-center">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2  backdrop-blur-sm border-0 shadow-lg group overflow-hidden relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center relative z-10">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-full w-fit group-hover:from-primary/20 group-hover:to-primary-glow/20 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="h-10 w-10 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-gray-800 group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Animated bottom border */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
                       style={{ transitionDelay: `${index * 200 + 800}ms` }}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;