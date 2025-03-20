import React from 'react'
import Hero from '../../../common/Hero'
import { eneryAndFuelsHeroData } from '../../data/heroData'
import { Metadata } from 'next';
import TypeCard from '@/app/common/TypeCard';
import { energyAndFuelsTypeData } from '../../data/energyAndFuelsProductsData';

export const metadata : Metadata = {
  title: "Energy And Fuels",
  description: "Energy And Fuels"
}

const EnergyAndFuelsProducts = () => {
    const data = eneryAndFuelsHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
        <div className='flex flex-wrap items-center justify-center my-20 container max-w-7xl mx-auto gap-4'>
        {
          energyAndFuelsTypeData.map((p, idx) => {
            return (
              <>
              <TypeCard key={idx} img={p.img} title={p.title} url={`./energy-and-fuels/${p.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}



export default EnergyAndFuelsProducts