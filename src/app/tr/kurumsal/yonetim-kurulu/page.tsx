import React from 'react'
import { BoardMembersHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';

const YonetimKurulu = () => {
    const data = BoardMembersHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default YonetimKurulu