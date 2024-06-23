"use client"
import React from 'react'
import Hero from '../../../common/Hero'
import { OurTechHeroData } from '../../data/heroData'

const Technologies = () => {
    const data = OurTechHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default Technologies