import React, { useState, useEffect } from 'react';
import TourCard, { Tour } from './TourCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TourSection = () => {
  const [activeFilter, setActiveFilter] = useState({
    type: 'all',
    duration: 'all',
    price: 'all'
  });
  
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  
  const tours: Tour[] = [
    {
      id: 1,
      name: 'Мистический Петербург',
      image: 'https://images.unsplash.com/photo-1556610626-9976884afc65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Ночная экскурсия по загадочным местам города с историями о привидениях и городских легендах',
      duration: '2 часа',
      price: 1200,
      type: 'walking',
      priceCategory: 'budget'
    },
    {
      id: 2,
      name: 'Петергоф и фонтаны',
      image: 'https://images.unsplash.com/photo-1564183255781-ff5c2e03774e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      description: 'Путешествие в роскошный пригород Петербурга с осмотром знаменитых фонтанов и парков',
      duration: '6 часов',
      price: 3500,
      type: 'bus',
      priceCategory: 'premium'
    },
    {
      id: 3,
      name: 'Нестандартный Петербург',
      image: 'https://images.unsplash.com/photo-1551007761-372bec95f1ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Тайные дворики, современное искусство и нетуристические места, которые знают только местные',
      duration: '4 часа',
      price: 1800,
      type: 'walking',
      priceCategory: 'budget'
    },
    {
      id: 4,
      name: 'Парадный Петербург',
      image: 'https://images.unsplash.com/photo-1553708881-112abc53fe54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Классический маршрут по главным достопримечательностям города: Эрмитаж, Исаакиевский собор и другие',
      duration: '4 часа',
      price: 2500,
      type: 'bus',
      priceCategory: 'budget'
    },
    {
      id: 5,
      name: 'Каналы и реки',
      image: 'https://images.unsplash.com/photo-1572396129444-c2f6d7f08423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Экскурсия по водным маршрутам Петербурга с осмотром мостов и набережных',
      duration: '2 часа',
      price: 2000,
      type: 'boat',
      priceCategory: 'premium'
    },
    {
      id: 6,
      name: 'Царское Село',
      image: 'https://images.unsplash.com/photo-1560780148-d8a0c811a501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      description: 'Поездка в Царское Село с посещением Екатерининского дворца и знаменитой Янтарной комнаты',
      duration: '6 часов',
      price: 4000,
      type: 'bus',
      priceCategory: 'premium'
    }
  ];

  useEffect(() => {
    filterTours();
  }, [activeFilter]);

  const filterTours = () => {
    let result = [...tours];

    if (activeFilter.type !== 'all') {
      result = result.filter(tour => tour.type === activeFilter.type);
    }

    if (activeFilter.duration !== 'all') {
      result = result.filter(tour => {
        if (activeFilter.duration === 'short') return tour.duration === '2 часа';
        if (activeFilter.duration === 'medium') return tour.duration === '4 часа';
        if (activeFilter.duration === 'long') return tour.duration === '6 часов';
        return true;
      });
    }

    if (activeFilter.price !== 'all') {
      result = result.filter(tour => tour.priceCategory === activeFilter.price);
    }

    setFilteredTours(result);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilter(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const FilterButton = ({ type, value, currentValue, label }: { type: string, value: string, currentValue: string, label: string }) => (
    <button
      onClick={() => handleFilterChange(type, value)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        currentValue === value
          ? 'bg-petersburg-blue text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Наши экскурсии
        </h2>

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="flex flex-wrap gap-2">
            <FilterButton
              type="type"
              value="all"
              currentValue={activeFilter.type}
              label="Все типы"
            />
            <FilterButton
              type="type"
              value="walking"
              currentValue={activeFilter.type}
              label="Пешие"
            />
            <FilterButton
              type="type"
              value="bus"
              currentValue={activeFilter.type}
              label="Автобусные"
            />
            <FilterButton
              type="type"
              value="boat"
              currentValue={activeFilter.type}
              label="Водные"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterButton
              type="duration"
              value="all"
              currentValue={activeFilter.duration}
              label="Любая длительность"
            />
            <FilterButton
              type="duration"
              value="short"
              currentValue={activeFilter.duration}
              label="2 часа"
            />
            <FilterButton
              type="duration"
              value="medium"
              currentValue={activeFilter.duration}
              label="4 часа"
            />
            <FilterButton
              type="duration"
              value="long"
              currentValue={activeFilter.duration}
              label="6 часов"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterButton
              type="price"
              value="all"
              currentValue={activeFilter.price}
              label="Любая цена"
            />
            <FilterButton
              type="price"
              value="budget"
              currentValue={activeFilter.price}
              label="Бюджетные"
            />
            <FilterButton
              type="price"
              value="premium"
              currentValue={activeFilter.price}
              label="Премиум"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourSection;
