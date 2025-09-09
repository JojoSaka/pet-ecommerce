"use client"

import { ArrowRight } from "lucide-react";
import React from "react";
import ItemCard from "./Custom/ItemCard";
import { storeProducts } from "@/lib";
import { useRouter } from "next/navigation";

const StoreSection = () => {
  const router = useRouter();

  return (
    <div className="bg-[#F5F5DC] pt-5 pb-40">
      <div className="w-[90%] mx-auto my-5 lg:my-20">
        <h1 className="font-bold text-xl mb-3">BECKLILS</h1>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <h1 className="text-[40px] font-bold">Store</h1>
          <div className="flex items-center gap-2 border-b-2 border-b-black w-[90px] lg:w-[140px] cursor-pointer" onClick={() => router.push("/shop")}>
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

      <div className="w-[90%] mx-auto grid grid-cols-1 max-md:hidden lg:grid-cols-3 gap-10">
        {storeProducts.map((product) => (
            <div key={product.id}>
              <ItemCard product={product} />
            </div>
          ))}
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:hidden">
        {storeProducts.slice(0.2).map((product) => (
            <div key={product.id}>
              <ItemCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default StoreSection;
