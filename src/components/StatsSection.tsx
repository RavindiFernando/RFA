import { Award, Users, Building, Target, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "25+",
    label: "Years of Excellence",
    description: "Serving the engineering industry with distinction",
  },
  {
    icon: Building,
    value: "200+",
    label: "Projects Completed",
    description: "Successfully delivered across various sectors",
  },
  {
    icon: Users,
    value: "50+",
    label: "Expert Team",
    description: "Certified engineers and project managers",
  },
  {
    icon: Target,
    value: "98%",
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
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are proud of our legacy of delivering exceptional engineering
            solutions that stand the test of time. Our numbers speak for our commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{stat.label}</h4>
              <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">ISO 9001</div>
              <p className="text-sm text-muted-foreground">Certified Quality</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">ACECSL</div>
              <p className="text-sm text-muted-foreground">Member Association</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Green Building</div>
              <p className="text-sm text-muted-foreground">Sustainable Design</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
