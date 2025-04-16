
import React from 'react';
import { Clock, Users, ArrowRight } from 'lucide-react';

export interface Tour {
  id: number;
  name: string;
  image: string;
  description: string;
  duration: string;
  price: number;
  type: 'walking' | 'bus' | 'boat';
  priceCategory: 'budget' | 'premium';
}

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-petersburg-blue text-white px-3 py-1 rounded-bl-lg">
          {tour.type === 'walking' && 'Пешеходная'}
          {tour.type === 'bus' && 'Автобусная'}
          {tour.type === 'boat' && 'Водная'}
        </div>
        <div className={`absolute bottom-0 left-0 px-3 py-1 rounded-tr-lg ${
          tour.priceCategory === 'premium' ? 'bg-petersburg-gold' : 'bg-green-600'
        } text-white`}>
          {tour.priceCategory === 'premium' ? 'Премиум' : 'Бюджетный'}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 text-petersburg-dark">{tour.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{tour.duration}</span>
          </div>
          <div className="font-semibold text-petersburg-blue">
            от {tour.price.toLocaleString('ru-RU')} ₽
          </div>
        </div>

        <button className="w-full btn btn-primary py-2 flex items-center justify-center">
          <span className="mr-2">Подробнее</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default TourCard;
