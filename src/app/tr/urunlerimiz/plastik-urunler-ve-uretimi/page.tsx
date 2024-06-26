import React from 'react'
import { plasticProductsAndProductionHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';

const PlastikUrunlerVeUretimi = () => {
    const data = plasticProductsAndProductionHeroDataTR;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default PlastikUrunlerVeUretimi