import React from 'react'
import { automativeAndSubIndustryHeroData } from '../../data/heroData'
import Hero from '../../../common/Hero';
import { Metadata } from 'next';
import { automativeTypeData } from '../../data/automaticeProductsData';
import TypeCard from '@/app/common/TypeCard';


export const metadata : Metadata = {
  title: "Automative and Sub-Industry",
  description: "Automative Products"
}


const AutomativeAndSubIndustry = () => {
    const data = automativeAndSubIndustryHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
        <div className='flex flex-wrap items-center justify-center my-20 container max-w-7xl mx-auto gap-4'>
        {
          automativeTypeData.map((p, idx) => {
            return (
              <>
              <TypeCard key={idx} img={p.img} title={p.title} url={`./automative-and-sub-industry/${p.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default AutomativeAndSubIndustry