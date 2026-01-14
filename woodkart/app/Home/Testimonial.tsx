'use client';

import React from "react";

type Testimonial = {
  name: string;
  city: string;
  rating: number;
  videoThumb: string;
  excerpt: string;
};

const testimonials: Testimonial[] = [
  {
    name: "lorem ipsum",
    city: "lorem ipsum",
    rating: 4,
    videoThumb: "./src/ph.jpg",
    excerpt: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum "  },
  {
    name: "lorem ipsum dolor sit",
    city: "lorem ipsum",
    rating: 5,
    videoThumb: "./src/ph.jpg",
    excerpt: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum "  },

  {
    name: "lorem ipsum dolor",
    city: "lorem ipsum",
    rating: 4,
    videoThumb: "./src/ph.jpg",
    excerpt:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum ",},
];

const Home: React.FC = () => {
  return (
    <section className="px-4 lg:px-10 py-12">

      {/* ===== HEADER ===== */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h2 className="text-2xl font-sans text-gray-900">
            Testimonials
          </h2>
          <p className="text-sm font-sans text-gray-600 mt-1">
            lorem ipsum dolor sit amet
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

      {/* ===== TESTIMONIAL CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{marginTop:"20px"}}>

        {testimonials.map((item, index) => (
  <div
    key={index}
    className={`
      bg-white rounded-2xl
      shadow-xl
      flex flex-col overflow-hidden
      ${index > 0 ? "hidden md:flex" : "flex"}
    `}
  >

          
            <div className="relative h-[220px]">
              <img
                src={item.videoThumb}
                alt={item.name}
                className="w-full h-full object-cover rounded-3xl" style={{padding:"3%"}}
              />

            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-1" style={{marginTop:"3%", marginBottom:"10%", marginLeft:"8%", marginRight:"8%" }}>
              <p className="text-sm font-sans font-semibold text-gray-500 leading-relaxed line-clamp-5">
                {item.excerpt}
              </p>

              {/* RATING */}
              <div className="flex justify-center mt-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < item.rating
                        ? "text-blue-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* NAME */}
              <div className="text-center mt-4">
                <p className="font-sans text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm text-gray-600">
                  {item.city}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* MOBILE VIEW ALL */}
      <div className="flex justify-center mt-8 lg:hidden" style={{marginTop:"20px"}}>
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
  );
};

export default Home;
