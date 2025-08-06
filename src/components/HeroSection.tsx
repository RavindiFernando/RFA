import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-engineering.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Engineering Excellence" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Engineering
              <span className="block text-4xl lg:text-5xl text-primary-foreground/90">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ranmal Fernando Associates delivers innovative engineering solutions 
              for complex infrastructure projects. With decades of expertise, we 
              transform ambitious visions into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/projects">
                  View Our Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">Get Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
              <Award className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-2">25+</h3>
              <p className="text-primary-foreground/80">Years of Excellence</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
              <Building className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-2">200+</h3>
              <p className="text-primary-foreground/80">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white sm:col-span-2">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
              <p className="text-primary-foreground/80">
                Certified engineers and project managers committed to excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;