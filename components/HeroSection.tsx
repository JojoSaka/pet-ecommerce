"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
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
    <section className="flex justify-center py-10 md:py-16 relative mt-14">
       <div
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{ backgroundImage: `url(${"/assets/hero-bg.jpg"})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row gap-10 z-20">
        {/* Left Side (Text) */}
        <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
          <h1 className="title text-3xl text-gray-200 md:text-5xl lg:text-[75px] lg:leading-[1.2] font-bold">
            FLUFF & TUFF
          </h1>
          <h1 className="subtitle text-3xl text-gray-200 md:text-5xl lg:text-[75px] lg:leading-[1.2] font-semibold">
            Buy for your Pet Whatever it Needs
          </h1>
          <p className="subtitle text-base md:text-lg lg:text-xl text-gray-200">
            Let&apos;s get real, you do not have to be a Veterinary Nutritionist
            to know good food. But it is nice to have one on staff.
          </p>

          <Button className="px-6 py-6 md:px-8 lg:px-10 bg-orange-200 cursor-pointer rounded-[30px] text-black font-bold text-base md:text-lg hover:bg-orange-300">
            Browse all products
          </Button>
        </div>

        {/* Right Side (Image) */}
        <div className="lg:w-1/2 flex justify-center max-md:mx-10">
          <Image
            src={"/assets/petfood.jpg"}
            alt="petfood"
            width={500}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
