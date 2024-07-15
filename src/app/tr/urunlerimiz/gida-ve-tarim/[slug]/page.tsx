import Hero from '@/app/common/Hero';
import ProductCard2 from '@/app/common/ProductCard2';
import { foodProductsTR, foodTypeDataTR } from '@/app/tr/data/foodProductsDataTR';
import { Metadata } from 'next';
import React from 'react'


export const metadata : Metadata = {
    title: "Gıda ve Tarım",
    description: "Gıda ve Tarım Ürünlerimiz"
  }

const GidaSlugTR = ({ params }: { params: { slug: string } }) => {

    const foodType = foodTypeDataTR.find((t) => t.url == params.slug);

    const products = foodProductsTR.filter((p) => p.type == foodType!.title);
    
    metadata.title = foodType!.title;
    metadata.description = foodType!.title;
  return (
    <div>
        <Hero img={foodType!.heroDataImg} title={foodType!.title} />
        

        <div className='
        grid lg:grid-cols-3 sm:grid-cols-2
        my-20 container max-w-6xl px-5 mx-auto gap-4'>
        {
          products.map((d, idx) => {
            return (
              <>
              <ProductCard2 
                key={idx} 
                img={d.img} 
                title={d.productName} 
                desc={d.desc} 
                url={`./${foodType!.url}/${d.url}`} 
              />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default GidaSlugTR