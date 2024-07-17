import Hero from '@/app/common/Hero';
import ProductCard2 from '@/app/common/ProductCard2';
import { paperProducts, paperTypeData } from '@/app/en/data/pageProductsData';
import { Metadata } from 'next';
import React from 'react'


export const metadata : Metadata = {
    title: "Paper and Paper Products",
    description: "Paper and Paper Products"
  }

const FoodsSlug = ({ params }: { params: { slug: string } }) => {

    const paperType = paperTypeData.find((t) => t.url == params.slug);

    const products = paperProducts.filter((p) => p.type == paperType!.title);
    
    metadata.title = paperType!.title;
    metadata.description = paperType!.title;
  return (
    <div>
        <Hero img={paperType!.heroDataImg} title={paperType!.title} />
        

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
                url={`./${paperType!.url}/${d.url}`} 
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