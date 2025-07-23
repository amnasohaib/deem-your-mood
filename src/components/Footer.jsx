"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className={`${playfair.className}`}>
      <h2 className="bg-transparent text-xs sm:text-[18px] bottom-0 flex w-full justify-center items-center mb-1">
        designed & developed by amna sohaib
      </h2>
    </footer>
  );
};

export default Footer;
