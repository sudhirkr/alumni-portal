import React from 'react';
import { GraduationCap, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cmi-navy text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-4">
              <GraduationCap size={28} className="text-cmi-gold" />
              <span className="text-lg font-bold">CMI Alumni</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Connecting the brilliant minds of Chennai Mathematical Institute with each other and the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-cmi-gold transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-cmi-gold transition-colors">Events Calendar</a></li>
              <li><a href="#gallery" className="hover:text-cmi-gold transition-colors">Photo Gallery</a></li>
              <li><a href="#contact" className="hover:text-cmi-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cmi-gold transition-colors">Career Services</a></li>
              <li><a href="#" className="hover:text-cmi-gold transition-colors">Transcript Request</a></li>
              <li><a href="#" className="hover:text-cmi-gold transition-colors">Make a Donation</a></li>
              <li><a href="#" className="hover:text-cmi-gold transition-colors">Institute Website</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to receive quarterly updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-cmi-gold w-full text-sm"
              />
              <button className="bg-cmi-gold text-white px-4 py-2 rounded-r-md hover:bg-amber-700 text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Chennai Mathematical Institute Alumni Association. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;