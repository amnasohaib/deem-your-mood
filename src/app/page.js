"use client";

import EmotionIconsOverlay from "@/components/EmotionsIconOverlay";
import { emotionGradients } from "@/utils/gradientConfig";
import { emotionImages } from "@/utils/imageConfig";
import { Cinzel_Decorative, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });
const cinzel = Cinzel_Decorative({ weight: "700", subsets: ["latin-ext"] });

export default function Home() {
  const [emotion, setEmotion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gradient, setGradient] = useState(emotionGradients.neutral);
  const [image, setImage] = useState(emotionImages.neutral);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showIcons, setShowIcons] = useState(true);

  const handleEmotionChange = async (newEmotion, newGradient, newImage) => {
    setIsTransitioning(true);
    setShowIcons(false);

    setTimeout(() => {
      setEmotion(newEmotion);
      setGradient(newGradient);
      setImage(newImage);

      setTimeout(() => {
        setIsTransitioning(false);
        setShowIcons(true);
      }, 100);
    }, 300);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      setEmotion(null);
      const classifyTerm = event.target.value;
      setLoading(true);

      try {
        const response = await fetch("/api/classify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: classifyTerm }),
        });

        const data = await response.json();
        console.log("classify response:", response.status, data);

        if (response.ok && data) {
          const newEmotion = data[0][0];
          const newGradient =
            emotionGradients[newEmotion.label] || emotionGradients.neutral;
          const newImage =
            emotionImages[newEmotion.label] || emotionImages.neutral;

          await handleEmotionChange(newEmotion, newGradient, newImage);
        }
      } catch (error) {
        console.error("Error during classification:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full h-[calc(100vh-7rem)]">
      <div
        style={gradient}
        className="absolute -z-3 top-0 w-full min-h-screen transition-all duration-1000 ease-in-out"
      />

      <div
        className={`transition-opacity duration-500 ${
          showIcons ? "opacity-100" : "opacity-0"
        }`}
      >
        <EmotionIconsOverlay currentEmotion={emotion?.label?.toLowerCase()} />
      </div>

      <div
        className={`${playfair.className} flex flex-col gap-4 items-center justify-center h-full`}
      >
        <h1 className="text-[16px]">let's see how you are feeling today</h1>

        <div className="relative">
          <input
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="write your feelings..."
            className="w-70 h-40 sm:w-155 sm:h-53 text-center border border-[1px] border-opacity-50 p-2 rounded-[20px] bg-[#EFDDD9] opacity-50 focus:outline-none focus:ring-none"
          />

          <div className="absolute -bottom-35 -right-10 pointer-events-none">
            <img
              src={image}
              className={`transition-all duration-700 ease-in-out transform ${
                isTransitioning
                  ? "opacity-0 scale-75 -translate-y-4"
                  : "opacity-100 scale-100 translate-y-0"
              }`}
              style={{
                transitionTimingFunction: isTransitioning
                  ? "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                  : "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
            />
          </div>
        </div>

        {loading && (
          <div className="mt-4 text-lg flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {emotion && (
          <div
            className={`space-y-2 mt-25 transition-all text-center duration-600 ease-in-out transform ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <h2 className="text-[14px]">Looks like you are feeling</h2>
            <h2 className={`${cinzel.className} text-2xl uppercase`}>
              {emotion.label}
            </h2>

            <p className="mt-10 sm:mt-20 text-[10px] sm:text-[14px]">
              <Link href={"/themes"}>
                click <span className="hover:underline">here</span> to know more
                about this emotion and it's theme
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
