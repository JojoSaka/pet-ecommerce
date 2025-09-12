import Image from "next/image";
import React from "react";
import { useStateContext } from "@/context/StateContext";
import { X } from "lucide-react";

type CartItemProps = {
  item: Product;
};

const CartItem = ({ item }: CartItemProps) => {
  const { toggleCartItemQuantity, onRemove, decQty } = useStateContext();

  return (
    <div className="flex gap-5 justify-between w-full px-5">
      <div className="flex gap-5 w-1/2 rounded-[20px]">
        <div className="w-full h-[150px] rounded-[20px] overflow-hidden">
          <Image
            src={item.image}
            alt="can"
            width={300}
            height={300}
            className="w-full h-full overflow-hidden"
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-between py-1">
        <div className="flex justify-between">
          <div className="text-md text-gray-800 space-y-2">
            <h4 className="font-bold">{item.name}</h4>
            <p className="text-md font-bold">GHS {item.price}</p>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => {
              onRemove(item);
              decQty();
            }}
          >
            <X size={20} />
          </div>
        </div>

        <div className="flex justify-between items-center border border-gray-300 rounded-3xl p-3">
          {item.quantity < 2 ? (
            <button className="cursor-pointer" onClick={() => onRemove(item)}>
              <Image src={"/icons/bin.png"} alt="bin" width={20} height={20} />
            </button>
          ) : (
            <button
              className="cursor-pointer"
              onClick={() => toggleCartItemQuantity(item.id, "dec")}
            >
              <Image
                src={"/icons/minus.png"}
                alt="bin"
                width={20}
                height={20}
              />
            </button>
          )}
          <p>{item.quantity}</p>
          <button
            className="cursor-pointer"
            onClick={() => toggleCartItemQuantity(item.id, "inc")}
          >
            <Image
              src={"/icons/increase.png"}
              alt="increase"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
