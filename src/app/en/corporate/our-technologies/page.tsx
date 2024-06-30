import React from 'react'
import Hero from '../../../common/Hero'
import { OurTechHeroData } from '../../data/heroData'
import UnderConstruction from '@/app/common/UnderConstruction'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title: "Our Technologies",
  description: "Get To Know Our Technologies"
}

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