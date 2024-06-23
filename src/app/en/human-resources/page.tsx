"use client"
import React from 'react'
import Hero from '../../common/Hero'
import { HumanResourcesHeroData } from '../data/heroData'

const HumanResources = () => {

  const data = HumanResourcesHeroData;


  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default HumanResources