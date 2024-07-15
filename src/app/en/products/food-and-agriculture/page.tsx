import React from 'react'
import Hero from '../../../common/Hero'
import { foodAndAgricultureHeroData } from '../../data/heroData'
import { Metadata } from 'next';
import { foodTypeData } from '../../data/foodProductsData';
import TypeCard from '@/app/common/TypeCard';


export const metadata : Metadata = {
  title: "Food and Agriculture",
  description: "Food and Agriculture Products"
}

const FoodAndAgriculture = () => {
    const data = foodAndAgricultureHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div className='flex flex-wrap items-center justify-center my-20 container max-w-7xl mx-auto gap-4'>
        {
          foodTypeData.map((p, idx) => {
            return (
              <>
              <TypeCard key={idx} img={p.img} title={p.title} url={`./food-and-agriculture/${p.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default FoodAndAgriculture