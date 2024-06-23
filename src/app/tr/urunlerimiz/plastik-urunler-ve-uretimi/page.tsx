import React from 'react'
import { plasticProductsAndProductionHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';

const PlastikUrunlerVeUretimi = () => {
    const data = plasticProductsAndProductionHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default PlastikUrunlerVeUretimi