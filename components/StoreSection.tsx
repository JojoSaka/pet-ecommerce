import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

const StoreSection = () => {
  return (
    <div className="bg-[#F5F5DC] pt-5 pb-20">
      <div className="w-[90%] mx-auto my-20">
        <h1>Logo</h1>
        <div className="flex justify-between items-center">
          <h1 className="text-[40px] font-bold">Store</h1>
          <div className="flex items-center gap-2">
            <h4 className="underline underline-offset-1 font-black text-[24px]">
              Shop All
            </h4>
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="relative">
          <div className="w-full h-full rounded-[30px]">
            <Image
              src={"/assets/product.jpg"}
              alt="product"
              width={500}
              height={400}
              className="overflow-hidden w-full h-full rounded-[30px]"
            />
          </div>
          <p className="text-center text-[24px] mt-5">Dog food extra spice GHS 20</p>
          <div className="absolute top-5 right-5">
            <ShoppingBag stroke="black" size={30} />
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="w-full h-full rounded-[30px]">
            <Image
              src={"/assets/product.jpg"}
              alt="product"
              width={500}
              height={400}
              className="overflow-hidden w-full h-full rounded-[30px]"
            />
          </div>
          <p className="text-center text-[24px] mt-5">Dog food extra spice GHS 20</p>
          <div className="absolute top-5 right-5">
            <ShoppingBag stroke="black" size={30} />
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="w-full h-full rounded-[30px]">
            <Image
              src={"/assets/product.jpg"}
              alt="product"
              width={500}
              height={400}
              className="overflow-hidden w-full h-full rounded-[30px]"
            />
          </div>
          <p className="text-center text-[24px] mt-5">Dog food extra spice GHS 20</p>
          <div className="absolute top-5 right-5">
            <ShoppingBag stroke="black" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSection;
