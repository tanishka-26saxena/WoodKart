'use client';

import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Hero from "./Home/Hero";
import USP from "./Home/USP";
import ShopByCategories from "./Home/ShopByCategories";
import Vendor from "./Home/Vendor";
import Area from "./Home/Area";
import ShopByFinest from "./Home/ShopByFinest";
import HomeDecor from "./Home/HomeDecor";
import Testimonial from "./Home/Testimonial";
import About from "./Home/About";
import Footer from "./Home/Footer";

import { ChevronLeft, ChevronRight, Smile, Truck, ShieldCheck, Factory } from "lucide-react";

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  return (
    <main className="mt-4 lg:mt-4 pb-12">
      <Container>
        <div className="flex flex-col gap-8">
          <Hero></Hero>
          <USP></USP>
          <ShopByCategories></ShopByCategories>
          <Vendor></Vendor>
          <Area></Area>
          <ShopByFinest></ShopByFinest>
          <HomeDecor></HomeDecor>
          
        </div>
      </Container>
      <div className="block border-white" style={{height:"100px"}}></div>
      <div className="flex flex-col gap-8 bg-gray-100" style={{paddingTop:"60px", paddingBottom:"60px"}}>
        <Container>
        <Testimonial></Testimonial>
        </Container>
      </div>

      <div className="block border-gray-300 border-s" style={{height:"80px"}}></div>

      <div className="flex flex-col gap-8">
        <Container>
         <About></About>
        </Container>
      </div>

      <div className="block border-gray-300 border-s" style={{height:"80px"}}></div>

      <div className="flex flex-col gap-8 bg-gray-100" style={{paddingTop:"60px", paddingBottom:"60px"}}>
        <Container>
        <Footer></Footer>
        </Container>
      </div>
    </main>
  );
};

export default Home;