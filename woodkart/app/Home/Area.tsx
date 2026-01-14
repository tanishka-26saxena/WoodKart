'use client';

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smile, Truck, ShieldCheck, Factory } from "lucide-react";

const Home: React.FC = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    const areaData: Record<string, { title: string; img: string }[]> = {
  All: [
    { title: "Area A", img: "./src/ph.jpg" },
    { title: "Area B", img: "./src/ph.jpg" },
    { title: "Area C", img: "./src/ph.jpg" },
    { title: "Area D", img: "./src/ph.jpg" },
    { title: "Area E", img: "./src/ph.jpg" },
    { title: "Area F", img: "./src/ph.jpg" },
  ],
};

 return (

<>
<div className="flex flex-col">

  <div className="hidden lg:flex flex-col  rounded-xl" style={{paddingTop: "20px", paddingBottom: "20px", paddingLeft: "20px", paddingRight: "20px"}}>

  {/* HEADING */}
  <div className="hidden lg:flex justify-center lg:mb-8">
  <h2 className="text-center text-3xl font-sans text-gray-800"
  style={{ marginBottom: "20px" }}>
    Shop By Area
  </h2>
</div>

<div className="hidden lg:grid grid-cols-6 gap-8 mt-6" style={{marginTop:"20px"}}>
  {areaData[activeCategory]?.map((item) => (
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
</div>


 {/* ===== MOBILE CATEGORY TABS ===== */}
<div className="lg:hidden bg-gray-100 rounded-xl" style={{paddingTop: "12px", paddingBottom: "12px" }} >

<div className="lg:hidden flex justify-center lg:mb-8">
  <h2 className="text-center text-xl font-sans text-gray-800"
  style={{ marginBottom: "20px" }}>
    Shop By Area
  </h2>
</div>

{/* ===== MOBILE CATEGORY CARDS ===== */}
<div className="lg:hidden px-4 mt-0" style={{paddingLeft: "20px", paddingRight: "20px", marginTop: "0px"}}>
  <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">

    {areaData[activeCategory].map((item) => (
      <div
        key={item.title}
        className="shrink-0 w-[100px] text-center"
      >
        <div className="rounded-xl overflow-hidden shadow-sm">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-[78px] object-cover"
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