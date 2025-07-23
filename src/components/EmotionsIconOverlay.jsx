"use client";

import { iconPositions } from "@/utils/iconPositionConfig";
import AnimatedIcon from "./AnimatedIcon";
import { emotionIcons } from "@/utils/iconConfig";

const EmotionIconsOverlay = ({ currentEmotion }) => {
  if (!currentEmotion || !emotionIcons[currentEmotion]) return null;

  const icons = emotionIcons[currentEmotion];

  return (
    <>
    <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          100% {
            opacity: 0.4;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-15px);
          }
          70% {
            transform: translateY(-7px);
          }
          90% {
            transform: translateY(-3px);
          }
        }
      `}</style>
      {iconPositions.map((position, index) => (
        <AnimatedIcon
          key={`${currentEmotion}-${index}`}
          icon={icons[index % icons.length]}
          position={position}
          delay={index * 200}
        />
      ))}
    </>
  );
};

export default EmotionIconsOverlay;
