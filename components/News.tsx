import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { NewsItem } from '../types';
import { fetchNews } from '../lib/sanity';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetchNews().then((data: any[]) => {
      // Map Sanity data to our NewsItem type, format dates
      const formattedNews = data.map((item) => ({
        id: item._id,
        title: item.title,
        date: formatDate(item.date),
        summary: item.summary,
        category: item.category
      }));
      setNews(formattedNews);
    }).catch((err) => {
      console.log("Sanity fetch failed:", err);
    });
  }, []);

// Helper function to format date from ISO (2025-07-10) to "July 10, 2025"
function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

  return (
    <section id="news" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-cmi-navy font-serif mb-10 border-l-4 border-cmi-gold pl-4">
          Latest Announcements
        </h2>

        <div className="space-y-6">
          {news.map((item) => (
            <div key={item.id} className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="md:w-1/4">
                <span className="text-xs font-bold text-cmi-gold uppercase tracking-wider">
                  {item.category}
                </span>
                <p className="text-slate-400 text-sm mt-1">{item.date}</p>
              </div>
              <div className="md:w-3/4 flex-1">
                <h3 className="text-xl font-bold text-cmi-navy group-hover:text-cmi-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 mt-2">
                  {item.summary}
                </p>
              </div>
              <div className="md:w-auto self-center">
                <a href="#" className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-cmi-gold group-hover:text-white transition-colors block">
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
