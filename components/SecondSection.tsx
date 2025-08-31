import Image from "next/image";
import React from "react";

const SecondSection = () => {
  return (
    <div className="w-[90%] mx-auto my-20 space-y-20">
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2">
          <h1 className="font-bold text-[40px] max-md:text-center">About</h1>
        </div>
        <div className="lg:w-1/2 lg:text-[24px] max-md:text-[16px]">
          <p className="max-md:text-center">
            We are a pet shop dedicated to your pet&apos;s health, comfort, and
            happiness, providing high-quality products for a convenient and
            enjoyable shopping experience.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="rounded-[20px] lg:rounded-[30px] h-[284px] lg:h-[375px] bg-[#A0522D] px-10 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Image src={"/assets/quality.png"} alt="quality" width={50} height={50} className="mb-8"/>
            <h4 className="text-white text-[25px] text-center">
              Quality Product
            </h4>
            <p className="text-white text-[20px] text-center lg:hidden">
              Input queries in plain language
              to retrieve valuable insights.
            </p>
            <p className="text-white text-[20px] text-center max-md:hidden">
              Input queries in plain language <br />
              to retrieve valuable insights.
            </p>
          </div>
        </div>
        <div className="rounded-[20px] lg:rounded-[30px] h-[284px] lg:h-[375px] bg-[#A0522D] px-10 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Image src={"/assets/support.png"} alt="support" width={50} height={50} className="mb-8"/>
            <h4 className="text-white text-[25px] text-center">
              24/7 Support
            </h4>
            <p className="text-white text-[20px] text-center lg:hidden">
              Input queries in plain language
              to retrieve valuable insights.
            </p>
            <p className="text-white text-[20px] text-center max-md:hidden">
              Input queries in plain language <br />
              to retrieve valuable insights.
            </p>
          </div>
        </div>
        <div className="rounded-[20px] lg:rounded-[30px] h-[284px] lg:h-[375px] bg-[#A0522D] px-10 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <Image src={"/assets/delivery.png"} alt="delivery" width={50} height={50} className="mb-8"/>
            <h4 className="text-white text-[25px] text-center">
              Nationwide Delivery
            </h4>
            <p className="text-white text-[20px] text-center lg:hidden">
              Input queries in plain language
              to retrieve valuable insights.
            </p>
            <p className="text-white text-[20px] text-center max-md:hidden">
              Input queries in plain language <br />
              to retrieve valuable insights.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <h1 className="font-bold text-[30px] lg:text-[40px] text-center">Get the valuable needs <br /> of latest products</h1>
        <h4 className="font-medium text-[20px] lg:text-[30px] text-center hidden lg:block">Complete Collection of Pet Supplies for Dogs, Cats, <br /> Birds & More</h4>
        <h4 className="font-medium text-[20px] lg:text-[30px] text-center lg:hidden">Complete Collection of Pet Supplies for <br /> Dogs, Cats, Birds & More</h4>
      </div>
    </div>
  );
};

export default SecondSection;
