import Image from "next/image";
import React from "react";
import { Product, useStateContext } from "@/context/StateContext";

type CartItemProps = {
  item: Product;
};

const CartItem = ({ item }: CartItemProps) => {
  const { toggleCartItemQuantity, onRemove } = useStateContext();
  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        <div className="w-[200px] space-y-3">
          <div className="flex justify-center items-center w-[200px] h-[200px] bg-gray-50">
            <Image src={"/assets/can.png"} alt="can" width={150} height={150} />
          </div>
          <div className="flex justify-between items-center border border-gray-300 rounded-3xl p-3">
            {item.quantity < 2 ? (
              <button className="cursor-pointer" onClick={() => onRemove(item)}>
                <Image
                  src={"/icons/bin.png"}
                  alt="bin"
                  width={20}
                  height={20}
                />
              </button>
            ) : (
              <button className="cursor-pointer" onClick={() => toggleCartItemQuantity(item._id, "dec")}>
                <Image
                  src={"/icons/minus.png"}
                  alt="bin"
                  width={20}
                  height={20}
                />
              </button>
            )}
            <p>{item.quantity}</p>
            <button className="cursor-pointer" onClick={() => toggleCartItemQuantity(item._id, "inc")}>
              <Image
                src={"/icons/increase.png"}
                alt="increase"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        <div className="text-md text-gray-800 space-y-2">
          <h4 className="font-bold">{item.name}</h4>
          <p>{item.category}</p>
          <p>Product available</p>
        </div>
      </div>

      <div>
        <p className="text-md font-bold">${item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
