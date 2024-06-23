import React from 'react'
import Hero from '../../../common/Hero'
import { foodAndAgricultureHeroData } from '../../data/heroData'

const FoodAndAgriculture = () => {
    const data = foodAndAgricultureHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default FoodAndAgriculture