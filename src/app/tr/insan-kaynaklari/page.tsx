import React from 'react'
import { HumanResourcesHeroDataTR } from '../data/heroDataTR'
import Hero from '@/app/common/Hero';

const InsanKaynaklari = () => {
    const data = HumanResourcesHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default InsanKaynaklari