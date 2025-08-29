import Image from "next/image";
import React from "react";

const InfoBanner = () => {
  return (
    <div className="bg-[#F5F5DC]">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between w-[90%] mx-auto py-20">
        {/* Delivery Time */}
        <div className="flex gap-5">
          <div>
            <Image src="/icons/clock.png" alt="clock" width={30} height={30} />
          </div>
          <div className="space-y-2">
            <h4 className="font-bold">Delivery Time</h4>
            <p>Mon-Sat: 9:00AM - 7:00PM</p>
            <p>Sun: 9:00AM - 5:00PM</p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex gap-5">
          <div>
            <Image
              src="/icons/telephone.png"
              alt="phone"
              width={30}
              height={30}
            />
          </div>
          <div className="space-y-2">
            <h4 className="font-bold">Contact Us</h4>
            <p>+233 56-263-3546</p>
            <p>+233 56-263-3546</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-5">
          <div>
            <Image src="/icons/email.png" alt="email" width={30} height={30} />
          </div>
          <div className="space-y-2">
            <h4 className="font-bold">Email</h4>
            <p>petshop@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
