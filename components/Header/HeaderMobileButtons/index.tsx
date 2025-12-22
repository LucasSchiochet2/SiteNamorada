"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "../../icons";
import { MENUHEADER } from "@/src/config";

export default function HeaderMobileButtons() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const menuContainerRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuOpen &&
        menuContainerRef.current &&
        !menuContainerRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }

      if (
        searchOpen &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(target)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, searchOpen]);

  const dropdownTop = "top-16 lg:top-24";

  return (
    <div className="flex gap-4 xl:hidden">
      {/* MENU BUTTON + DROPDOWN */}
      <div ref={menuContainerRef}>
        <button
          className="p-2 cursor-pointer"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setSearchOpen(false);
          }}
        >
         <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[30px] h-[30px] text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
        </button>

        {menuOpen && (
          <div
            className={`fixed ${dropdownTop} right-1 w-72 bg-primary shadow-lg rounded py-5 z-50`}
          >
            <MenuList onItemClick={closeAll} />
          </div>
        )}
      </div>

      {/* SEARCH BUTTON + DROPDOWN */}
      <div ref={searchContainerRef} className="sm:hidden">
        <button
          className="p-2 cursor-pointer"
          onClick={() => {
            setSearchOpen((prev) => !prev);
            setMenuOpen(false);
          }}
        >
          <Icon id="svg-magnifying-glass" className="text-white" width={30} />
        </button>

        {searchOpen && (
          <div
            className={`fixed ${dropdownTop} right-1 w-72 bg-primary shadow-lg rounded py-5 px-5 z-50`}
          >
          </div>
        )}
      </div>
    </div>
  );
}

function MenuList({ onItemClick }: { onItemClick: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col text-xs overflow-y-scroll no-scrollbar max-h-[70dvh]">
      {MENUHEADER.map((item, index) =>
        item.submenu ? (
          <div key={index}>
            <button
              onClick={() => toggleSubmenu(index)}
              className={`flex justify-between items-center text-white py-2 px-5 text-left cursor-pointer uppercase w-full transition-colors duration-200 ${
                openIndex === index
                  ? "bg-secondary"
                  : "hover:bg-secondary active:bg-secondary"
              }`}
            >
              {item.title}
              <Icon
                id="svg-simple-arrow"
                className={`ml-2 text-white transition-transform duration-200 ${
                  openIndex === index ? "rotate-90" : ""
                }`}
                width={10}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    onClick={onItemClick}
                    className="flex justify-between items-center text-white py-2 px-8 text-left hover:bg-secondary active:bg-secondary uppercase"
                  >
                    {subItem.title}
                  </Link>
                ))}
                <div className="h-1 bg-secondary my-2 mx-8 rounded-full"></div>
              </div>
            </div>
          </div>
        ) : (
          <Link
            key={index}
            href={item.href}
            onClick={onItemClick}
            className="flex justify-between items-center text-white py-2 px-5 text-left hover:bg-secondary active:bg-secondary uppercase"
          >
            {item.title}
          </Link>
        ),
      )}
    </div>
  );
}
