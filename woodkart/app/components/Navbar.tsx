'use client';

import React, {useState} from "react";
import Container from "./Container";
import { Search, User, Heart, ShoppingCart, Menu, X, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Sofas", "Living", "Bedroom", "Mattress", "Dining", 
    "Storage", "Study & Office", "Outdoor", "Decor & Furnishing", "Modular Kitchen & Wardrobe"
  ];
  return (
    <>
    <div className="hidden lg:flex w-full h-12 bg-blue-50">
    
      <Container>
        <div className="flex flex-row justify-between items-center h-12">
          
          <div className="flex flex-row items-center gap-4">
            <div className="text-m font-sans text-blue-950">
              <a href="#" className="hover:underline ">Furniture</a>
            </div>
            <span className="text-gray-300">|</span>
            <div className="text-m font-sans text-gray-800">
              <a href="#" className="hover:underline">Business to Business</a>
            </div>
          </div>

          {/* Right Side: Last two items */}
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center text-sm font-sans text-gray-800">
              <img src="/src/call.png" 
                alt="Phone Icon" 
                width={20} 
                height={20} 
                className="mr-4"
              />
              <a href="#" className="hover:underline">+91 9876543210</a>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex flex-row items-center text-sm font-sans text-gray-800">
              <img src="/src/track-order.png" 
                alt="Track Order Icon" 
                width={20} 
                height={20} 
                className="mr-4"
              />
              <a href="#" className="hover:underline">Track order</a>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex flex-row items-center text-sm font-sans text-gray-800">
              <img src="/src/help-center.png" 
                alt="Help Center Icon" 
                width={20} 
                height={20} 
                className="mr-4"
              />
              <a href="#" className="hover:underline">Help Center</a>
            </div>          
          </div>

        </div>
      </Container>     
    </div>

    <Container>
    <nav className="bg-white border-b border-gray-200 ">
      {/* TOP HEADER */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 lg:h-22 gap-4">
          
          {/* Mobile: Hamburger Icon */}
          <div className="flex items-center gap-3"> 
          {/* Mobile: Hamburger Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo Section */}
          <div className="flex flex-col shrink-0">
            <div className="flex flex-row">
              <div className="text-2xl lg:text-4xl font-sans font-bold text-gray-800 tracking-tight">Wood</div>
              <div className="text-2xl lg:text-4xl font-sans font-bold text-blue-800 tracking-tight">Kart</div>
            </div>
            <span className="hidden lg:block text-[13px] text-gray-500 leading-none">
              lorem....lorem ipsum dolor sit
            </span>
          </div>
        </div>

          {/* Desktop: Search Bar */}
<div className="hidden lg:flex items-center ml-24 mr-auto"> 
  
  <div className="relative w-[500px]"> 

    <input 
      type="text" 
      placeholder="Search Products, Color & More..." 
      className="w-full h-12 bg-white border border-gray-300 rounded-sm 
                 pl-4 pr-16 text-sm placeholder:text-gray-400 placeholder:pl-4
                 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all "
    />
    <div className="absolute inset-y-0 right-5 flex items-center pl-4 pointer-events-none">
      <Search className="text-gray-400" size={20} />
    </div>
  </div>
</div>

         
          <div className="flex items-center space-x-3 lg:space-x-5 text-gray-700">
            <div className="hidden lg:flex flex-col items-center group cursor-pointer min-w-[60px]">
              <User size={25} strokeWidth={1.5} className="group-hover:text-blue-600 transition" />
              <span className="hidden lg:block text-[12px] text-gray-600 mt-0.5 group-hover:text-blue-600">Profile</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer min-w-[60px] relative">
    <div className="relative">
      <Heart size={25} strokeWidth={1.5} className="group-hover:text-blue-600 transition" />
    
    </div>
    <span className="hidden lg:block text-[12px] text-gray-600 mt-0.5 group-hover:text-blue-600">Wishlist</span>
  </div>
            <div className="flex flex-col items-center group cursor-pointer min-w-[60px] relative">
    <div className="relative">
      <ShoppingCart size={25} strokeWidth={1.5} className="group-hover:text-blue-600 transition" />
      
    </div>
    <span className="hidden lg:block text-[12px] text-gray-600 mt-0.5 group-hover:text-blue-600">Cart</span>
  </div>

          </div>
        </div>
      </div>

  
      <div className="hidden lg:block sticky top-0 z-50">
        <div className="max-w-7xl h-8 mx-auto px-4">
          <ul className="flex justify-between items-center py-3 text-[15px] font-medium text-gray-600 overflow-x-auto whitespace-nowrap">
            {categories.map((cat) => (
              <li key={cat} className="hover:text-blue-600 hover:underline cursor-pointer px-2 first:pl-0 transition-colors">
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute w-full border-t border-gray-200 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 space-y-4 font-medium text-gray-700">
            {categories.map((cat) => (
              <a key={cat} href="#" className="border-b border-gray-50 pb-2 active:text-blue-600">{cat}</a>
            ))}
          </div>
        </div>
      )}

    </nav>
    </Container>

    </>
  );
};

export default Navbar;
