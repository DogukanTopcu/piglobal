import React from 'react'
import Hero from '../../../common/Hero'
import { Metadata } from 'next';
import TypeCard from '@/app/common/TypeCard';
import { foodAndAgricultureHeroDataTR } from '../../data/heroDataTR';
import { foodTypeDataTR } from '../../data/foodProductsDataTR';

export const metadata : Metadata = {
  title: "Gıda ve Tarım",
  description: "Gıda ve Tarım Ürünlerimiz"
}

const GidaVeTarim = () => {
    const data = foodAndAgricultureHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div className='flex flex-wrap items-center justify-center my-20 container max-w-7xl mx-auto gap-4'>
        {
          foodTypeDataTR.map((p, idx) => {
            return (
              <>
              <TypeCard key={idx} img={p.img} title={p.title} url={`./gida-ve-tarim/${p.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default GidaVeTarim