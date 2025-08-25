import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Info = () => {
  return (
    <section className="flex justify-center py-16 px-4">
      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-2xl md:text-3xl lg:text-[45px] font-semibold leading-snug">
            What makes us different from others
          </h1>

          <p className="text-base md:text-lg">
            We&apos;re not just another pet shop — we carefully select products
            that put your pet&apos;s health, comfort, and happiness first. From
            food to toys, every item is chosen with love and quality in mind.
          </p>

          <p className="text-base md:text-lg">
            What makes us different is our commitment to you and your pets. We
            offer convenience, trusted products, and a caring experience that
            makes shopping for your furry friends simple and joyful.
          </p>

          <Button className="px-6 py-4 md:px-10 md:py-6 bg-white cursor-pointer border-2 border-black rounded-[30px] text-black font-bold text-base md:text-lg hover:bg-[#E7E7E7]">
            Learn more
          </Button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col gap-10">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="space-y-4 flex-1 text-center sm:text-left">
              <div className="w-[60px] h-[60px] rounded-full bg-blue-200 flex justify-center items-center mx-auto sm:mx-0">
                <Image
                  src={"/assets/puppy.png"}
                  alt="puppy"
                  width={40}
                  height={40}
                />
              </div>
              <h4 className="text-lg md:text-xl font-bold">Quality Product</h4>
              <p className="text-sm md:text-base">For all areas in Ghana</p>
            </div>

            <div className="space-y-4 flex-1 text-center sm:text-left">
              <div className="w-[60px] h-[60px] rounded-full bg-blue-200 flex justify-center items-center mx-auto sm:mx-0">
                <Image
                  src={"/assets/puppy.png"}
                  alt="puppy"
                  width={40}
                  height={40}
                />
              </div>
              <h4 className="text-lg md:text-xl font-bold">24/7 Support</h4>
              <p className="text-sm md:text-base">Contact us on WhatsApp</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="space-y-4 flex-1 text-center sm:text-left">
              <div className="w-[60px] h-[60px] rounded-full bg-blue-200 flex justify-center items-center mx-auto sm:mx-0">
                <Image
                  src={"/assets/puppy.png"}
                  alt="puppy"
                  width={40}
                  height={40}
                />
              </div>
              <h4 className="text-lg md:text-xl font-bold">Delivery Available</h4>
              <p className="text-sm md:text-base">Any part of the country</p>
            </div>

            <div className="space-y-4 flex-1 text-center sm:text-left">
              <div className="w-[60px] h-[60px] rounded-full bg-blue-200 flex justify-center items-center mx-auto sm:mx-0">
                <Image
                  src={"/assets/puppy.png"}
                  alt="puppy"
                  width={40}
                  height={40}
                />
              </div>
              <h4 className="text-lg md:text-xl font-bold">Trusted Service</h4>
              <p className="text-sm md:text-base">Loved by pet owners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;