import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import bridgeImage from "@/assets/bridge-project.jpg";
import officeImage from "@/assets/office-building.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kandy-Colombo Highway Bridge",
      category: "Infrastructure",
      location: "Central Province, Sri Lanka",
      year: "2023",
      status: "Completed",
      description: "A 850-meter cable-stayed bridge connecting major urban centers, featuring innovative seismic-resistant design and sustainable construction practices.",
      image: bridgeImage,
      details: ["Structural Engineering", "Environmental Impact Assessment", "Project Management"]
    },
    {
      id: 2,
      title: "Colombo Financial District Tower",
      category: "Commercial",
      location: "Colombo, Sri Lanka",
      year: "2024",
      status: "In Progress",
      description: "A 45-story mixed-use tower featuring advanced structural systems, green building technologies, and innovative facade engineering.",
      image: officeImage,
      details: ["High-rise Structural Design", "MEP Engineering", "Sustainability Consulting"]
    },
    {
      id: 3,
      title: "Southern Expressway Extension",
      category: "Transportation",
      location: "Southern Province, Sri Lanka",
      year: "2022",
      status: "Completed",
      description: "A 75-kilometer expressway extension improving connectivity to southern regions with advanced drainage and slope stabilization systems.",
      image: bridgeImage,
      details: ["Highway Design", "Drainage Engineering", "Geotechnical Analysis"]
    },
    {
      id: 4,
      title: "University Research Complex",
      category: "Educational",
      location: "Peradeniya, Sri Lanka",
      year: "2024",
      status: "Design Phase",
      description: "A state-of-the-art research facility featuring laboratories, lecture halls, and sustainable design elements for a leading university.",
      image: officeImage,
      details: ["Institutional Design", "Laboratory Planning", "LEED Certification"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Design Phase":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-primary">Our Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful engineering projects that demonstrate our 
              commitment to innovation, quality, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <h3 className="text-4xl font-bold mb-2">200+</h3>
              <p className="text-primary-foreground/80">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">$2.5B</h3>
              <p className="text-primary-foreground/80">Total Project Value</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15</h3>
              <p className="text-primary-foreground/80">Countries Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-primary-foreground/80">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-primary group-hover:text-primary/80 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.details.map((detail, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our engineering expertise can bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;