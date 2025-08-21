import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Eye } from "lucide-react";
import officeImage from "@/assets/office-building.jpg";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
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
      <section
        className="relative py-32 bg-gradient-to-br from-primary/10 to-accent/5"
        style={{
          backgroundImage: "url('/images/services-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-white">Our Servies</h1>
        <p className="text-xl text-neutral-100 max-w-3xl mx-auto leading-relaxed">
          At Ranmal Fernando Associates, we provide reliable structural engineering solutions that ensure every project is safe, efficient, and built to last.
        </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </section>

    <ServicesSection />

      

      

      

      <Footer />
    </div>
  );
};

export default Services;