import React from 'react'
import { automativeAndSubIndustryHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: "Otomotiv ve Yan Sanayi",
  description: "Otomotiv Sektöründeki Ürünlerimiz"
}

const OtomativVeYanSanayi = () => {
    const data = automativeAndSubIndustryHeroDataTR;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default OtomativVeYanSanayi