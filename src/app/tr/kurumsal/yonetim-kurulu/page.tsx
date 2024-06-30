import React from 'react'
import { BoardMembersHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "Yönetim Kurulu",
  description: "Yönetim Kurulumuzla Tanışın"
}


const YonetimKurulu = () => {
    const data = BoardMembersHeroDataTR;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default YonetimKurulu