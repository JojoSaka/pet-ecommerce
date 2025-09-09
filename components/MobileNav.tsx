"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { MobileNavItems } from "@/lib";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCartSheet } from "@/context/CartProvider";

const MobileNav = () => {
  const { setOpen } = useCartSheet();

  return (
    <nav className="flex justify-between items-center px-3 py-10 fixed top-0 left-0 right-0 w-full z-50 bg-[#F5F5DC]">
      <div className="font-bold">BECKLILS A&P</div>
      <div className="flex items-center gap-4">
        <div className="relative" onClick={() => setOpen(true)}>
          <ShoppingBag size={20}/>
        </div>
        <Sheet>
          <SheetTrigger className="outline-none border-none">
            <div className="cursor-pointer">
              <Menu className="text-black outline-none" width={30} height={30}/>
            </div>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-[#F5F5DC] outline-none border-none [&>button]:hidden"
          >
            <div className="flex justify-between items-center px-3 py-2">
              <SheetClose asChild>
                <X stroke="black" size={30} />
              </SheetClose>

              <SheetHeader>
                <SheetTitle className="font-bold">
                  Becklil&apos;s A&P
                </SheetTitle>
              </SheetHeader>
            </div>

            <nav className="mt-10">
              <ul>
                {MobileNavItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link href={item.href}>
                      <li className="px-3 my-5 text-[30px] font-bold">
                        {item.name}
                      </li>
                      <div className="w-full border-[0.5px] border-black/50"/>
                    </Link>
                  </SheetClose>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNav;
