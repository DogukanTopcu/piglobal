import React from 'react'
import Hero from '../../../common/Hero'
import { plasticProductsAndProductionHeroData } from '../../data/heroData'
import { Metadata } from 'next';
import { packagingTypeData } from '../../data/plasticProductsData';
import Link from 'next/link';


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
              <TypeCard key={idx} img={p.img} title={p.title} url={p.url} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

const TypeCard = ({ img, title, url } : { img: string; title: string; url: string}) => {
  return (
    <Link 
    href={`./plastic-products-and-production/${url}`}
    style={{
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
    className='border-[10px] border-white 
    w-full max-w-96 h-64 shadow-md hover:shadow-2xl transition-all duration-300 mx-4
    flex justify-center items-end'>
      <h2 className='w-full bg-gradient-to-t from-[#25456c] to-transparent text-center py-10
      text-white tracking-wider sm:text-xl font-bold'>{title}</h2>
    </Link>
  )
}

export default PlasticProductsAndProduction