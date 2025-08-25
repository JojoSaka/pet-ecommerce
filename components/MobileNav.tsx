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
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
import { navItems } from "@/lib";

const MobileNav = () => {
  const { totalQuantities } = useStateContext();

  return (
    <nav className="flex justify-between items-center p-3 fixed top-0 left-0 w-full z-50">
      <div className="text-gray-199 font-semibold">Becklil&apos;s A&P</div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Link href={"/cart"}>
            <Image src={"/icons/bag.png"} alt="bag" width={30} height={30} />

            <p className="absolute top-2 left-2.5">{totalQuantities}</p>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger>
            <div className="cursor-pointer">
              <Image src={"/icons/menu.png"} alt="add" width={25} height={25} />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Becklil&apos;s A&P</SheetTitle>
            </SheetHeader>

            <SheetClose>
              <nav>
                <ul>
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <li className="my-5">{item.name}</li>
                    </SheetClose>
                  ))}
                </ul>
              </nav>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNav;
