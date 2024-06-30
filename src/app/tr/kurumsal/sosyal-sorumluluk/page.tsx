import React from 'react'
import { SocialResponsibilitiesHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';



export const metadata : Metadata = {
  title: "Sosyal Sorumluluk",
  description: "Sosyal Sorumluluk"
}

const SosyalSorumluluk = () => {
    const data = SocialResponsibilitiesHeroDataTR;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default SosyalSorumluluk