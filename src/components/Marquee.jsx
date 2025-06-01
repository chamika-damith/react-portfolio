import React from "react";
import { TESTIMONIALS } from "../assets/constants";

export default function Marquee() {
  return (
    <div className="w-full  mb-20 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-red-400 to-pink-500 drop-shadow-lg">
        Trusted by Clients
      </h2>
      <div className="relative flex w-full">
        <div className="flex animate-marquee whitespace-nowrap gap-8">
          {TESTIMONIALS.concat(TESTIMONIALS).map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[90vw] sm:w-[340px] max-w-xs   p-4 sm:p-6 flex flex-col items-center shadow-xl mx-2 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <div className="relative mb-4" >
                <span className="absolute -inset-1 bg-gradient-to-tr from-red-500/30 via-pink-400/20 to-blue-400/20 rounded-full blur opacity-60"></span>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="relative w-16 h-16 rounded-full object-cover border-2 border-pink-400 shadow-md"
                />
              </div>
              <div className="text-lg font-semibold text-white mb-1 drop-shadow-sm w-full text-center">
                {testimonial.name}
              </div>
              <div className="text-xs font-medium text-pink-300 mb-2 tracking-wide uppercase w-full text-center">
                {testimonial.company}
              </div>
              <div className="text-gray-300 text-center text-sm italic leading-relaxed break-words w-full max-w-full overflow-hidden">
                “{testimonial.text}”
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black/80 to-transparent"></div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
} 