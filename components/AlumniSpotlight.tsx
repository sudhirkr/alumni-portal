import React, { useState, useEffect } from 'react';
import { ALUMNI_HIGHLIGHTS } from '../constants';
import { AlumniProfile } from '../types';
import { client, urlFor } from '../lib/sanity';

const AlumniSpotlight: React.FC = () => {
  const [profiles, setProfiles] = useState<AlumniProfile[]>(ALUMNI_HIGHLIGHTS);

  useEffect(() => {
    const query = `*[_type == "alumniHighlight"] {
      _id,
      name,
      gradYear,
      role,
      company,
      quote,
      image
    }`;

    client.fetch(query)
      .then((data) => {
        if (data && data.length > 0) {
          const formattedProfiles = data.map((item: any) => ({
            id: item._id,
            name: item.name,
            gradYear: item.gradYear,
            role: item.role,
            company: item.company,
            quote: item.quote,
            imageUrl: urlFor(item.image)?.width(400).height(400).url() || ''
          }));
          setProfiles(formattedProfiles);
        }
      })
      .catch((err) => {
        console.log("Sanity fetch failed (using static data):", err);
      });
  }, []);

  return (
    <section className="py-20 bg-cmi-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Alumni Spotlight</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our alumni are making waves across the world. Here are a few of their stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((alum) => (
            <div key={alum.id} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-cmi-gold/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={alum.imageUrl} 
                  alt={alum.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-cmi-gold"
                />
                <div>
                  <h3 className="font-bold text-lg">{alum.name}</h3>
                  <p className="text-cmi-gold text-sm">Class of {alum.gradYear}</p>
                </div>
              </div>
              <blockquote className="text-slate-300 italic mb-6 relative">
                <span className="text-5xl text-slate-700 absolute -top-6 -left-2 font-serif">“</span>
                <p className="relative z-10 pl-4">{alum.quote}</p>
              </blockquote>
              <div className="mt-auto pt-4 border-t border-slate-700">
                <p className="text-sm font-semibold">{alum.role}</p>
                <p className="text-xs text-slate-400">{alum.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSpotlight;