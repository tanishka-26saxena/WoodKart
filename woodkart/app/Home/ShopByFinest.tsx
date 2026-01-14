'use client';

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
  { title: "Img1", image: "./src/ph.jpg",},
  { title: "Img2", image: "./src/ph.jpg",},
  { title: "Img3", image: "./src/ph.jpg",},
  { title: "Img4", image: "./src/ph.jpg",},
  { title: "Img5", image: "./src/ph.jpg",},
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === sliderData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="flex flex-col px-4 lg:px-6 py-6">

        {/* ================= HEADING ================= */}
        <div className="block mb-6">
          <h2 className="text-center lg:text-left text-xl lg:text-2xl font-sans text-gray-800 mb-2" style={{marginBottom: "10px"}}>
            India's Finest Online Furniture Brand
          </h2>
          <p className="text-sm font-sans text-gray-600 max-w-5xl" style={{marginBottom: "10px"}}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
        </div>

        
        {/* ================= DESKTOP SLIDER ================= */}
<div className=" lg:block relative overflow-hidden mt-6" style={{ marginTop: "20px"}}>

  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${currentIndex * 22}%)`,
    }}
  >
    {sliderData.map((item, index) => (
      <div
        key={index}
        className="w-[22%] px-3 flex-shrink-0 text-center group" style={{ marginLeft: "10px", marginRight: "10px"}}
      >
        {/* IMAGE CARD */}
        <div className="group rounded-2xl overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="
              w-full h-[100px] lg:h-[220px] object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-110
            "
          />
        </div>

        {/* TEXT BELOW IMAGE */}
        <p className="mt-4 text-base font-sans font-semibold text-gray-800 group-hover:text-blue-500">
          {item.title}
        </p>
      </div>
    ))}
  </div>

  {/* LEFT ARROW */}
  <button
    onClick={prevSlide}
    className="
      absolute left-0 top-1/2 -translate-y-1/2
      bg-white p-2 shadow-md
    "
  >
    <ChevronLeft />
  </button>

  {/* RIGHT ARROW */}
  <button
    onClick={nextSlide}
    className="
      absolute right-0 top-1/2 -translate-y-1/2
      bg-white p-2 shadow-md
    "
  >
    <ChevronRight />
  </button>
</div>

          </div>
    </>
  );
};

export default Home;
