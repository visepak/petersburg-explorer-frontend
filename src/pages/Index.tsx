
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TourSection from '../components/TourSection';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import HotelSection from '../components/HotelSection';
import Footer from '../components/Footer';

const Index = () => {
  // Animation for scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-right');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-petersburg-dark">
      <Navbar />
      <Hero />
      
      <div className="reveal">
        <TourSection />
      </div>
      
      <div className="reveal">
        <Gallery />
      </div>
      
      <div className="reveal-right">
        <BookingForm />
      </div>
      
      <div className="reveal">
        <HotelSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
