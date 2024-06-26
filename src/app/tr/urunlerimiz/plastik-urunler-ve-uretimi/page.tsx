import React from 'react'
import { plasticProductsAndProductionHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "Plastik Ürünler ve Üretimi",
  description: "Plastik Sektöründeki Ürünlerimiz"
}

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