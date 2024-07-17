import React from 'react'
import Hero from '../../../common/Hero'
import { Metadata } from 'next';
import TypeCard from '@/app/common/TypeCard';
import { pageAndPageProductsHeroData } from '../../data/heroData';
import { paperTypeData } from '../../data/pageProductsData';


export const metadata : Metadata = {
  title: "Papers And Paper Products",
  description: "Paper Products"
}

const PageAndPageProducts = () => {
    const data = pageAndPageProductsHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
        <div className='flex flex-wrap items-center justify-center my-20 container max-w-7xl mx-auto gap-4'>
        {
          paperTypeData.map((p, idx) => {
            return (
              <>
              <TypeCard key={idx} img={p.img} title={p.title} url={`./paper-and-paper-products/${p.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}



export default PageAndPageProducts