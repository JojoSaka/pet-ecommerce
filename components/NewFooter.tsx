import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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
            <ul className="text-white flex items-center gap-3">
              <li className="cursor-pointer">
                <div>
                  <FaWhatsapp className="w-7 h-7"/>
                </div>
              </li>
              <li className="cursor-pointer">
                <div>
                  <Instagram />
                </div>
              </li>
              <li className="cursor-pointer">
                <div>
                  <Facebook />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-[0.5px] border-white/30"/>

      <div className="py-10 w-[80%] lg:w-[90%] mx-auto text-white">
        &copy; 2025 SK Tech Solutions. All rights reserved.
      </div>
    </div>
  );
};

export default NewFooter;
