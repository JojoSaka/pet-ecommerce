import Image from "next/image";
import React from "react";

const LogosMarquee = () => {
  const logos = [
    "/assets/logo1.png",
    "/assets/logo2.png",
    "/assets/logo3.png",
    "/assets/logo4.png",
    "/assets/logo5.png",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#F5F5DC] py-1">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Duplicate logos so it loops seamlessly */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="mx-8 flex-shrink-0">
            <Image
              src={logo}
              alt={`logo-${index}`}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosMarquee;
