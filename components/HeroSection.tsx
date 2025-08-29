"use client";

import React from "react";
import { Button } from "./ui/button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });

    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.0,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.0,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
  }, []);

  return (
    <section className="flex justify-center py-10 md:py-16 relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${"/assets/hero-bg2.jpg"})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] z-20 mt-40">
        {/* Left Side (Text) */}
        <div className="space-y-10">
          <h1 className="text-[30px] max-md:px-10 text-center text-gray-200 md:text-5xl lg:text-[60px] font-bold">
            Buy for your pet 
            whatever it needs
          </h1>
          <p className="text-center text-[20px] md:text-lg lg:text-[30px] text-gray-200 lg:hidden">
            Let&apos;s get real, you do not have to be a <br /> Veterinary Nutritionist
            to know good food. But it is nice to have one <br /> on staff.
          </p>

          <p className="text-center text-[20px] md:text-lg lg:text-[30px] text-gray-200 max-md:hidden">
            Let&apos;s get real, you do not have to be a Veterinary Nutritionist
            to <br /> know good food. But it is nice to have one on staff.
          </p>

          <div className="flex justify-center gap-5">
            <Button className="bg-transparent border-[2px] border-white w-[140px] h-[40px] lg:w-[273px] lg:h-[72px] cursor-pointer hover:bg-black/50 rounded-[17px]">
              <p className="font-medium text-[12px] lg:text-[25px] text-[#EBEBEB]">
                Contact
              </p>
            </Button>

            <Button className="bg-white border-[2px] border-white w-[140px] h-[40px] lg:w-[273px] lg:h-[72px] cursor-pointer hover:bg-white/90 rounded-[17px]">
              <p className="font-medium text-[12px] lg:text-[25px] text-black">
                Browse products
              </p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
