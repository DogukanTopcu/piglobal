import React from 'react'
import Hero from '../../../common/Hero';
import { Metadata } from 'next';
import TypeCard from '@/app/common/TypeCard';
import { automativeAndSubIndustryHeroDataTR } from '../../data/heroDataTR';
import { automativeTypeDataTR } from '../../data/automativeProductsDataTR';


export const metadata : Metadata = {
  title: "Otomotiv ve Yan Sanayi",
  description: "Otomotiv Ürünler"
}

const OtomativVeYanSanayi = () => {
  const data = automativeAndSubIndustryHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
        <div className='flex flex-wrap items-center justify-center my-20 container max-w-7xl mx-auto gap-4'>
        {
          automativeTypeDataTR.map((p, idx) => {
            return (
              <>
              <TypeCard key={idx} img={p.img} title={p.title} url={`./otomotiv-ve-yan-sanayi/${p.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default OtomativVeYanSanayi