"use client"
import React from 'react'
import Hero from '../../common/Hero'
import { ContactHeroData } from '../data/heroData'

const ContactPage = () => {
  const data = ContactHeroData;

  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default ContactPage