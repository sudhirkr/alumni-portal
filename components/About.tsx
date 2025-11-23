import React from 'react';
import { Network, Lightbulb, HandHeart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Network className="w-8 h-8 text-cmi-gold" />,
      title: "Global Networking",
      description: "Connect with alumni leading in academia, tech, and finance across the globe."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-cmi-gold" />,
      title: "Mentorship",
      description: "Guide current students through their academic journey and career choices."
    },
    {
      icon: <HandHeart className="w-8 h-8 text-cmi-gold" />,
      title: "Giving Back",
      description: "Support the institute's growth through scholarships and infrastructure development."
    },
    {
      icon: <Globe className="w-8 h-8 text-cmi-gold" />,
      title: "Events & Reunions",
      description: "Participate in regular meetups, symposiums, and batch reunions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-cmi-navy font-serif mb-6">
              A Community of Excellence
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              The CMI Alumni Association strives to foster a lifelong bond between the institute and its alumni. We believe that our alumni are our greatest ambassadors and assets.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you graduated last year or two decades ago, this platform serves as your bridge back to the Siruseri campus. We facilitate professional networking, academic collaboration, and social gatherings to keep the CMI spirit alive.
            </p>
            <div className="h-1 w-20 bg-cmi-gold rounded"></div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                <div className="mb-4 p-3 bg-white rounded-lg inline-block shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-cmi-navy mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;