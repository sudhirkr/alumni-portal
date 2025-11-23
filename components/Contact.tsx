import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white">
      {/* Get Involved Banner */}
      <div id="join" className="bg-cmi-blue py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 font-serif">Want to Get Involved?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Update your profile, sign up to be a mentor, or propose a new event. We want to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-cmi-blue px-6 py-3 rounded-md font-bold hover:bg-slate-100 transition-colors">
              Register as Alumni
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white/10 transition-colors">
              Become a Mentor
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-cmi-navy font-serif mb-6">Contact Us</h3>
            <p className="text-slate-600 mb-8">
              Have questions about upcoming reunions, transcripts, or donation opportunities? Reach out to the alumni office.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <MapPin className="text-cmi-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-cmi-navy">Address</h4>
                  <p className="text-slate-600 text-sm">
                    Chennai Mathematical Institute<br/>
                    H1, SIPCOT IT Park, Siruseri<br/>
                    Kelambakkam, Chennai 603103
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Mail className="text-cmi-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-cmi-navy">Email</h4>
                  <p className="text-slate-600 text-sm">alumni@cmi.ac.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                  <Phone className="text-cmi-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-cmi-navy">Phone</h4>
                  <p className="text-slate-600 text-sm">+91-44-7196 1000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-cmi-blue focus:outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Batch Year</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-cmi-blue focus:outline-none" placeholder="e.g. 2018" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-cmi-blue focus:outline-none" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-cmi-blue focus:outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-cmi-navy text-white font-bold py-3 rounded-md hover:bg-slate-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;