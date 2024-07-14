import Hero from '@/app/common/Hero'
import ProductCard from '@/app/common/ProductCard';
import { automativeProductsSubtitlesTR, automativeProductsTR } from '@/app/tr/data/automativeProductsDataTR';
import React from 'react'

const AutomativeSubSlugTR = ({ params }: { params: { subslug: string } }) => {
  const category = automativeProductsSubtitlesTR.find((f) => f.url == params.subslug);
    const data = automativeProductsTR.filter((a) => a.categoryName == category!.name);
  return (
    <div>
        <Hero title={category!.name} img={category!.img} />

        <div className='
        grid lg:grid-cols-3 sm:grid-cols-2
        my-20 container max-w-6xl px-5 mx-auto gap-4'>
        {
          data.map((d, idx) => {
            return (
              <>
              <ProductCard 
                key={idx} 
                img={d.img} 
                title={d.productName} 
                desc={d.desc} 
                brochure={d.brochure} 
                url={`./lastik/${category!.url}/${d.url}`} 
                btnName='Broşürü İndir' 
              />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default AutomativeSubSlugTR