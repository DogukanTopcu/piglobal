import React from 'react'
import { foodAndAgricultureHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: "Gıda ve Tarım",
  description: "Gıda ve Tarım Ürünlerimiz"
}

const GidaVeTarim = () => {
    const data = foodAndAgricultureHeroDataTR;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default GidaVeTarim