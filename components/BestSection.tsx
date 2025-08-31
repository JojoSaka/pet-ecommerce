import React from "react";
import { Button } from "./ui/button";

const BestSection = () => {
  return (
    <div className="flex bg-white justify-center">
      {/* <div className="flex flex-col lg:flex-row w-full md:w-[90%] lg:w-[80%] py-10 lg:py-20 gap-10 lg:gap-20"> */}
      <div className="flex flex-col justify-center w-full md:w-[90%] lg:w-[80%] py-10 lg:py-20">
        {/* LEFT SECTION */}
        {/* <div className="flex flex-col items-center lg:items-start space-y-5"> */}
        {/* Row 1 */}
        {/* <div className="flex gap-5">
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
          </div> */}

        {/* Row 2 */}
        {/* <div className="flex gap-5">
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
          </div> */}

        {/* Row 3 */}
        {/* <div className="flex gap-5">
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
          </div> */}
        {/* </div> */}

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-center text-center px-5 md:px-10 lg:px-0 space-y-4 lg:space-y-6">
          <h4 className="text-2xl sm:text-3xl lg:text-[40px] font-medium leading-snug">
            Best online pet product <br /> ecommerce service in your area
          </h4>
          {/* <p className="text-base sm:text-lg lg:text-2xl">
            Trusted Online Store for Quality Pet Products and Supplies
          </p> */}
          <p className="text-[20px] font-medium lg:text-[30px]">
            Found a product you want?
          </p>
          <div className="flex justify-center gap-5">
            <Button className="bg-transparent border-[1px] border-[#A0522D] w-[160px] h-[40px] lg:w-[273px] lg:h-[72px] cursor-pointer hover:bg-black/10 rounded-[8px] lg:rounded-[17px] text-black">
              <p className="font-medium text-[#A0522D] text-[16px] lg:text-[25px]">
                Contact
              </p>
            </Button>

            <Button className="bg-[#A0522D] w-[160px] h-[40px] lg:w-[273px] lg:h-[72px] cursor-pointer hover:bg-[#A0522D]/90 rounded-[8px] lg:rounded-[17px]">
              <p className="font-medium text-[16px] lg:text-[25px] text-white">
                Browse products
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSection;
