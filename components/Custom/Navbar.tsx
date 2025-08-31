"use client";

import { navItems } from "@/lib";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("/");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5DC] py-5">
      <div className="w-[100%] flex justify-center">
        <div className="flex justify-between items-center w-[90%]">
          <div className="text-[20px] font-extrabold">BECKLIL'S</div>
          <div className="flex items-center gap-30">
            <div>
              <ul className="flex gap-5 font-bold">
                {navItems.map((item) => (
                  <li key={item.name} className="relative text-[14px]">
                    <Link
                      href={item.href}
                      onClick={() => setActive(item.href)}
                      className={`pb-1 relative inline-block 
                after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300
                ${
                  active === item.href
                    ? "after:w-[40%]" // Active: underline 40% of text width
                    : "after:w-0 hover:after:w-[40%]" // Inactive: no underline, expand on hover
                }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <Link href={"/cart"} onClick={() => setActive("")}>
                <div className="cursor-pointer relative">
                  <ShoppingBag stroke="black" />

                  {/* <p className="absolute top-2 left-2.5">
                {totalQuantities}
              </p> */}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
