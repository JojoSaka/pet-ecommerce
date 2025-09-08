"use server";

import { db } from "@/database/drizzle";
import { products } from "@/database/schema";

export const getProducts = async () => {
  try {
    const petProducts = await db.select().from(products);
    // const petProducts =
    //   category === "All Products"
    //     ? await db.select().from(products)
    //     : await db
    //         .select()
    //         .from(products)
    //         .where(eq(products.category, category as "DOG" | "CAT" | "BIRD" | "FISH" | "ACCESSORIES"));

    if (petProducts.length === 0) return null;

    return {
      success: true,
      data: petProducts,
    };
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (params: ProductParams) => {
  const {
    name,
    description,
    price: priceStr,
    quantity: qtyStr,
    image,
    category,
  } = params;

  const price = Number(priceStr);

  const quantity = Number(qtyStr);

  try {
    const newProduct = await db
      .insert(products)
      .values({
        name,
        description,
        price: price.toFixed(2),
        quantity,
        image,
        category: category as "DOG" | "CAT" | "BIRD" | "FISH" | "ACCESSORIES",
      })
      .returning();

    return {
      success: true,
      data: newProduct
    };
  } catch (error) {
    console.error("Product creation failed:", error);
    return {
      success: false,
      error: "Something went wrong",
    };
  }
};
