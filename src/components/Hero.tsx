
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-petersburg-navy/40"></div>
      </div>

      {/* Hero content */}
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          Сам Себе Петербург
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-normal">
            исследуй город по-своему
          </span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 drop-shadow-md">
          Индивидуальные и групповые экскурсии по Санкт-Петербургу с лучшими гидами
        </p>

        <a 
          href="#tours" 
          className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          Выбрать тур
        </a>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#tours" className="text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
