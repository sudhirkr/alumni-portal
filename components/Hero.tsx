import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cmi-hero.jpeg"
          alt="CMI Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cmi-navy/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cmi-navy via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white max-w-4xl mt-16">
        <span className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider uppercase bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          Connecting Minds, Inspiring Futures
        </span>
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6">
          Welcome Home, <br/>CMI Alumni.
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          Stay connected with the institute, mentor the next generation of mathematicians and computer scientists, and grow with a global community of innovators.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#events" 
            className="px-8 py-3 bg-cmi-gold hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2"
          >
            View Upcoming Events
            <ArrowRight size={18} />
          </a>
          <a 
            href="#join" 
            className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-cmi-navy font-medium rounded-lg transition-all duration-300"
          >
            Join Alumni Network
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
