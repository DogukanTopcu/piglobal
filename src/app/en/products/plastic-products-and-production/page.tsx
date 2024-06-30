import React from 'react'
import Hero from '../../../common/Hero'
import { plasticProductsAndProductionHeroData } from '../../data/heroData'
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "Plastic Prodcts and Production",
  description: "Plastic Products"
}

const PlasticProductsAndProduction = () => {
    const data = plasticProductsAndProductionHeroData;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default PlasticProductsAndProduction