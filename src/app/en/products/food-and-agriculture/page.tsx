import React from 'react'
import Hero from '../../../common/Hero'
import { foodAndAgricultureHeroData } from '../../data/heroData'
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "Food and Agriculture",
  description: "Food and Agriculture Products"
}

const FoodAndAgriculture = () => {
    const data = foodAndAgricultureHeroData;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default FoodAndAgriculture