"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { MENUHEADER } from "@/src/config";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <div className="flex w-250 text-base items-center gap-4">
      {MENUHEADER.map((item, index) => (
        <React.Fragment key={index}>
          <div className="relative group">
            {item.submenu ? (
              <>
                <button className="flex justify-between items-center text-white py-2 px-5 text-left cursor-pointer uppercase w-full rounded-t-[10px] bg-transparent group-hover:bg-secondary transition-colors duration-100">
                  {item.title}
                  <Icon
                    id="svg-simple-thin-arrow"
                    className="ml-2 text-white transition-transform duration-200"
                    width={16}
                  />
                </button>

                {/* Submenu */}
                <div className="absolute top-full left-0 bg-white hidden group-hover:block z-10 rounded-b-[10px] min-w-40 w-full shadow-md">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block text-sm text-primary py-2.5 px-4 hover:text-secondary active:text-secondary hover:font-bold active:font-bold"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={item.href}
                className="flex justify-between items-center text-white py-2 px-5 text-left hover:bg-secondary active:bg-secondary uppercase rounded-[10px]"
              >
                {item.title}
              </Link>
            )}
          </div>

          {index < MENUHEADER.length - 1 && (
            <div className="flex items-center">
              <div className="w-px bg-white my-1 h-4"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
