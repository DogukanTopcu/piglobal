import React from 'react'
import Hero from '../../common/Hero'
import { HumanResourcesHeroData } from '../data/heroData'
import UnderConstruction from '@/app/common/UnderConstruction'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title: "Human Resources",
  // description: "Gıda ve Tarım Ürünlerimiz"
}

const HumanResources = () => {

  const data = HumanResourcesHeroData;


  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default HumanResources