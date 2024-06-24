"use client"
import React from 'react'
import Hero from '../../common/Hero'
import { ContactHeroData } from '../data/heroData'
import UnderConstruction from '@/app/common/UnderConstruction'

const ContactPage = () => {
  const data = ContactHeroData;

  return (
    <div>
        {/* <Hero img={data.image} title={data.title} /> */}
        <UnderConstruction />
    </div>
  )
}

export default ContactPage