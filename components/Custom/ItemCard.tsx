import { useCartSheet } from "@/context/CartProvider";
import { useStateContext } from "@/context/StateContext";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

type Product = {
  product: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
    image: string;
    category: string;
  };
};

const ItemCard = ({ product }: Product) => {
  const { name, price, image } = product;
  const { onAdd } = useStateContext();
  const { setOpen } = useCartSheet();

  const AddProductToCart = () => {
    try {
      onAdd(product, 1);
      toast(`${product.name} added to Cart`, {
        style: {
          background: "#A0522D",
          color: "#fff",
        },
        className: "rounded-lg shadow-md font-medium text-xl border-none outline-none",
      });
      setOpen(true);
    } catch (error) {
      toast("There was an error adding product to Cart");
      console.log(error);
    }
  };

  return (
    <div className="relative group cursor-pointer max-md:mt-10">
      {/* Product Image */}
      <div className="relative w-full h-[400px] rounded-[30px] overflow-hidden">
        <Image
          src={image}
          alt="product"
          width={400}
          height={400}
          className="w-full h-full rounded-[30px] object-cover"
        />

        {/* Slide-up Button (inside image) */}
        <div
          className="hidden lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:flex justify-center 
          opacity-0 translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 
          transition-all duration-300 pb-4
          md:opacity-0 md:translate-y-6 md:group-hover:translate-y-0 md:group-hover:opacity-100
          max-md:opacity-100 max-md:translate-y-0"
        >
          <button
            className="bg-[#A0522D] text-white text-[16px] lg:text-[20px] font-medium mx-5 mb-5 w-full py-3 rounded-[20px] shadow-lg cursor-pointer"
            onClick={() => AddProductToCart()}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Title */}
      <div className="flex flex-col justify-center max-md:px-5">
        <div className="flex justify-between mt-5">
          <p className="text-center text-[24px]">{name}</p>
          <p className="text-center text-[24px]">GHS {price}</p>
        </div>

        <button className="bg-[#A0522D] text-white text-[20px] lg:text-[30px] font-medium w-full py-3 rounded-[20px] shadow-lg cursor-pointer lg:hidden">
          Add to Cart
        </button>
      </div>

      {/* Shopping Bag Icon */}
      <div className="absolute top-5 right-5">
        <ShoppingBag
          stroke="black"
          size={30}
          onClick={() => AddProductToCart()}
        />
      </div>
    </div>
  );
};

export default ItemCard;
