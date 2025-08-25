import BestSection from '@/components/BestSection';
import HeroSection from '@/components/HeroSection';
import Info from '@/components/Info';
import Products from '@/components/Products';
import React from 'react';

const page = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection />

      <Info />

      <Products />

      <BestSection />
    </div>
  );
}

export default page;
