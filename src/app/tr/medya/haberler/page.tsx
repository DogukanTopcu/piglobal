import React from 'react'
import { newsHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';

const Haberler = () => {
    const data = newsHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default Haberler