import React from 'react'
import { galleryHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "Galeri",
  description: "Resimlerimiz"
}

const Galeri = () => {
    const data = galleryHeroDataTR;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default Galeri