import React from 'react'
import { OurTechHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "Teknolojilerimiz",
  description: "Teknolojilerimizi Yakından Tanıyın"
}


const Teknolojilerimiz = () => {
    const data = OurTechHeroDataTR;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default Teknolojilerimiz