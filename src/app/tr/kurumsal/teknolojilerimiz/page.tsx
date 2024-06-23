import React from 'react'
import { OurTechHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';

const Teknolojilerimiz = () => {
    const data = OurTechHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default Teknolojilerimiz