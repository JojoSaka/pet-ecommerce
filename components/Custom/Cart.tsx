"use client";

import React, { useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { X } from "lucide-react";
import { useStateContext } from "@/context/StateContext";
import CartItem from "../CartItem";
import { Button } from "../ui/button";
import Link from "next/link";

const Cart = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (val: boolean) => void;
}) => {
  const { totalPrice, totalQuantities, cartItems, qty } = useStateContext();

  const cartSummary = cartItems
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} x${item.quantity} = GHS ${
          item.price * item.quantity
        }`
    )
    .join("\n");

  const message = `Hello, I'd like to place an order:\n\n${cartSummary}\n\nTotal: GHS ${totalPrice}`;

  const whatsappLink = `https://wa.me/${233204628959}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
    localStorage.setItem("qty", JSON.stringify(qty));
  }, [cartItems, totalPrice, totalQuantities, qty]);

  return (
    <div>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="right"
          className="bg-[#F5F5DC] outline-none border-none [&>button]:hidden px-3 pt-2 w-screen max-w-none sm:max-w-md"
        >
          {cartItems.length > 0 ? (
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-3">
                <SheetHeader>
                  <div className="flex justify-between items-center pt-2">
                    <SheetTitle className="font-bold">{`Cart (${qty})`}</SheetTitle>
                    <SheetClose asChild>
                      <X stroke="black" size={20} className="cursor-pointer" />
                    </SheetClose>
                  </div>
                </SheetHeader>

                <div className="w-full border-[0.2px] border-black" />

                <div className="space-y-5 h-[500px] overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <CartItem item={item} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-10 lg:py-5">
                <div className="w-full border-[0.2px] border-black" />
                <div className="flex justify-between py-5">
                  <h4>Subtotal</h4>
                  <p>
                    {new Intl.NumberFormat("en-GH", {
                      style: "currency",
                      currency: "GHS",
                    }).format(totalPrice)}
                  </p>
                </div>
                <Link href={whatsappLink} target="_blank">
                  <Button className="bg-[#A0522D] w-full h-[40px] cursor-pointer hover:bg-[#A0522D]/90 rounded-[8px] lg:rounded-full text-white">
                    <p className="font-medium lg:text-[16px]">CHECKOUT</p>
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              <div className="space-y-3">
                <SheetHeader>
                  <div className="flex justify-between items-center pt-2">
                    <SheetTitle className="font-bold">{`Cart (${qty})`}</SheetTitle>
                    <SheetClose asChild>
                      <X stroke="black" size={20} className="cursor-pointer" />
                    </SheetClose>
                  </div>
                </SheetHeader>

                <div className="w-full border-[0.2px] border-black" />
              </div>
              <div className="flex h-full items-center">
                <div className="space-y-5">
                  <p className="font-medium text-[16px]">
                    Your cart is currently empty
                  </p>

                  <SheetClose className="bg-[#A0522D] w-full h-[40px] cursor-pointer hover:bg-[#A0522D]/90 rounded-[8px] lg:rounded-full text-white">
                    <p className="font-medium lg:text-[16px] cursor-pointer">
                      KEEP SHOPPING
                    </p>
                  </SheetClose>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
