"use client";

import React, { useState } from "react";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import { navItems } from "@/lib";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const { totalQuantities } = useStateContext();
  const [active, setActive] = useState("/");

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "#ffffff95" },
      {
        backgroundColor: "#ffffff90",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-16 py-3 bg-white/5">
        <div>Becklil&apos;s A&P</div>

        <div>
          <ul className="flex gap-10 font-bold">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
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
        <Link href={"/cart"} onClick={() => setActive("")}>
          <div className="cursor-pointer relative">
            <Image src={"/icons/bag.png"} alt="bag" width={30} height={30} />

            <p className="absolute top-2 left-2.5">{totalQuantities}</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
