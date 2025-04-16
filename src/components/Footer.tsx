
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacts" className="bg-petersburg-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-petersburg-gold">Сам Себе Петербург</h3>
            <p className="text-gray-300 mb-4">
              Индивидуальные и групповые экскурсии по Санкт-Петербургу с лучшими гидами.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-petersburg-gold">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-petersburg-gold">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-petersburg-gold">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-petersburg-gold">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6"
                >
                  <path d="M22.67 16.35c-.15-.18-.47-.39-.87-.58-.4-.19-2.35-1.15-2.71-1.28-.36-.12-.62-.19-.88.19-.26.37-1 1.28-1.23 1.55-.22.27-.45.3-.84.1-.39-.2-1.65-.6-3.14-1.92-1.16-1.02-1.94-2.29-2.17-2.67-.23-.37-.02-.58.17-.77.18-.17.39-.45.58-.67.19-.23.25-.39.38-.65.13-.26.06-.49-.03-.67-.1-.18-.88-2.11-1.2-2.88-.32-.77-.64-.66-.88-.67h-.74c-.26 0-.69.1-1.05.47-.36.37-1.37 1.32-1.37 3.23s1.4 3.75 1.6 4.01c.2.26 2.79 4.24 6.75 5.94 3.96 1.7 3.96 1.13 4.67 1.06.71-.07 2.3-.93 2.63-1.83.33-.9.33-1.67.23-1.83Z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-petersburg-gold">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6"
                >
                  <path d="m22.05 7.54-4.47-4.47a.82.82 0 0 0-1.16 0L3.09 16.39a.27.27 0 0 0-.09.19v4.49a.5.5 0 0 0 .5.5h4.5a.27.27 0 0 0 .19-.09l13.24-13.25a.82.82 0 0 0 0-1.15M7.04 18.61h-1.5v-1.5l10.98-10.98 1.5 1.5"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-petersburg-gold" />
                <a href="tel:+79991234567" className="hover:text-petersburg-gold transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-petersburg-gold" />
                <a href="mailto:info@spbtours.ru" className="hover:text-petersburg-gold transition-colors">
                  info@spbtours.ru
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-petersburg-gold" />
                <span>Санкт-Петербург, Невский проспект, 1</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-petersburg-gold" />
                <span>Пн-Вс: 9:00 - 20:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#tours" className="hover:text-petersburg-gold transition-colors">
                  Экскурсии
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-petersburg-gold transition-colors">
                  Фотогалерея
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-petersburg-gold transition-colors">
                  Бронирование
                </a>
              </li>
              <li>
                <a href="#hotels" className="hover:text-petersburg-gold transition-colors">
                  Отели-партнеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-petersburg-gold transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Мы на карте</h3>
            <div className="h-40 bg-gray-800 rounded overflow-hidden">
              {/* Placeholder for map */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-center text-sm">
                  Интерактивная карта<br/>
                  <a href="#" className="text-petersburg-gold hover:underline">
                    Открыть большую карту
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-gray-400 text-center text-sm">
          <p>&copy; {currentYear} Сам Себе Петербург. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
