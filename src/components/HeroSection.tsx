import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-engineering.jpg";
import bridgeProject from "@/assets/bridge-project.jpg";
import officeBuilding from "@/assets/office-building.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10"></div>
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

          {/* Project Images Gallery */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src={bridgeProject} 
                    alt="Bridge Engineering Project" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium">Infrastructure</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/images/services-bg.webp" 
                    alt="Engineering Services" 
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-medium">Services</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src={officeBuilding} 
                    alt="Commercial Building Project" 
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-xs font-medium">Commercial</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/images/contact-bg.jpg" 
                    alt="Engineering Consultation" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium">Consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;