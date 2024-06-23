import React from 'react'
import { galleryHeroData } from '../../data/heroData'
import Hero from '../../../common/Hero';

const Gallery = () => {
    const data = galleryHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default Gallery