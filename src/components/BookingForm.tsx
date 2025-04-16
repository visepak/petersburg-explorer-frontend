
import React, { useState } from 'react';
import { z } from 'zod';
import { useToast } from '@/components/ui/use-toast';

const BookingSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }),
  phone: z.string().min(10, { message: 'Введите корректный номер телефона' }),
  email: z.string().email({ message: 'Введите корректный email' }),
  tour: z.string().min(1, { message: 'Выберите экскурсию' }),
  date: z.string().min(1, { message: 'Выберите дату' }),
  people: z.string().min(1, { message: 'Укажите количество человек' }),
  hotel: z.boolean().optional(),
  transfer: z.boolean().optional(),
});

type BookingFormData = z.infer<typeof BookingSchema>;

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    tour: '',
    date: '',
    people: '',
    hotel: false,
    transfer: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tours = [
    { id: 'mystical', name: 'Мистический Петербург' },
    { id: 'peterhof', name: 'Петергоф и фонтаны' },
    { id: 'unusual', name: 'Нестандартный Петербург' },
    { id: 'classic', name: 'Парадный Петербург' },
    { id: 'water', name: 'Каналы и реки' },
    { id: 'tsarskoe', name: 'Царское Село' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    try {
      BookingSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Бронирование отправлено!",
        description: "Мы свяжемся с вами в ближайшее время для подтверждения.",
      });
      setIsSubmitting(false);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        tour: '',
        date: '',
        people: '',
        hotel: false,
        transfer: false,
      });
    }, 1500);
  };

  return (
    <section id="booking" className="section bg-petersburg-blue text-white">
      <div className="container">
        <h2 className="text-center mb-12">Забронировать экскурсию</h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8 text-petersburg-dark">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-1"
                >
                  Ваше имя *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Иван Иванов"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-sm font-medium mb-1"
                >
                  Телефон *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+7 (999) 123-45-67"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-1"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="example@mail.ru"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="tour" 
                  className="block text-sm font-medium mb-1"
                >
                  Экскурсия *
                </label>
                <select
                  id="tour"
                  name="tour"
                  value={formData.tour}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.tour ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Выберите экскурсию</option>
                  {tours.map((tour) => (
                    <option key={tour.id} value={tour.id}>
                      {tour.name}
                    </option>
                  ))}
                </select>
                {errors.tour && (
                  <p className="mt-1 text-sm text-red-500">{errors.tour}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="date" 
                  className="block text-sm font-medium mb-1"
                >
                  Дата *
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.date ? 'border-red-500' : 'border-gray-300'
                  }`}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-500">{errors.date}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="people" 
                  className="block text-sm font-medium mb-1"
                >
                  Количество человек *
                </label>
                <select
                  id="people"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md ${
                    errors.people ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Выберите</option>
                  <option value="1">1 человек</option>
                  <option value="2">2 человека</option>
                  <option value="3">3 человека</option>
                  <option value="4">4 человека</option>
                  <option value="5">5 человек</option>
                  <option value="group">6+ человек (групповая экскурсия)</option>
                </select>
                {errors.people && (
                  <p className="mt-1 text-sm text-red-500">{errors.people}</p>
                )}
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <div className="flex items-center">
                <input
                  id="hotel"
                  name="hotel"
                  type="checkbox"
                  checked={formData.hotel}
                  onChange={handleChange}
                  className="h-4 w-4 text-petersburg-blue rounded"
                />
                <label 
                  htmlFor="hotel" 
                  className="ml-2 text-sm"
                >
                  Нужен отель
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  id="transfer"
                  name="transfer"
                  type="checkbox"
                  checked={formData.transfer}
                  onChange={handleChange}
                  className="h-4 w-4 text-petersburg-blue rounded"
                />
                <label 
                  htmlFor="transfer" 
                  className="ml-2 text-sm"
                >
                  Нужен трансфер
                </label>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className={`btn btn-primary btn-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Забронировать'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
