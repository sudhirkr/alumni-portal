import React, { useState, useEffect } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Event } from '../types';
import { fetchEvents } from '../lib/sanity';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [events, setEvents] = useState<Event[]>([]);
  const categories = ['All', 'Meetup', 'Talk', 'Reunion', 'Workshop'];

  useEffect(() => {
    fetchEvents().then((data: any[]) => {
      // Map Sanity data to our Event type
      const formattedEvents = data.map((item) => ({
        id: item._id,
        title: item.title,
        date: formatDate(item.date), // Convert ISO date back to string format
        time: item.time,
        location: item.location,
        description: item.description,
        category: item.category
      }));
      setEvents(formattedEvents);
    }).catch((err) => {
      console.log("Sanity fetch failed:", err);
    });
  }, []);

// Helper function to format date from ISO (2025-08-15) to "Aug 15, 2025"
function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(e => e.category === filter);

  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-cmi-gold font-semibold tracking-wide uppercase text-sm">Mark Your Calendars</span>
          <h2 className="text-3xl md:text-4xl font-bold text-cmi-navy font-serif mt-2 mb-6">Upcoming Events</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-cmi-navy text-white shadow-lg' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col md:flex-row">
              {/* Date Box (Left Side) */}
              <div className="bg-cmi-navy text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
                {/* Handle date parsing safely */}
                <span className="text-3xl font-bold">{event.date.split(' ')[1]?.replace(',', '') || 'DD'}</span>
                <span className="text-sm uppercase tracking-wider text-cmi-gold font-medium">{event.date.split(' ')[0] || 'Mon'}</span>
                <span className="text-xs mt-1 text-slate-400">{event.date.split(' ')[2] || 'YYYY'}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-2">
                   <span className="inline-block px-3 py-1 text-xs font-semibold text-cmi-blue bg-blue-50 rounded-full">
                    {event.category}
                  </span>
                </div>
               
                <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {event.description}
                </p>
                
                <div className="flex flex-col gap-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-cmi-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-cmi-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-cmi-blue font-semibold hover:text-cmi-navy transition-colors">
            View Full Calendar <span className="ml-2">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Events;
