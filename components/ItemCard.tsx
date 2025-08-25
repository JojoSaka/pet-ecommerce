import { Product, useStateContext } from "@/context/StateContext";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

type ItemProduct = {
  product: Product;
}

const ItemCard = ({ product }: ItemProduct) => {
  const { onAdd } = useStateContext();

  const AddProductToCart = () => {
    try {
      onAdd(product, 1)
      toast(`${product.name} added to Cart`)
    } catch(error) {
      toast("There was an error adding product to Cart")
      console.log(error)
    }
  }

  return (
    <div className="product-card">
      <div className="flex justify-center">
        <Image
          src={"/assets/can.png"}
          alt="item"
          width={300}
          height={100}
          loading="lazy"
        />
      </div>
      <p>{product.name}</p>
      <div className="flex justify-between items-center">
        <p>${product.price}</p>
        <div className="cursor-pointer" onClick={AddProductToCart}>
          <Image src={"/icons/add.png"} alt="add" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
