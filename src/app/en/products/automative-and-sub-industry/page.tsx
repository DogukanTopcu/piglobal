import React from 'react'
import { automativeAndSubIndustryHeroData } from '../../data/heroData'
import Hero from '../../../common/Hero';

const AutomativeAndSubIndustry = () => {
    const data = automativeAndSubIndustryHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default AutomativeAndSubIndustry