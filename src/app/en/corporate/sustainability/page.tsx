"use client"
import React from 'react'
import Hero from '../../../common/Hero'
import { SustainabilityHeroData } from '../../data/heroData'
import UnderConstruction from '@/app/common/UnderConstruction'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title: "Sustainability",
  description: "Examine Our Sustainability Program"
}

const Sustainability = () => {
    const data = SustainabilityHeroData;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default Sustainability