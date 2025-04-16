
import React from 'react';
import { Star, MapPin, ExternalLink } from 'lucide-react';

interface Hotel {
  id: number;
  name: string;
  image: string;
  rating: number;
  location: string;
  price: number;
  link: string;
}

const HotelSection = () => {
  const hotels: Hotel[] = [
    {
      id: 1,
      name: 'Астория',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
      rating: 5,
      location: 'Исаакиевская площадь',
      price: 12000,
      link: 'https://example.com/astoria'
    },
    {
      id: 2,
      name: 'Невский Гранд',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      rating: 4,
      location: 'Невский проспект',
      price: 5500,
      link: 'https://example.com/nevsky'
    },
    {
      id: 3,
      name: 'Екатерининский Дворец',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
      rating: 4.5,
      location: 'Пушкин',
      price: 7800,
      link: 'https://example.com/catherine'
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} className="fill-petersburg-gold text-petersburg-gold" />);
    }
    
    if (halfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={16} className="text-petersburg-gold" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={16} className="fill-petersburg-gold text-petersburg-gold" />
          </div>
        </div>
      );
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-petersburg-gold" />);
    }
    
    return <div className="flex">{stars}</div>;
  };

  return (
    <section id="hotels" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-center text-petersburg-dark mb-4">Отели-партнеры</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Комфортное размещение в лучших отелях города по специальным ценам для участников наших экскурсий
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="h-52 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-petersburg-dark">{hotel.name}</h3>
                
                <div className="flex items-center mb-2">
                  {renderStars(hotel.rating)}
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{hotel.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-petersburg-blue font-medium">
                    от {hotel.price.toLocaleString('ru-RU')} ₽<span className="text-gray-500 text-sm">/ночь</span>
                  </div>
                </div>
                
                <a 
                  href={hotel.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full btn btn-secondary py-2 flex items-center justify-center"
                >
                  <span className="mr-2">Забронировать номер</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
