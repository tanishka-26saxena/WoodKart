'use client';

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smile, Truck, ShieldCheck, Factory } from "lucide-react";

const Home: React.FC = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    const decorData = [
  {
    title: "Item 1",
    price: "From ₹XYZ",
    image: "./src/ph.jpg",
  },
  {
    title: "Item 2",
    price: "From ₹XYZ",
    image: "./src/ph.jpg",
  },
  {
    title: "Item 3",
    price: "From ₹XYZ",
    image: "./src/ph.jpg",
  },
  {
    title: "Item 4",
    price: "From ₹XYZ",
    image: "./src/ph.jpg",
  },
  {
    title: "Item 5",
    price: "From ₹XYZ",
    image: "./src/ph.jpg",
  },
  {
    title: "Item 6",
    price: "From ₹XYZ",
    image: "./src/ph.jpg",
  },
  {
    title: "Item 7",
    price: "From ₹XYZ",
    image: "./src/ph.jpg",
  },
  {
    title: "Item 8",
    price: "From ₹XYZ",
    image: "./src/ph.jpg",
  },
];

 return (

<>

<section className="bg-[#fff1ed] px-4 lg:px-10 py-10 rounded-xl" style={{marginTop: "20px"}}>


  <div className="flex items-start justify-between mb-8" style={{margin: "20px"}}>
    <div>
      <h2 className="text-2xl font-sans text-gray-900">
        Home Decor
      </h2>
      <p className="text-sm font-sans text-gray-600 mt-1" style={{marginTop: "4px"}}>
        Because every detail matters
      </p>
    </div>

    <button className="
      hidden lg:flex items-center gap-2
      border border-gray-700 rounded-full
      px-5 py-1 text-[14px] text-gray-700
    " style={{height: "35px", width: "8%", padding: "8px"}}>
      View All <span>→</span>
    </button>
  </div>


  <div className="grid grid-cols-3 lg:grid-cols-4 gap-6" style={{margin: "20px"}}>

    {decorData.map((item, index) => (
      <div
        key={index}
        className="
          bg-white rounded-2xl
          p-4 flex flex-col h-[260px]
          hover:shadow-lg transition
        "
      >
 
        <div className="rounded-xl overflow-hidden ">
          <img
            src={item.image}
            alt={item.title}
            className="
              w-full h-[200px] object-cover rounded-2xl
            " style={{padding: "10px"}}
          />
        </div>

        <div className="flex flex-col flex-1 justify-center text-center" style={{marginBottom: "5px"}}>
          <h3 className="font-sans text-gray-900" >
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {item.price}
          </p>
        </div>
      </div>
    ))}

  </div>


  <div className="flex justify-center mt-8 lg:hidden" style={{marginTop:"20px", marginBottom:"20px"}}>
        <button
          className="
            border border-gray-400 rounded-full
            px-6 py-2 text-sm
          " style={{height: "35px", width: "40%", padding: "8px"}}
        >
          View All →
        </button>
      </div>

</section>



</>

    );
  };

export default Home;