import React from 'react'
import { ContactHeroDataTR } from '../data/heroDataTR'
import Hero from '@/app/common/Hero';

const Iletisim = () => {
    const data = ContactHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
    </div>
  )
}

export default Iletisim