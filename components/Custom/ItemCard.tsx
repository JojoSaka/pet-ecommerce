import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

const ItemCard = () => {
  return (
    <div className="relative group cursor-pointer max-md:mt-10">
      {/* Product Image */}
      <div className="relative w-full h-full rounded-[30px] overflow-hidden">
        <Image
          src={"/assets/product.jpg"}
          alt="product"
          width={400}
          height={400}
          className="w-full h-full rounded-[30px] object-cover"
        />

        {/* Slide-up Button (inside image) */}
        <div
          className="absolute bottom-0 left-0 right-0 flex justify-center 
          opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 
          transition-all duration-300 pb-4
          md:opacity-0 md:translate-y-6 md:group-hover:translate-y-0 md:group-hover:opacity-100
          max-md:opacity-100 max-md:translate-y-0"
        >
          <button className="bg-[#A0522D] text-white text-[20px] lg:text-[30px] font-medium mx-5 mb-5 w-full py-3 rounded-[20px] shadow-lg cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Title */}
      <p className="text-center text-[24px] mt-5">
        Dog food extra spice GHS 20
      </p>

      {/* Shopping Bag Icon */}
      <div className="absolute top-5 right-5">
        <ShoppingBag stroke="black" size={30} />
      </div>
    </div>
  );
};

export default ItemCard;
