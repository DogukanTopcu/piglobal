import React from 'react'
import { foodAndAgricultureHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';

const GidaVeTarim = () => {
    const data = foodAndAgricultureHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default GidaVeTarim