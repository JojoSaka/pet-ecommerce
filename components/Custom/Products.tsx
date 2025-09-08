/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getProducts } from "@/lib/actions/product";
import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { Button } from "../ui/button";

const CACHE_KEY = "products";
const CACHE_DURATION = 60 * 1000;

const Products = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const newProducts = products.filter(
    (product) => product.category === category
  );

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);

        if (cached) {
          const { data, timestamp } = JSON.parse(cached);

          // check if cache is still valid
          if (Date.now() - timestamp < CACHE_DURATION) {
            setProducts(data);
            return; // ✅ use cached
          }
        }

        // else fetch fresh
        const result = await getProducts();
        if (result?.data) {
          setProducts(result.data);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data: result.data, timestamp: Date.now() })
          );
        }
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Failed to fetch products: ${error.message}`);
        }
        throw new Error("Fetching products from database failed");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {category === "All Products" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {products.slice(0, visibleCount).map((product) => (
            <div key={product.id}>
              <ItemCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {newProducts.slice(0, visibleCount).map((product) => (
            <div key={product.id}>
              <ItemCard product={product} />
            </div>
          ))}
        </div>
      )}

      {visibleCount < products.length ||
        (visibleCount < newProducts.length && (
          <div className="flex justify-center" onClick={() => loadMore()}>
            <Button className="px-10 py-8 bg-[#A0522D] cursor-pointer rounded-[30px] font-medium text-lg hover:bg-[#A0522D]/90">
              See more products
            </Button>
          </div>
        ))}
    </div>
  );
};

export default Products;
