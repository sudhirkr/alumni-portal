import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Photo } from '../types';
import { fetchPhotos } from '../lib/sanity';

const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    console.log("Starting to fetch photos...");
    fetchPhotos().then((data: any[]) => {
      console.log("Photos data received:", data);
      // Map Sanity data to our Photo type
      const formattedPhotos = data.map((item) => ({
        id: item._id,
        url: item.url || '',
        caption: item.caption
      }));
      console.log("Formatted photos:", formattedPhotos);
      setPhotos(formattedPhotos);
    }).catch((err) => {
      console.error("Sanity fetch failed:", err);
      console.error("Error details:", err.message);
    });
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-cmi-navy font-serif mb-2">Memories Lane</h2>
            <p className="text-slate-600">Snapshots from past events and campus life.</p>
          </div>
          <a href="#" className="text-cmi-blue font-medium hover:underline mt-4 md:mt-0">
            View All Photos
          </a>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-md bg-slate-200"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="mx-auto mb-2" />
                  <p className="font-medium text-sm">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Modal / Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedPhoto(null)}>
          <button
            className="absolute top-6 right-6 text-white hover:text-cmi-gold transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-white text-lg font-medium">{selectedPhoto.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
