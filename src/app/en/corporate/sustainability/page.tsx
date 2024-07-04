import React from 'react';
import Hero from '../../../common/Hero';
import { SustainabilityHeroData } from '../../data/heroData';
import { Metadata } from 'next';
import CircularBar from '../../components/corporate/sustainability/CircularBar';
import { sustainabilityData } from '../../data/sustainabilityData';


export const metadata : Metadata = {
  title: "Sustainability",
  description: "Examine Our Sustainability Program"
}

const Sustainability = () => {
    const data = SustainabilityHeroData;
    const contentData = sustainabilityData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div className='container max-w-4xl mx-auto my-24 px-4'>
          <p className='sm:leading-10 sm:text-xl text-lg font-semibold'>Protecting the Future, Embracing Sustainability…</p>
          <br />
          <br />
          <p className='sm:leading-8 leading-7 sm:text-lg'>With the goal of leaving a more livable world for future generations, we adopt environmentally friendly production and consumption models. Embracing the principle of "Consume Less, Transform More," we develop innovative strategies and continuously optimize our processes to contribute to the circular economy.</p>
          <br />
          <br />
          <p className='sm:leading-8 leading-7 sm:text-lg'>In accordance with the "Designs for Circular Economy" guidelines, we diligently follow the processes of collecting, sorting, recycling, and reintroducing our products into the economy with competitive quality and prices. Through these processes, we create sustainable business models by offering our existing and newly developed products to potential markets.</p>
          <br />
          <br />
          <p className='sm:leading-8 leading-7 sm:text-lg'>By using raw materials obtained from renewable sources or recycled materials, we aim to minimize the carbon footprint of the flexible packaging materials we produce. Through these efforts, we reduce our negative impacts on the environment and ensure a more sustainable production process.</p>
          <br />
          <br />
          <p className='sm:leading-8 leading-7 sm:text-lg'>The coordination and monitoring of our sustainability efforts are meticulously carried out by our Sustainability Committee. This way, we enhance our environmental awareness and continuously work towards a more livable world.</p>
        </div>

        <div
        style={{
          backgroundImage: `url(${contentData.bg_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className='w-full sm:py-32 py-24 bg-[#25456c]/70 bg-blend-overlay flex flex-col justify-center items-center'>
          <CircularBar contentData={contentData} />
        </div>
    </div>
  )
}

export default Sustainability