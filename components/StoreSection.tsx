import { ArrowRight } from "lucide-react";
import React from "react";
import ItemCard from "./Custom/ItemCard";

const StoreSection = () => {
  return (
    <div className="bg-[#F5F5DC] pt-5 pb-20">
      <div className="w-[90%] mx-auto my-10 lg:my-20">
        <h1>Logo</h1>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <h1 className="text-[40px] font-bold">Store</h1>
          <div className="flex items-center gap-2 border-b-2 border-b-black w-[90px] lg:w-[140px] cursor-pointer">
            <h4
              className="font-black text-[13px] lg:text-[24px]"
              style={{ fontFamily: "Montserrat" }}
            >
              Shop All
            </h4>
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};

export default StoreSection;
