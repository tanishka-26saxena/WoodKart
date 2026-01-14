'use client';

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smile, Truck, ShieldCheck, Factory } from "lucide-react";


const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const slides = [
  "./src/ph.jpg",
  "./src/ph.jpg",
  "./src/ph.jpg",
];


const extendedSlides = [...slides, slides[0]];


  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => prev + 1);
  }, 3000);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (currentSlide === slides.length) {
    setTimeout(() => {
      setIsTransitioning(false); 
      setCurrentSlide(0);        
    }, 1500); 
  } else {
    setIsTransitioning(true);
  }
}, [currentSlide, slides.length]);


 return (
        <>
      {/* slider and image section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
                
                <div className="lg:col-span-2 relative group overflow-hidden rounded-md shadow-sm h-[250px] md:h-[450px]">
                  <div
                    className={`flex h-full ${
                      isTransitioning
                        ? "transition-transform duration-500 ease-out"
                        : ""
                    }`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {extendedSlides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide}
                      alt={`Slide ${index}`}
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                  ))}
      
                  </div>
      
              
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 p-2 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ChevronLeft size={26} className="text-gray-300" />
                  </button>
      
              
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 p-2 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ChevronRight size={26} className="text-gray-300" />
                  </button>
                  
                </div>
      
             
                <div className="hidden lg:flex flex-col gap-4">
                  <div className="flex-1 relative overflow-hidden rounded-md shadow-sm border border-gray-100">
                    <img src="./src/ph.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 relative overflow-hidden rounded-md shadow-sm border border-gray-100">
                    <img src="./src/ph.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
      
              </div>

              </>


    );
  };

export default Home;