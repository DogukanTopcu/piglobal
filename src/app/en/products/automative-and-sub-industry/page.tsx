import React from 'react'
import { automativeAndSubIndustryHeroData } from '../../data/heroData'
import Hero from '../../../common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';

const AutomativeAndSubIndustry = () => {
    const data = automativeAndSubIndustryHeroData;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default AutomativeAndSubIndustry