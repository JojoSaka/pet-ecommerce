"use client";

import React, { useState } from "react";
import { navItems } from "@/lib";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  // const { totalQuantities } = useStateContext();
  const [active, setActive] = useState("/");

  // useGSAP(() => {
  //   const navTween = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "nav",
  //       start: "bottom top",
  //     },
  //   });

  //   navTween.fromTo(
  //     "nav",
  //     { backgroundColor: "#ffffff95" },
  //     {
  //       backgroundColor: "#ffffff90",
  //       backgroundFilter: "blur(10px)",
  //       duration: 1,
  //       ease: "power1.inOut",
  //     }
  //   );
  // }, []);

  return (
    <nav>
      <div className="fixed top-0 left-0 right-0 w-[90%] z-50 flex justify-between items-center px-5 py-3 bg-black/40 mx-auto mt-5 rounded-[20px]">
        <div className="text-white">Becklil&apos;s A&P</div>

        <div>
          <ul className="flex gap-10 font-bold">
            {navItems.map((item) => (
              <li key={item.name} className="relative text-white text-[14px]">
                <Link
                  href={item.href}
                  onClick={() => setActive(item.href)}
                  className={`pb-1 relative inline-block 
                after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                after:bottom-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
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
              <ShoppingBag stroke="white"/>

              {/* <p className="absolute top-2 left-2.5">
                {totalQuantities}
              </p> */}
            </div>
          </Link>

          <Button className="bg-transparent border-[2px] border-white w-[140px] h-[40px] cursor-pointer hover:bg-black/50">
            <p className="font-medium text-[14px] text-[#EBEBEB]">Contact</p>
          </Button>

          <Button className="bg-white border-[2px] border-white w-[140px] h-[40px] cursor-pointer hover:bg-white/90">
            <p className="font-medium text-[14px] text-black">Browse products</p>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
