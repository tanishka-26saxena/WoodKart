'use client';

import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray mt-16">

      {/* ================= TOP LINKS ================= */}
      <div className="px-4 lg:px-12 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* OUR COMPANY */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase" style={{margin:"10px"}}>
              Our Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-600" >
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>About Us</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Career</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Media</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Blog</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Our Stores</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Customer Stories</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Investor Relations</li>
            </ul>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase" style={{margin:"10px"}}>
              Useful Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Custom Furniture</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Hotel Furniture</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Delivery Location</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Sitemap</li>
            </ul>
          </div>

          {/* SHOP BY ROOM */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase" style={{margin:"10px"}}>
              Shop By Room
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Living Room</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Bedroom</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Dining Room</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Kids Room</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Modular Kitchen Designs</li>
            </ul>
          </div>

          {/* PARTNERS */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase" style={{margin:"10px"}}>
              Partners
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 mb-6">
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Become a Franchise</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Sell on WoodenStreet</li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase" style={{margin:"10px"}}>
              Trusted By
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>QRO Certified</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Ukcert Certified</li>
            </ul>
          </div>

          {/* NEED HELP */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase" style={{margin:"10px"}}>
              Need Help
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 mb-6">
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Help Center</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Contact Us</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Track your order</li>
              <li className="cursor-pointer hover:text-blue-600 transition-colors" style={{margin:"10px"}}>Ask an Expert</li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 text-gray-600" style={{marginTop:"25px"}}>
              <Instagram size={20} />
              <Facebook size={20} />
              <Twitter size={20} />
              <Youtube size={20} />
              <Linkedin size={20} />
            </div>
          </div>

        </div>
      </div>

      {/* ================= COMPANY INFO SECTION ================= */}
<div className="border-t border-gray-300 px-4 lg:px-12 py-8" style={{margin:"20px"}}>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start" style={{margin:"20px"}}>

    {/* LEFT: LOGO */}
    <div>
      <h2 className="text-3xl font-bold">
        Wood<span className="text-blue-700">Kart</span>
      </h2>
    </div>

    {/* CENTER: LEGAL LINKS */}
    <div className="text-sm text-gray-600 space-y-2" style={{margin:"20px"}}>
      <div className="flex flex-wrap gap-2">
        {[
          "Terms of Use",
          "Security",
          "Return & Refund",
          "Payment Policy",
          "Grievance Cell",
        ].map((item) => (
          <span
            key={item}
            className="cursor-pointer hover:text-blue-600 transition-colors"
          >
            {item} |
          </span>
        ))}
      </div>

      <p>© 2015–2026 Woodenstreet.com. All rights reserved.</p>
      <p>The Woodenstreet Furnitures Private Limited</p>
    </div>

    {/* RIGHT: REGISTERED OFFICE */}
    <div className="text-sm text-gray-700" style={{margin:"20px"}}>
      <p className="font-semibold mb-2">Registered Office</p>
      <p>
        The Woodenstreet Furniture's Pvt.Ltd.-101–104, Luhadia Tower,
        Ashok Marg, C Scheme, Jaipur–302001.
      </p>
      <p className="mt-2">
        Corporate Identity Number:
        <br />
        <span className="font-medium">
          U36100RJ2015PTC047992
        </span>
      </p>
    </div>

  </div>
</div>


    </footer>
  );
};

export default Footer;
