import React from 'react'
import { SustainabilityHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "Sürdürülebilirlik",
  description: "Sürdürülebilirlik Projelerimizi Yakından Tanıyın"
}


const Surdurulebilirlik = () => {
    const data = SustainabilityHeroDataTR;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default Surdurulebilirlik