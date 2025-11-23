import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <div className="bg-cmi-navy p-2 rounded-lg text-white">
            <GraduationCap size={24} />
          </div>
          <div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-cmi-navy' : 'text-cmi-navy lg:text-white'}`}>
              CMI Alumni
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-cmi-gold transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-slate-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#join" 
            className="px-4 py-2 bg-cmi-gold hover:bg-amber-700 text-white text-sm font-medium rounded-md transition-colors shadow-sm"
          >
            Join Network
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 focus:outline-none ${isScrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full w-full shadow-lg border-t">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-cmi-gold font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#join"
              onClick={() => setIsOpen(false)}
              className="text-center w-full px-4 py-2 bg-cmi-gold text-white font-medium rounded-md"
            >
              Join Network
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;