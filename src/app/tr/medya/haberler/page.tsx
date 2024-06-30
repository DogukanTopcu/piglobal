import React from 'react'
import { newsHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "Haberler",
  description: "Şirketimizden Haberdar Olun"
}

const Haberler = () => {
    const data = newsHeroDataTR;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default Haberler