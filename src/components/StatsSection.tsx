import { Award, Users, Building, Target, Clock, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const stats = [
  {
    icon: Award,
    value: "25+",
    label: "Years of Excellence",
    description: "Serving the engineering industry with distinction",
  },
  {
    icon: Building,
    value: "500+",
    label: "Projects Completed",
    description: "Successfully delivered across various sectors",
  },
  {
    icon: Target,
    value: "99%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations",
  },
  {
    icon: Clock,
    value: "100%",
    label: "On-Time Delivery",
    description: "Meeting deadlines with precision",
  },
  {
    icon: Shield,
    value: "Zero",
    label: "Safety Incidents",
    description: "Committed to workplace safety excellence",
  },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate the numbers
          stats.forEach((stat, index) => {
            const target = parseInt(stat.value) || 100;
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = Math.floor(current);
                return newValues;
              });
            }, 40);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary2 relative py-20 overflow-hidden">
      

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-4xl font-bold text-primary mb-6">
            Proven Track Record of Excellence
            
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto leading-relaxed">
            Our achievements speak for themselves. With decades of experience and hundreds of successful projects, 
            we continue to set the standard in engineering excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-[480px] h-auto mx-auto">
              <img 
              src="/images/stats.jpg" 
              alt="Engineering Excellence" 
              className="w-full h-full object-cover" 
              />
            </div>

          </div>

          {/* Right side - Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-6 p-4 rounded-xl bg-white/80 hover:shadow-lg transition-all duration-700 hover:bg-white/50 hover:shadow-lg group ${
                  isVisible 
                    ? 'transform translate-x-0 opacity-100' 
                    : 'transform translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                {/* Large number */}
                <div className="flex-shrink-0">
                  <h3 className="text-5xl xl:text-5xl font-black bg-primary/75 bg-clip-text text-transparent leading-none group-hover:scale-105 transition-transform duration-300">
                    {stat.value.includes('%') || stat.value === 'Zero' 
                      ? stat.value 
                      : `${animatedValues[index]}${stat.value.includes('+') ? '+' : ''}`
                    }
                  </h3>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {stat.description}
                  </p>
                  
                  {/* Progress bar */}
                  <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 ease-out ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{ transitionDelay: `${600 + index * 150}ms` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;