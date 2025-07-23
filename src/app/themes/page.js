"use client";

import { Playfair_Display } from "next/font/google";
import EmotionCard from "@/components/EmotionCard";
import { emotions } from "@/utils/emotionConfig";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function Themes() {
  return (
    <div className={`${playfair.className} min-h-screen`}>
      <div className="max-w-7xl text-center mx-auto px-6 py-4">
        <h1
          className={`${playfair.className} text-2xl md:text-3xl font-bold text-gray-800`}
        >
          Emotion Themes
        </h1>
      </div>

      <div
        className={`transition-all duration-600 ease-in-out opacity-100 scale-100
        `}
      >
        <div className="max-w-4xl mx-auto px-6 py-5 md:py-12 text-center">
          <h2
            className={`${playfair.className} text-lg md:text-2xl text-gray-800 mb-3 md:mb-6`}
          >
            The Psychology of Color & Emotion
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Each emotion in our detection system is carefully paired with colors
            that reflect its psychological impact. These gradients create an
            immersive experience that helps users connect with their emotional
            state through visual harmony.
          </p>
        </div>

        <div className="space-y-2">
          {emotions.map((emotion, index) => (
            <EmotionCard key={emotion.key} emotion={emotion} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
