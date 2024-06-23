"use client"
import React from 'react'
import Hero from '../../../common/Hero'
import { SocialResponsibilitiesHeroData } from '../../data/heroData'

const SocialResponsibility = () => {
    const data = SocialResponsibilitiesHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default SocialResponsibility