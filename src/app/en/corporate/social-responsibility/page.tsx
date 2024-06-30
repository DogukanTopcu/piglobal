import React from 'react'
import Hero from '../../../common/Hero'
import { SocialResponsibilitiesHeroData } from '../../data/heroData'
import UnderConstruction from '@/app/common/UnderConstruction'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title: "Social Responsibility",
  description: ""
}

const SocialResponsibility = () => {
    const data = SocialResponsibilitiesHeroData;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default SocialResponsibility