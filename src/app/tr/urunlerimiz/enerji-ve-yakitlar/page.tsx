import React from 'react'
import Hero from '../../../common/Hero'
import { Metadata } from 'next';
import TypeCard from '@/app/common/TypeCard';
import { eneryAndFuelsHeroDataTR } from '../../data/heroDataTR';
import { energyAndFuelsTypeDataTR } from '../../data/energyAndFuelsProductDataTR';

export const metadata : Metadata = {
  title: "Enerji ve Yakıtlar",
  description: "Enerji ve Yakıt Ürünlerimiz"
}

const EnerjiVeYakitlar = () => {
    const data = eneryAndFuelsHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div className='flex flex-wrap items-center justify-center my-20 container max-w-7xl mx-auto gap-4'>
        { 
          energyAndFuelsTypeDataTR.map((p, idx) => {
            return (
              <>
              <TypeCard key={idx} img={p.img} title={p.title} url={`./enerji-ve-yakitlar/${p.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default EnerjiVeYakitlar