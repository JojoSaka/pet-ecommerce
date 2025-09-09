"use client";

import { Categories } from "@/lib";
import React, { useState } from "react";
import BestSection from "./BestSection";
import Products from "./Custom/Products";

const Shop = () => {
  const [cat, setCat] = useState<string>("All Products");

  return (
    <div className="space-y-10 pt-28 lg:pt-20">
      <div className="flex justify-center min-h-screen bg-[#F5F5DC]">
        <div className="w-[100%] md:w-[90%] space-y-10">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div>
              <h1 className="font-medium text-[40px] max-md:hidden">Store</h1>
              <h1 className="font-medium text-[40px] px-5 lg:hidden">STORE</h1>
            </div>
            <div className="flex flex-wrap lg:justify-center gap-4 md:gap-6 px-5">
              {Categories.map((category) => {
                const isActive = cat === category.title;

                return (
                  <div
                    key={category.id}
                    className={`pb-1 relative inline-block cursor-pointer
                after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
                after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300
                ${
                  isActive
                    ? "after:w-[40%]" // Active: underline 40% of text width
                    : "after:w-0 hover:after:w-[40%]" // Inactive: no underline, expand on hover
                }`}
                    onClick={() => setCat(category.title)}
                  >
                    <div className="flex gap-3">
                      <p className="font-medium text-[14px] lg:text-[24px]">{category.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PetProducts.map((product) => (
              <div key={product._id}>
                <ItemCard product={product} />
              </div>
            ))}
          </div> */}

          <div className="w-[90%] mx-auto">
            <Products category={cat}/>
          </div>
        </div>
      </div>

      <BestSection />
    </div>
  );
};

export default Shop;
