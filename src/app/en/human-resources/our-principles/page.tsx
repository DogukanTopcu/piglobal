import React from 'react';
import Hero from '@/app/common/Hero';
import { Metadata } from 'next';
import { OurPrinciplesHeroData } from '../../data/heroData';
import { principlesData } from '../../data/principlesData';


export const metadata : Metadata = {
    title: "Our Principles",
    // description: "Gıda ve Tarım Ürünlerimiz"
  }


const OurPrinciples = () => {
  const data = OurPrinciplesHeroData;
  const contentData = principlesData;
  return (
    <div>
      <Hero img={data.image} title={data.title} />
      
      {/* Content */}
      <div className='container max-w-4xl mx-auto my-24 px-4'>
        <p className='sm:leading-10 sm:text-xl text-lg font-semibold'>At Pi Global Co., Our Principles Drive Us Forward</p>
        <br /><br />
        <p className='sm:leading-8 leading-7 sm:text-lg'>Our raison d&apos;etre at Pi Global Co. is to create value and benefit for both our internal and external customers. To achieve this objective, our Principles guide us. They serve as a compass, helping us develop a common language and a unified approach. By emphasizing our shared values, our Principles remind us of the strengths that differentiate us from other companies.</p>
        <br /><br />
        <p className='sm:leading-8 leading-7 sm:text-lg'>Aligned with our corporate culture, our Principles, which are embraced by employees, stakeholders, and employers alike, enhance our effectiveness in working together and achieving results collectively. They reflect the values that we, the employees of Pi Global Co., feel deeply in our daily lives and consider significant. These values and the importance attached to them form the foundation of our Principles, which serve as a source of inspiration and motivation for all of us, driving the success of Pi Global Co.</p>
        <br /><br />
        <p className='sm:leading-8 leading-7 sm:text-lg'>Our set of 9 Principles underpins our human resources processes and practices, including recruitment, rotation, career management, training and development, and job analysis. These Principles are the cornerstone of our commitment to fostering a collaborative and productive work environment.</p>
        <br /><br />
        <p className='sm:leading-8 leading-7 sm:text-lg'>By adhering to these Principles, we ensure that every action and decision we make aligns with our core values, reinforcing our collective identity and driving our continued growth and success.</p>
      </div>

      {/* Priciples */}
      <div
      style={{
        backgroundImage: `url(${contentData.bg_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className='w-full bg-[#25456c]/70 bg-blend-overlay flex flex-col justify-center items-center'>
        <div className='container max-w-5xl mx-auto px-4 lg:px-10 overflow-x-hidden sm:py-32 py-24'>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            {
              contentData.principles.sort((x,y) => (x.order >= y.order) ? 1 : -1).map((p, idx) => {
                return (
                  <Card key={idx} title={p.principle} desc={p.desc} icon={p.icon} rotation={p.rotation} color={p.cardColor}  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}



interface Principle {
  title: string;
  icon: string;
  desc: string;
  rotation: string;
  color: string;
}
const Card = ({ title, icon, desc, rotation, color } : Principle) => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>

      <div className={`shadow-xl flex flex-col items-center justify-center gap-4 pt-4 pb-10 px-8 h-full ${rotation} ${color}`}>
        <div className='relative w-full flex justify-center z-20 py-4'>
          <div className='absolute top-0 bg-red-600 shadow-xl w-10 h-10 rounded-full' />
        </div>
        {/* <div
          style={{
            backgroundImage: `url(${icon})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className='w-12 h-12'
        /> */}
        <h3 className='text-center font-semibold text-lg'>{title}</h3>
        <desc className='text-center'>{desc}</desc>
      </div>
    </div>
  )
}


export default OurPrinciples