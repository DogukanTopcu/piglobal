import React from 'react'
import { newsHeroData } from '../../data/heroData'
import Hero from '../../../common/Hero';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';


export const metadata : Metadata = {
  title: "News",
  description: "Follow Us"
}

const NewsAnnouncementsEvents = () => {
    const data = newsHeroData;
  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default NewsAnnouncementsEvents