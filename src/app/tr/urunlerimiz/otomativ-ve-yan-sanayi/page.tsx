import React from 'react'
import { automativeAndSubIndustryHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';

const OtomativVeYanSanayi = () => {
    const data = automativeAndSubIndustryHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default OtomativVeYanSanayi