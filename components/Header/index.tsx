"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderMobileButtons from "./HeaderMobileButtons";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    // Check scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full px-4 fixed top-0 z-50 transition-all duration-200 bg-linear-to-b from-black/40 to-black/0" ${isScrolled ? "bg-primary/95" : "bg-primary/95"}`}>
      <div className="container mx-auto flex justify-between items-center w-full gap-4 h-full transition-all duration-300">
        <div className="flex items-center gap-4 xl:gap-8">
          <HeaderMobileButtons />
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center max-[1040px]:hidden">
        <Link className="cursor-pointer" href="/">
          <Image
            alt="Logo"
            width={288}
            height={100}
            src="/logo.png"
            className={`transition-all duration-500 ${
              isScrolled
                ? "max-w-28 lg:max-w-40 xl:max-w-40"
                : "max-w-28 lg:max-w-52 xl:max-w-72"
            }`}
          />
        </Link>
        <HeaderMenu />
      </div>
    </header>
  );
}
