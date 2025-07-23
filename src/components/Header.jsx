"use client";

import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <header
      className={`${playfair.className} text-xs sm:text-[18px] bg-transparent flex items-center justify-between py-[20px] px-[10px] sm:px-16 md:px-[157px] `}
    >
      <span className="flex items-center gap-3 sm:gap-4">
        <img className="w-7 sm:w-[40px]" src="/logo.svg"></img>
        <Link href={"/"}>deem your mood</Link>
      </span>

      <ul className="flex gap-4">
        <li>
          <Link href={"/about"} className="relative inline-block group">
            about
            <div className="absolute -bottom-[4px] left-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
          </Link>
        </li>

        <li>
          <Link href={"/contact"} className="relative inline-block group">
            contact
            <div className="absolute -bottom-[4px] left-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
          </Link>
        </li>
        <li>
          <Link href={"/themes"} className="relative inline-block group">
            themes
            <div className="absolute -bottom-[4px] left-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
