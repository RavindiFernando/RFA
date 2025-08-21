import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ShieldCheck, Anchor, Info, ClipboardCheck } from "lucide-react";

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
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-items-center">
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