import React from 'react'
import { ContactHeroDataTR } from '../data/heroDataTR'
import Hero from '@/app/common/Hero';
import ContactInformationTR from '../components/contact/ContactInformationTR';
import ContactFormTR from '../components/contact/ContactFormTR';

const Iletisim = () => {
    const data = ContactHeroDataTR;
  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div className='container max-w-7xl mx-auto p-4 grid sm:grid-cols-2 grid-cols-1 gap-10'>
          {/* Contact Information */}
          <ContactInformationTR />

          {/* Contact Form */}
          <ContactFormTR />
        </div>
    </div>
  )
}

export default Iletisim