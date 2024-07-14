import React from 'react'
import Hero from '../../../common/Hero'
import { plasticProductsAndProductionHeroData } from '../../data/heroData'
import { Metadata } from 'next';
import { packagingTypeData } from '../../data/plasticProductsData';
import Link from 'next/link';
import TypeCard from '@/app/common/TypeCard';


export const metadata : Metadata = {
  title: "Plastic Prodcts and Production",
  description: "Plastic Products"
}

const PlasticProductsAndProduction = () => {
    const data = plasticProductsAndProductionHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
        <div className='flex flex-wrap items-center justify-center my-20 container max-w-7xl mx-auto gap-4'>
        {
          packagingTypeData.map((p, idx) => {
            return (
              <>
              <TypeCard key={idx} img={p.img} title={p.title} url={`./plastic-products-and-production/${p.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}



export default PlasticProductsAndProduction