import React from 'react'
import { automativeAndSubIndustryHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';

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