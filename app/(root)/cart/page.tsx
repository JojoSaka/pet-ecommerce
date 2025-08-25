import Cart from "@/components/Cart";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="flex justify-center min-h-screen bg-white">
        <div className="w-[100%] md:w-[90%] lg:w-[80%] xl:w-[60%] space-y-10">
            <Cart />
        </div>
      </div>
    </section>
  );
};

export default page;
