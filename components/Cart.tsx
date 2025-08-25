"use client";

import { Product, useStateContext } from "../context/StateContext";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    totalPrice,
    totalQuantities,
    cartItems,
  } = useStateContext();

  //   const handleCheckout = async () => {
  //     const stripe = await getStripe();

  //     const response = await fetch('/api/stripe', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(cartItems),
  //     });

  //     if(response.statusCode === 500) return;

  //     const data = await response.json();

  //     toast.loading('Redirecting...');

  //     stripe.redirectToCheckout({ sessionId: data.id });
  //   }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 space-x-5 my-20 max-md:px-5 max-md:gap-10">
      <div className="lg:col-span-2 space-y-5">
        <h4 className="font-semibold text-2xl">Bag</h4>
        
        {cartItems.map((item: Product) => (
          <div key={item._id}>
            <CartItem item={item} />
          </div>
        ))}
      </div>

      <div className="lg:col-span-1 space-y-5">
        <h4 className="font-semibold text-2xl">Summary</h4>

        <div className="space-y-2 text-[18px] text-gray-500 font-semibold">
          <div className="flex justify-between items-center">
            <p>Total number of items</p>
            <p>{totalQuantities}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>{totalPrice}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Delivery fee</p>
            <p> - </p>
          </div>
          <div className="border-gray-300 border-[0.5px] my-5"/>
          <div className="flex justify-between items-center text-gray-700">
            <p>Total</p>
            <p>{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
