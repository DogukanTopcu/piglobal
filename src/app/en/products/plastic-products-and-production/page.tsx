import React from 'react'
import Hero from '../../../common/Hero'
import { plasticProductsAndProductionHeroData } from '../../data/heroData'

const PlasticProductsAndProduction = () => {
    const data = plasticProductsAndProductionHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default PlasticProductsAndProduction