import React from 'react'
import { galleryHeroDataTR } from '../../data/heroDataTR'
import Hero from '@/app/common/Hero';

const Galeri = () => {
    const data = galleryHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default Galeri