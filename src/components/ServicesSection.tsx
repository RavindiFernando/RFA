import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hammer, Route, Cog } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Structural Engineering",
    description: "Comprehensive structural design and analysis for buildings, bridges, and infrastructure projects with cutting-edge technology."
  },
  {
    icon: Route,
    title: "Civil Engineering",
    description: "Road design, drainage systems, and urban planning solutions that enhance community development and sustainability."
  },
  {
    icon: Hammer,
    title: "Infrastructure Development",
    description: "Large-scale infrastructure projects including transportation networks, utilities, and public facilities."
  },
  {
    icon: Cog,
    title: "Project Management",
    description: "End-to-end project management services ensuring timely delivery, budget control, and quality assurance."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;