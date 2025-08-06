import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Eye } from "lucide-react";
import officeImage from "@/assets/office-building.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in every project, delivering solutions that exceed expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients and stakeholders to achieve shared goals and sustainable outcomes."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing cutting-edge technology and methodologies to solve complex engineering challenges."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Looking ahead to create infrastructure that serves communities for generations to come."
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
            <h1 className="text-5xl font-bold text-primary">About Ranmal Fernando Associates</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to transform the engineering landscape, RFA has been at the 
              forefront of innovative infrastructure development for over two decades.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide innovative, sustainable, and cost-effective engineering solutions 
                  that enhance the quality of life in communities while setting new standards 
                  for professional excellence in the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading engineering consultancy firm in the region, recognized 
                  for our technical expertise, innovative solutions, and positive impact on 
                  infrastructure development and community growth.
                </p>
              </CardContent>
            </Card>
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