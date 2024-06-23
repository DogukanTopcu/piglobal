import React from 'react'
import { newsHeroData } from '../../data/heroData'
import Hero from '../../../common/Hero';

const NewsAnnouncementsEvents = () => {
    const data = newsHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default NewsAnnouncementsEvents