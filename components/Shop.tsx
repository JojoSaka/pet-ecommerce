"use client"

import { Categories, PetProducts } from '@/lib';
import Image from 'next/image';
import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { Button } from './ui/button';
import BestSection from './BestSection';

const Shop = () => {
  const [cat, setCat] = useState<string>("All Products");

  return (
    <div className='space-y-10'>
      <div className="flex justify-center min-h-screen bg-[#FAF9F6]">
        <div className="w-[100%] md:w-[90%] lg:w-[80%] space-y-10">
          <div className="pt-20">
            <h1 className="text-center text-3xl font-bold">
              Get the valuable needs of latest products
            </h1>
            <p className="text-center text-lg">
              Complete Collection of Pet Supplies for Dogs, Cats, Birds & More
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-5">
            {Categories.map((category) => {
              const isActive = cat === category.name;

              return (
                <div
                  key={category.id}
                  className={isActive ? `category active` : `category`}
                  onClick={() => setCat(category.name)}
                >
                  <div className="flex max-md:justify-center items-center gap-3">
                    <Image
                      src={`/icons/${category.icon}.png`}
                      alt="pet"
                      width={30}
                      height={30}
                    />
                    <p>{category.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PetProducts.map((product) => (
              <div key={product._id}>
                <ItemCard product={product} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button className="px-10 py-8 bg-orange-200 cursor-pointer rounded-[30px] text-black font-bold text-lg hover:bg-orange-300">
              See more products
            </Button>
          </div>
        </div>
      </div>

      <BestSection />
    </div>
  );
}

export default Shop;
