import React from 'react'
import Hero from '../../common/Hero'
import { ContactHeroData } from '../data/heroData'
import UnderConstruction from '@/app/common/UnderConstruction'
import ContactInformation from '../components/contact/ContactInformation'
import ContactForm from '../components/contact/ContactForm'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title: "Contact",
  description: "Contact With Us"
}

const ContactPage = () => {
  const data = ContactHeroData;

  return (
    <div>
        <Hero img={data.image} title={data.title} />
        
        <div className='container max-w-7xl mx-auto p-4 grid sm:grid-cols-2 grid-cols-1 gap-10'>
          {/* Contact Information */}
          <ContactInformation />

          {/* Contact Form */}
          <ContactForm />
        </div>
    </div>
  )
}

export default ContactPage