import Hero from '@/app/common/Hero'
import React from 'react'
import { AboutUsHeroDataTR } from '../../data/heroDataTR'

const Hakkimizda = () => {
    const data = AboutUsHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default Hakkimizda