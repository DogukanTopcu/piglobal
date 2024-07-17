import React from 'react'
import Hero from '../../../common/Hero'
import { Metadata } from 'next';
import TypeCard from '@/app/common/TypeCard';
import { pageAndPageProductsHeroDataTR } from '../../data/heroDataTR';
import { paperTypeDataTR } from '../../data/pageProductsDataTR';


export const metadata : Metadata = {
  title: "Kağıt ve Kağıt Ürünleri",
  description: "Kağıt Ürünleri"
}

const PageAndPageProducts = () => {
    const data = pageAndPageProductsHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
        <div className='flex flex-wrap items-center justify-center my-20 container max-w-7xl mx-auto gap-4'>
        {
          paperTypeDataTR.map((p, idx) => {
            return (
              <>
              <TypeCard key={idx} img={p.img} title={p.title} url={`./kagit-ve-kagit-urunleri/${p.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}



export default PageAndPageProducts