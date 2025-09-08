// CartProvider.tsx
"use client";

import Cart from "@/components/Custom/Cart";
import { createContext, useContext, useState } from "react";

const CartContext = createContext<{
  open: boolean;
  setOpen: (val: boolean) => void;
}>({ open: false, setOpen: () => {} });

export const useCartSheet = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <CartContext.Provider value={{ open, setOpen }}>
      {children}
      <Cart open={open} onOpenChange={setOpen} />
    </CartContext.Provider>
  );
};