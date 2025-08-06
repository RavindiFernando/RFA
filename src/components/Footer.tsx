import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/logo.png" 
                alt="RFA Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold">Ranmal Fernando Associates</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Leading engineering consultancy delivering innovative solutions for 
              infrastructure, structural, and civil engineering projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-primary-foreground/80 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm hover:text-primary-foreground/80 transition-colors">
                About Us
              </Link>
              <Link to="/projects" className="text-sm hover:text-primary-foreground/80 transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="text-sm hover:text-primary-foreground/80 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="flex flex-col space-y-2 text-sm text-primary-foreground/80">
              <span>Structural Engineering</span>
              <span>Civil Engineering</span>
              <span>Infrastructure Design</span>
              <span>Project Management</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>ranmalfrnnd@yahoo.com</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Ranmal Fernando Associates. All rights reserved.
          </p>
            <p className="text-sm text-primary-foreground/60">
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/ravindifernando/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/80 transition-colors"
            >
              Ravindi Fernando
            </a>
            </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;