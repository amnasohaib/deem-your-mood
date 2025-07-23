"use client";

import { Cinzel_Decorative, Playfair_Display } from "next/font/google";
import { emotionGradients } from "@/utils/gradientConfig";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });
const cinzel = Cinzel_Decorative({ weight: "700", subsets: ["latin-ext"] });

const EmotionCard = ({ emotion, index }) => (
  <div
    className={`transition-all m-10 border border-black/40 rounded-xl duration-700 ease-in-out transform opacity-100 translate-y-0`}
    style={{
      transitionDelay: `${index * 150}ms`,
      ...emotionGradients[emotion.key],
    }}
  >
    <div className="min-h-[400px] flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
      <div className="flex-1 lg:pr-12 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
            {emotion.icon}
          </div>
          <div>
            <h2
              className={`${cinzel.className} uppercase text-4xl lg:text-5xl font-bold text-gray-800 mb-2`}
            >
              {emotion.name}
            </h2>
            <p
              className={`${playfair.className} text-lg text-gray-600 uppercase tracking-wider`}
            >
              {emotion.color}
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-md md:text-lg leading-relaxed max-w-2xl">
          {emotion.description}
        </p>
      </div>

      <div className="flex-shrink-0 mt-8 lg:mt-0">
        <div className="relative">
          <div className="w-64 h-64 lg:w-80 lg:h-80 bg-white/30 backdrop-blur-sm rounded-full border border-white/40 flex items-center justify-center overflow-hidden shadow-2xl">
            <img
              src={emotion.catImage}
              alt={`${emotion.name} cat`}
              className="w-48 h-48 lg:w-60 lg:h-60 object-contain transition-transform duration-500 hover:scale-110"
            />
          </div>

          <div className="absolute -top-4 -right-4 w-8 h-8 bg-white backdrop-blur-sm rounded-full animate-pulse"></div>
          <div
            className="hidden sm:block absolute -bottom-6 -left-6 w-6 h-6 bg-white backdrop-blur-sm rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="hidden sm:block absolute top-1/2 -left-8 w-4 h-4 bg-white backdrop-blur-sm rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

export default EmotionCard;