import { emotionImages } from "./imageConfig";
import {
  Heart,
  Sparkles,
  Droplets,
  Sun,
  Leaf,
  Flame,
  Shield,
} from "lucide-react";

export const emotions = [
  {
    name: "Joy",
    key: "joy",
    icon: <Sun className="w-8 h-8" />,
    description:
      "A feeling of great pleasure and happiness. Joy radiates warmth and positivity, bringing light to even the darkest moments. It's the emotion that connects us to life's beautiful experiences.",
    color: "Pink & Rose",
    catImage: emotionImages.joy,
  },
  {
    name: "Sadness",
    key: "sadness",
    icon: <Droplets className="w-8 h-8" />,
    description:
      "A natural emotional response to loss, disappointment, or grief. Sadness allows us to process difficult experiences and often leads to deeper empathy and understanding.",
    color: "Blue & Cyan",
    catImage: emotionImages.sadness,
  },
  {
    name: "Anger",
    key: "anger",
    icon: <Flame className="w-8 h-8" />,
    description:
      "An intense emotional response to perceived threats or injustices. While often viewed negatively, anger can motivate positive change and help establish important boundaries.",
    color: "Red & Coral",
    catImage: emotionImages.anger,
  },
  {
    name: "Fear",
    key: "fear",
    icon: <Shield className="w-8 h-8" />,
    description:
      "A protective emotion that alerts us to potential danger. Fear keeps us safe and cautious, though it can sometimes limit our growth if not properly understood.",
    color: "Purple & Lavender",
    catImage: emotionImages.fear,
  },
  {
    name: "Surprise",
    key: "surprise",
    icon: <Sparkles className="w-8 h-8" />,
    description:
      "The emotion of unexpected discovery and wonder. Surprise opens our minds to new possibilities and keeps life interesting and engaging.",
    color: "Yellow & Gold",
    catImage: emotionImages.surprise,
  },
  {
    name: "Disgust",
    key: "disgust",
    icon: <Leaf className="w-8 h-8" />,
    description:
      "A protective emotion that helps us avoid potentially harmful situations or substances. Disgust guides our choices and helps maintain our physical and moral boundaries.",
    color: "Green & Mint",
    catImage: emotionImages.disgust,
  },
  {
    name: "Neutral",
    key: "neutral",
    icon: <Heart className="w-8 h-8" />,
    description:
      "A balanced state of emotional equilibrium. Neutrality provides a calm foundation from which all other emotions can be experienced and understood.",
    color: "Rainbow Spectrum",
    catImage: emotionImages.neutral,
  },
];