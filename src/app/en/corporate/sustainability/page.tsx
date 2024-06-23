"use client"
import React from 'react'
import Hero from '../../../common/Hero'
import { SustainabilityHeroData } from '../../data/heroData'

const Sustainability = () => {
    const data = SustainabilityHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default Sustainability