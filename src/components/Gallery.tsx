
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const gallery = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1544352453-5faf10bca9e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      caption: "Экскурсия в Петергоф – 15.05.2023"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1580486740751-aaad87302e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      caption: "Тайные дворики Петербурга – 22.06.2023"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1589845944057-332c433add24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      caption: "Ночной Петербург – 10.07.2023"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1578309252975-0c72ff616381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      caption: "Обзорная экскурсия – 05.08.2023"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1557415638-67b9d42989b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      caption: "Царское Село – 20.09.2023"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1643253071377-3e73226af734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      caption: "По каналам Петербурга – 15.10.2023"
    }
  ];

  return (
    <section id="gallery" className="section bg-white">
      <div className="container">
        <h2 className="text-center text-petersburg-dark mb-12">Фотогалерея</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.caption} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 transition-opacity">
                <p className="text-white font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-petersburg-gold"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
