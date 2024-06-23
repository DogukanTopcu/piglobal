import React from 'react'
import { SocialResponsibilitiesHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';

const SosyalSorumluluk = () => {
    const data = SocialResponsibilitiesHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default SosyalSorumluluk