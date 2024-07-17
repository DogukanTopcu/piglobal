import Hero from '@/app/common/Hero';
import ProductCard2 from '@/app/common/ProductCard2';
import { paperProductsTR, paperTypeDataTR } from '@/app/tr/data/pageProductsDataTR';
import { Metadata } from 'next';
import React from 'react'


export const metadata : Metadata = {
    title: "Kağıt ve Kağıt Ürünleri",
    description: "Kağıt ve Kağıt Ürünleri"
  }

const FoodsSlug = ({ params }: { params: { slug: string } }) => {

    const paperTypeTR = paperTypeDataTR.find((t) => t.url == params.slug);

    const products = paperProductsTR.filter((p) => p.type == paperTypeTR!.title);
    
    metadata.title = paperTypeTR!.title;
    metadata.description = paperTypeTR!.title;
  return (
    <div>
        <Hero img={paperTypeTR!.heroDataImg} title={paperTypeTR!.title} />
        

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
                url={`./${paperTypeTR!.url}/${d.url}`} 
              />
              </>
            );
          })
        }
        </div>
    </div>
  )
}

export default FoodsSlug