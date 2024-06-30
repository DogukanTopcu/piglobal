import React from 'react'
import { HumanResourcesHeroDataTR } from '../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "İnsan Kaynakları",
  description: "Sorunlarınızı Bildirin"
}


const InsanKaynaklari = () => {
    const data = HumanResourcesHeroDataTR;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default InsanKaynaklari