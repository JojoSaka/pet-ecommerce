import BestSection from '@/components/BestSection';
import HeroSection from '@/components/HeroSection';
import SecondSection from '@/components/SecondSection';
import StoreSection from '@/components/StoreSection';
import React from 'react';

const page = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection />

      <SecondSection />

      <StoreSection />

      <BestSection />
    </div>
  );
}

export default page;
