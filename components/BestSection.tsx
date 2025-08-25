import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const BestSection = () => {
  return (
    <div className="flex bg-violet-100 justify-center">
      <div className="flex flex-col lg:flex-row w-full md:w-[90%] lg:w-[80%] py-10 lg:py-20 gap-10 lg:gap-20">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col items-center lg:items-start space-y-5">
          {/* Row 1 */}
          <div className="flex gap-5">
            <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full bg-blue-200 flex justify-center items-center">
              <Image
                src={"/assets/puppy.png"}
                alt="puppy"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52 flex justify-center items-center bg-violet-800">
              <p className="text-xl sm:text-3xl lg:text-4xl text-white font-bold">
                dog
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-5">
            <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52 flex justify-center items-center bg-orange-200">
              <p className="text-xl sm:text-3xl lg:text-4xl text-white font-bold">
                cat
              </p>
            </div>
            <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full bg-amber-300 flex justify-center items-center">
              <Image
                src={"/assets/cat.png"}
                alt="cat"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex gap-5">
            <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52 rounded-full bg-blue-300 flex justify-center items-center">
              <Image
                src={"/assets/parrot.png"}
                alt="parrot"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-52 lg:h-52 flex justify-center items-center bg-green-300">
              <p className="text-xl sm:text-3xl lg:text-4xl text-white font-bold">
                bird
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-center text-center lg:text-left px-5 md:px-10 lg:px-0 space-y-4 lg:space-y-6">
          <h4 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug">
            Best online pet product ecommerce service in your area
          </h4>
          <p className="text-base sm:text-lg lg:text-2xl">
            Trusted Online Store for Quality Pet Products and Supplies
          </p>
          <p className="text-sm sm:text-base lg:text-xl">
            Found a product you want?
          </p>
          <div>
            <Button className="px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 bg-orange-200 cursor-pointer rounded-[30px] text-black font-bold text-sm sm:text-lg lg:text-xl hover:bg-orange-300">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSection;