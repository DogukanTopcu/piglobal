import React from 'react'
import { galleryHeroData } from '../../data/heroData'
import Hero from '../../../common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';

const Gallery = () => {
    const data = galleryHeroData;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default Gallery