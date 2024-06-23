import React from 'react'
import { SustainabilityHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';

const Surdurulebilirlik = () => {
    const data = SustainabilityHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default Surdurulebilirlik