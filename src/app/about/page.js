"use client";

import FloatingIcons from "@/components/FloatingIcons";
import { emotionGradients } from "@/utils/gradientConfig";
import { ExternalLink, Github, Linkedin, User, Heart } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function About() {
  const gradient = emotionGradients.disgust;
  return (
    <div className="w-full h-[calc(100vh-7rem)] ">
      <div className="flex flex-col items-center justify-center h-full px-8 sm:max-w-4xl mx-auto">
        <div
          style={gradient}
          className="absolute -z-3 top-0 w-full min-h-screen transition-all duration-1000 ease-in-out"
        />

        <FloatingIcons
          icons={[
            {
              x: 15,
              y: 15,
              component: <Github className="w-6 h-6 text-grey/30" />,
            },
            {
              x: 85,
              y: 20,
              component: <Linkedin className="w-6 h-6 text-grey/30" />,
            },
            {
              x: 10,
              y: 80,
              component: <ExternalLink className="w-5 h-5 text-grey/25" />,
            },
            {
              x: 90,
              y: 75,
              component: <Heart className="w-4 h-4 text-grey/20" />,
            },
          ]}
        />

        <div
          className={`${playfair.className} w-full text-center transition-all duration-600 ease-in-out transform text-center 
     opacity-100 translate-y-0`}
        >
          <div className="mb-8">
            <div className="w-18 h-18 sm:w-32 sm:h-32 bg-gray-200 opacity-50 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center">
              <User className="w-8 h-8 sm:w-16 sm:h-16 text-grey/70" />
            </div>

            <h1 className={`text-2xl sm:text-3xl text-grey mb-4`}>
              Amna Sohaib
            </h1>
            <h2
              className={`${playfair.className} sm:text-lg text-grey/80 uppercase tracking-wider`}
            >
              frontend developer
            </h2>
          </div>

          <div className="text-grey/90 space-y-10 mb-4 sm:max-w-2xl mx-auto">
            <p className="text-sm sm:text-lg leading-relaxed">
              On a journey to create meaningful digital experiences that bridge
              technology and human experience. I specialize in front-end leaning
              full-stack development, with a focus on building intuitive and
              engaging user interfaces.
            </p>

            <p className="text-sm text-grey/80">
              Look at my work, connect with me, or just say hi! I'm always
              excited to meet new people and explore new opportunities.
            </p>
          </div>

          <div className="flex gap-3 sm:gap-6 justify-center">
            <a
              href="https://www.amnasohaib.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:text-md gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-grey/20 backdrop-blur-sm border border-grey/30 rounded-[20px] text-grey hover:bg-grey/30 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-4 h-4" />
              Portfolio
            </a>

            <a
              href="https://www.linkedin.com/in/amna-sohaib-430a6b25b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:text-md gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-grey/20 backdrop-blur-sm border border-grey/30 rounded-[20px] text-grey hover:bg-grey/30 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href="https://github.com/amnasohaib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:text-md gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-grey/20 backdrop-blur-sm border border-grey/30 rounded-[20px] text-grey hover:bg-grey/30 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
