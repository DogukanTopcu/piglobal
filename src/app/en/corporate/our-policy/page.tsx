import React from 'react'
import Hero from '../../../common/Hero'
import { OurPolicyHeroData } from '../../data/heroData'
import { Metadata } from 'next'


export const metadata : Metadata = {
  title: "Our Policy",
  description: "Get To Know Our Technologies"
}

const OurPolicy = () => {
    const content = contentData;
    const data = OurPolicyHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div dangerouslySetInnerHTML={{__html: content }} />
    </div>
  )
}

const contentData = `<div class='container max-w-4xl mx-auto my-24 px-4'>
        <h1 class='sm:leading-10 sm:text-xl text-lg font-semibold'>Our Policy</h1>
        <br />
        <br />
        <p class='sm:leading-8 leading-7 sm:text-lg'>At Pi Global Co., our aim is to maximize the satisfaction of all our customers. We use our existing resources efficiently and effectively to meet our customers' needs and expectations in a timely manner.</p>
        <br />
        <br />
        <p class='sm:leading-8 leading-7 sm:text-lg'>By regularly updating our activity plan within the framework of TS EN ISO 9001 Quality Management System Standards and current legal regulations, we continuously improve our services. We integrate all our processes into effective quality management systems to provide sustainable services in accordance with international standards.</p>
        <br />
        <br />
        <p class='sm:leading-8 leading-7 sm:text-lg'>We constantly monitor the effectiveness of our management system, make necessary improvements, and establish and implement applicable conditions. We ensure the regular training of our personnel, closely follow technological innovations, and thus enhance the quality of the services provided.</p>
        <br />
        <br />
        <p class='sm:leading-8 leading-7 sm:text-lg'>We manage customer feedback effectively, strengthen processes that create difference and value, and revise or eliminate processes that do not create value. This policy is a testament to Pi Global Co.'s commitment to quality and is embraced and implemented by all our employees. We continue to strive for excellence in our services and work towards this goal.</p>
      </div>`

export default OurPolicy