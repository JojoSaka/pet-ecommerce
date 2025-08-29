import Image from "next/image";
import React from "react";

const NewFooter = () => {
  return (
    <div className="bg-[#A0522D]">
      <div className="w-[80%] lg:w-[90%] mx-auto flex flex-col lg:flex-row gap-10 justify-between py-10">
        <div>
          <h1>Logo</h1>
          <p className="text-white font-semibold text-[18px]">Becklil&apos;s Aquarium and Pet Shop</p>
        </div>

        <div className="flex gap-10">
          <div className="text-white space-y-5">
            <h4 className="font-bold text-xl">Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-bold text-white">Social Media</h4>
            <ul className="space-y-2 text-white">
              <li className="text-md flex items-center gap-3 cursor-pointer">
                <div>
                  <Image
                    src={"/icons/whatsapp.png"}
                    alt="whatsapp"
                    width={30}
                    height={30}
                  />
                </div>
                <p>WhatsApp</p>
              </li>
              <li className="text-md flex items-center gap-3 cursor-pointer">
                <div>
                  <Image
                    src={"/icons/instagram.png"}
                    alt="instagram"
                    width={30}
                    height={30}
                  />
                </div>
                <p>Instagram</p>
              </li>
              <li className="text-md flex items-center gap-3 cursor-pointer">
                <div>
                  <Image
                    src={"/icons/facebook.png"}
                    alt="facebook"
                    width={30}
                    height={30}
                  />
                </div>
                <p>Facebook</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-[0.5px] border-white/30"/>

      <div className="py-10 w-[80%] lg:w-[90%] mx-auto text-white">
        &copy; 2025 SK Tech Solutions
      </div>
    </div>
  );
};

export default NewFooter;
