'use client';

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smile, Truck, ShieldCheck, Factory } from "lucide-react";

const Home: React.FC = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    const categoryData: Record<string, { title: string; img: string }[]> = {
  All: [
    { title: "Sofgfas", img: "./src/ph.jpg" },
    { title: "Bedrts", img: "./src/ph.jpg" },
    { title: "Dining", img: "./src/ph.jpg" },
    { title: "TV Units", img: "./src/ph.jpg" },
    { title: "Coffee Tables", img: "./src/ph.jpg" },
    { title: "Sofas", img: "./src/ph.jpg" },
    { title: "Beds", img: "./src/ph.jpg" },
  ],
  Living: [
    { title: "Sofas", img: "./src/ph.jpg" },
    { title: "TV Units", img: "./src/ph.jpg" },
    { title: "Coffee Tables", img: "./src/ph.jpg" },
  ],
  Bedroom: [
    { title: "Beds", img: "./src/ph.jpg" },
    { title: "Wardrobes", img: "./src/ph.jpg" },
  ],
  Dining: [
    { title: "Dining", img: "./src/ph.jpg" },
  ],
  Mattress: [
    { title: "Mattress", img: "./src/ph.jpg" },
  ],
};


 return (

<>

<div className="flex flex-col">

  {/* HEADING */}
  <div className="hidden lg:flex justify-center lg:mb-8 group cursor-pointer">
  <h2 className="text-center text-3xl font-sans text-gray-800"
  style={{ marginBottom: "20px" }}>
    Shop By Categories
  </h2>
</div>

  <div className="hidden lg:flex justify-center gap-4 mb-10"
  style={{marginBottom:"25px"}}>
  {["All", "Living", "Bedroom", "Dining", "Mattress", "Decor"].map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      className={`px-7 py-2 rounded-full border text-[15px] transition
        ${
          activeCategory === cat
            ? "border-blue-400 text-blue-500 bg-blue-50"
            : "border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-500"
        }
      `}
      style={{paddingTop: "8px", paddingBottom: "8px", paddingLeft: "20px", paddingRight: "20px"}}
    >
      {cat}
    </button>
  ))}
</div>

<div className="hidden lg:grid grid-cols-6 gap-8 mt-6">
  {categoryData[activeCategory]?.map((item) => (
    <div key={item.title} className="text-center group cursor-pointer">
      <div className="relative rounded-l overflow-hidden shadow-sm group-hover:shadow-md transition">
        <img
          src={item.img}
          alt={item.title}
          className="h-[170px] w-full object-cover transition-transform duration-300 group-hover:scale-140"
        />
      </div>
      <p className="mt-4 text-[15px] font-sans tracking-wide text-gray-800 group-hover:text-blue-500"
      style={{marginTop: "15px", marginBottom: "6px"}}>
        {item.title.toUpperCase()}
      </p>
    </div>
  ))}
</div>


 {/* ===== MOBILE CATEGORY TABS ===== */}
<div className="lg:hidden bg-gray-100 rounded-xl" style={{paddingTop: "12px", paddingBottom: "12px" }} >
<div className=" px-4 py-4 mt-6 mb-6 flex items-center justify-between"
style={{height: "40px", padding: "20px", marginBottom: "10px"}}>

  <div className="flex gap-6 overflow-x-auto scrollbar-hidden">
    {["All", "Living", "Bedroom", "Dining", "Mattress", "Decor"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveCategory(tab)}
        className={`relative pb-2 text-[15px] whitespace-nowrap
          ${
            activeCategory === tab
              ? "text-blue-500 font-medium underline-blue-500"
              : "text-gray-700"
          }
        `}
      >
        {tab}
        {activeCategory === tab && (
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-500 " />
        )}
      </button>
    ))}
  </div>

  <button className="ml-3 shrink-0">
    {/* grid icon unchanged */}
  </button>
</div>


{/* ===== MOBILE CATEGORY CARDS ===== */}
<div className="lg:hidden px-4 mt-0" style={{paddingLeft: "20px", paddingRight: "20px", marginTop: "0px"}}>
  <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">

    {categoryData[activeCategory].map((item) => (
      <div
        key={item.title}
        className="shrink-0 w-[100px] text-center "
      >
        <div className="rounded-xl overflow-hidden shadow-sm">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-[78px] object-cover "
          />
        </div>
        <p className="mt-3 text-[13px] font-medium text-gray-700" style={{marginTop: "12px"}}>
          {item.title}
        </p>
      </div>
    ))}

  </div>
</div>
  
</div>
</div>

</>

    );
  };

export default Home;