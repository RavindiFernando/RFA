import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Star, Lightbulb, UserCheck  } from "lucide-react";
import { useState, useEffect, useRef } from "react";
const founderImage = "/images/founder.jpg"; // public/images/founder.jpg


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) {
              setIsVisible(true);
            } else if (entry.target === storyRef.current) {
              setStoryVisible(true);
            } else if (entry.target === valuesRef.current) {
              setValuesVisible(true);
            }
          }
        });
      },
      observerOptions
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (storyRef.current) observer.observe(storyRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => observer.disconnect();
  }, []);

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
      <section
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-primary/10 to-accent/5"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl font-bold text-white animate-fade-in-up">About Us</h1>
            <p className="text-xl text-neutral-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
                  At Ranmal Fernando Associates, we provide reliable and innovative structural engineering solutions, guiding projects from concept to completion with safety, efficiency, and durability at the core.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 ${
          storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <h2 className="text-4xl font-bold text-primary">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            Ranmal Fernando Associates (RFA) was founded in February 2007 by Eng.Ranmal Fernando, following a distinguished 17-year career as a site engineer, project engineer at State Engineering Corporation, and Chief Engineer at Kelsey Developments Pvt Ltd. RFA stands as a premier structural and civil engineering firm specializing in structural designs, project management, retrofitting works for existing buildings, and value engineering
            </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            Over the years, RFA has grown significantly, undertaking numerous high-profile projects and expanding its team of experts. We collaborate closely with clients, architects, MEP engineers, and quantity surveyors to achieve comprehensive project outcomes. Our extensive portfolio includes diverse sectors such as commercial buildings, mixed developments, housing schemes, apartments, hospitals, academic buildings, and large-scale factories.
          </p>
          <div className="grid grid-cols-2 gap-0 mt-8">
            <div className="text-center">
          <h3 className="text-3xl font-bold text-primary animate-fade-in-up animation-delay-500">2007</h3>
          <p className="text-muted-foreground animate-fade-in-up animation-delay-700">Founded</p>
            </div>
            <div className="text-center">
          <h3 className="text-3xl font-bold text-primary animate-fade-in-up animation-delay-500">500+</h3>
          <p className="text-muted-foreground animate-fade-in-up animation-delay-700">Projects</p>
            </div>
          </div>
        </div>
        <div className={`relative flex flex-col items-center transition-all duration-1000 ${
          storyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`} style={{ transitionDelay: '300ms' }}>
          <img
            src={founderImage}
            alt="Founder - Eng. Ranmal Fernando"
            className="rounded-lg shadow-2xl w-auto h-64 object-cover mb-4 hover:shadow-xl transition-shadow duration-300"
          />
          <div className="text-center">
            <h5 className="text-xl font-semibold text-primary">Eng. Ranmal Fernando</h5>
            <p className="text-muted-foreground text-base">Founder & Principal Engineer</p>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl font-bold text-primary">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`h-full text-center hover:shadow-lg transition-all duration-700 hover:scale-105 group ${
                  valuesVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
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
      {/* <section className="py-20 bg-primary/5">
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
      </section> */}

      <Footer />
    </div>
  );
};

export default About;