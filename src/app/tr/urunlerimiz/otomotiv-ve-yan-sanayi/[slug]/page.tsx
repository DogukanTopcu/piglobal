import Hero from '@/app/common/Hero'
import TypeCard from '@/app/common/TypeCard';
import { automativeProductsSubtitlesTR, automativeTypeDataTR } from '@/app/tr/data/automativeProductsDataTR';
import React from 'react'

const AutomativeSlugTR = ({ params }: { params: { slug: string } }) => {
  const category = automativeTypeDataTR.find((a) => a.url == params.slug);
  const data = automativeProductsSubtitlesTR.filter((a) => a.category == category!.title);
  return (
    <div>
        <Hero title={category!.heroDataName} img={category!.heroDataImg} />

        <div className='flex flex-wrap items-center justify-center my-20 container max-w-7xl mx-auto gap-4'>
        {
          data.map((d, idx) => {
            return (
              <>
              <TypeCard key={idx} img={d.img} title={d.name} url={`./lastik/${d.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default AutomativeSlugTR