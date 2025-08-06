import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Let's discuss how Ranmal Fernando Associates can bring your engineering 
            vision to life. Our team of experts is ready to deliver innovative solutions 
            tailored to your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Phone className="h-5 w-5" />
              <span className="text-lg">+94 77 123 4567</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Mail className="h-5 w-5" />
              <span className="text-lg">info@rfa.lk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
