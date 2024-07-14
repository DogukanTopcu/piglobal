import Hero from '@/app/common/Hero'
import ProductCard from '@/app/common/ProductCard';
import { automativeProducts, automativeProductsSubtitles } from '@/app/en/data/automaticeProductsData'
import React from 'react'

const AutomativeSubSlug = ({ params }: { params: { subslug: string } }) => {
    const category = automativeProductsSubtitles.find((f) => f.url == params.subslug);
    const data = automativeProducts.filter((a) => a.categoryName == category!.name);
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
              <ProductCard key={idx} img={d.img} title={d.productName} desc={d.desc} brochure={d.brochure} url={`./tire/${category!.url}/${d.url}`} />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default AutomativeSubSlug