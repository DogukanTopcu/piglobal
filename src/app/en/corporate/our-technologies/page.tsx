"use client"
import React from 'react'
import Hero from '../../../common/Hero'
import { OurTechHeroData } from '../../data/heroData'
import UnderConstruction from '@/app/common/UnderConstruction'

const Technologies = () => {
    const data = OurTechHeroData;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default Technologies