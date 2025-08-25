"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Product = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  [key: string]: any; // in case product has more fields
};

type StateContextType = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: Product[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
  toggleCartItemQuantity: (id: string, value: "inc" | "dec") => void;
  onRemove: (product: Product) => void;
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  setTotalQuantities: React.Dispatch<React.SetStateAction<number>>;
};

const Context = createContext<StateContextType | undefined>(undefined);

export const StateContext = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prev) => prev + product.price * quantity);
    setTotalQuantities((prev) => prev + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) =>
        cartProduct._id === product._id
          ? { ...cartProduct, quantity: (cartProduct.quantity || 0) + quantity }
          : cartProduct
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const onRemove = (product: Product) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    if (!foundProduct) return;

    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prev) => prev - foundProduct.price * (foundProduct.quantity || 0));
    setTotalQuantities((prev) => prev - (foundProduct.quantity || 0));
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id: string, value: "inc" | "dec") => {
    const foundProduct = cartItems.find((item) => item._id === id);
    if (!foundProduct) return;

    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: (foundProduct.quantity || 0) + 1 },
      ]);
      setTotalPrice((prev) => prev + foundProduct.price);
      setTotalQuantities((prev) => prev + 1);
    } else if (value === "dec" && (foundProduct.quantity || 0) > 1) {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: (foundProduct.quantity || 0) - 1 },
      ]);
      setTotalPrice((prev) => prev - foundProduct.price);
      setTotalQuantities((prev) => prev - 1);
    }
  };

  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    setQty((prev) => (prev - 1 < 1 ? 1 : prev - 1));
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = (): StateContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useStateContext must be used inside StateContext provider");
  }
  return context;
};