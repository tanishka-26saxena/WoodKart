'use client';

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smile, Truck, ShieldCheck, Factory } from "lucide-react";



const Home: React.FC = () => {
 return (

    <>

    <div className="bg-gray-100 flex items-center justify-center rounded-xl py-6 sm:py-8">

  {/* ================= DESKTOP VERSION ================= */}
  <div
    className="hidden lg:flex bg-white rounded-xl shadow-sm items-center justify-center gap-10 px-8"
    style={{ width: "1000px", height: "80px", marginTop: "15px", marginBottom: "15px" }}
  >
    {/* Item 1 */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
          <Smile className="text-blue-500" />
      </div>
      <p className="text-sm text-gray-700 whitespace-nowrap">
        20 Lakh+ Customers
      </p>
    </div>

    {/* Item 2 */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
        <Truck className="text-blue-500" />
      </div>
      <p className="text-sm text-gray-700 whitespace-nowrap">
        Free Delivery
      </p>
    </div>

    {/* Item 3 */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
        <ShieldCheck className="text-blue-500" />
      </div>
      <p className="text-sm text-gray-700 whitespace-nowrap">
        Best Warranty*
      </p>
    </div>

    {/* Item 4 */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
        <Factory className="text-blue-500" />
      </div>
      <p className="text-sm text-gray-700 whitespace-nowrap">
        15 Lakh sq. ft. Mfg. Unit
      </p>
    </div>
  </div>

  {/* ================= MOBILE VERSION ================= */}
  <div className="lg:hidden bg-white rounded-xl shadow-sm px-4 py-6 w-[100%]">

    {/* Heading */}
    <div className="flex flex-col items-center gap-3 mb-6">
      <h2 className="text-base font-medium text-gray-800">
        Why Choose WoodKart?
      </h2>
      <div className="w-12 h-[2px] bg-gray-300" />
    </div>

    {/* Grid */}
    <div className="grid grid-cols-4 gap-x-1 gap-y-6">

      {/* Item 1 */}
      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
          <Smile className="text-blue-500" />
        </div>
        <p className="text-xs text-gray-700">
          20 Lakh+ Customers
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
          <Truck className="text-blue-500" />
        </div>
        <p className="text-xs text-gray-700">
          Free Delivery
        </p>
      </div>

      {/* Item 3 */}
      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
          <ShieldCheck className="text-blue-500" />
        </div>
        <p className="text-xs text-gray-700">
          Best Warranty*
        </p>
      </div>

      {/* Item 4 */}
      <div className="flex flex-col items-center text-center gap-2">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
          <Factory className="text-blue-500" />
        </div>
        <p className="text-xs text-gray-700">
          15 Lakh sq. ft. Mfg. Unit
        </p>
      </div>

    </div>
  </div>
</div>
</>



    );
  };

export default Home;