import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { NEWS_UPDATES } from '../constants';
import { NewsItem } from '../types';
import { client } from '../lib/sanity';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>(NEWS_UPDATES);

  useEffect(() => {
    const query = `*[_type == "newsItem"] | order(date desc) {
      _id,
      title,
      date,
      summary,
      category
    }`;

    client.fetch(query)
      .then((data) => {
        if (data && data.length > 0) {
          const formattedNews = data.map((item: any) => ({
            id: item._id,
            title: item.title,
            date: item.date,
            summary: item.summary,
            category: item.category
          }));
          setNews(formattedNews);
        }
      })
      .catch((err) => {
        console.log("Sanity fetch failed (using static data):", err);
      });
  }, []);

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