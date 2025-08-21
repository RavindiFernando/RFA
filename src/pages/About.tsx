import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Star, Lightbulb, UserCheck  } from "lucide-react";
import officeImage from "@/assets/office-building.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Ensuring every design and project prioritizes the safety of people and structures."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Delivering honest, transparent, and ethical engineering solutions."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Commitment to high standards in design, execution, and supervision."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Applying modern techniques and creative solutions to solve structural challenges."
    },
    {
      icon: UserCheck,
      title: "Client Focus",
      description: "Placing the needs and goals of our clients at the forefront of every project."
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "Professional Engineers License",
    "LEED Accredited Professional",
    "Project Management Professional (PMP)",
    "Structural Engineering Certification"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-primary">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Ranmal Fernando Associates, we provide reliable and innovative structural engineering solutions, guiding projects from concept to completion with safety, efficiency, and durability at the core.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ranmal Fernando Associates (RFA) was founded in February 2007 by Eng.Ranmal Fernando, following a distinguished 17-year career as a site engineer, project engineer at State Engineering Corporation, and Chief Engineer at Kelsey Developments Pvt Ltd. RFA stands as a premier structural and civil engineering firm specializing in structural designs, project management, retrofitting works for existing buildings, and value engineering
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, RFA has grown significantly, undertaking numerous high-profile projects and expanding its team of experts. We collaborate closely with clients, architects, MEP engineers, and quantity surveyors to achieve comprehensive project outcomes. Our extensive portfolio includes diverse sectors such as commercial buildings, mixed developments, housing schemes, apartments, hospitals, academic buildings, and large-scale factories.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">2007</h3>
                  <p className="text-muted-foreground">Founded</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary">300+</h3>
                  <p className="text-muted-foreground">Projects</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={officeImage} 
                alt="Modern Office Building" 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-primary">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl font-bold text-primary">Certifications & Accreditations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and professional standards is validated by industry certifications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;