import React from 'react';
import { Metadata } from 'next';
import { plasticProductsAndProductionHeroDataTR } from '@/app/tr/data/heroDataTR';
import Hero from '../../../../common/Hero';
import { packagingTypeDataTR, plasticProductsTR, plasticProductsTableDataTR } from '@/app/tr/data/plasticProductsDataTR';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

export const metadata : Metadata = {
  title: "Plastic Prodcts and Production",
  description: "Plastic Products"
}

const PlasticProductSlug = ({ params }: { params: { slug: string } }) => {
    const data = plasticProductsAndProductionHeroDataTR;

    const tableType = packagingTypeDataTR.find((t) => t.url == params.slug);
    const table = plasticProductsTableDataTR.filter((t) => t.tableType == tableType!.title);
    
    metadata.title = tableType!.title;
    metadata.description = tableType!.title;

  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div className='container max-w-4xl mx-auto my-20'>
            <h1 className='sm:text-5xl text-4xl px-2 font-bold tracking-wider text-[#25456c] my-8'>{tableType!.title}</h1>

            <div>
            {
                table.map((t, idx) => {
                    return (
                        <Table key={idx} tableTitle={t.tableName} />
                    )
                })
            }
            </div>

        </div>
    </div>
  )
}

const Table = ({ tableTitle } : { tableTitle : string }) => {
    const products = plasticProductsTR.filter((p) => p.table == tableTitle);

    return (
        <div>
            {/* Table Title */}
            <div className='bg-[#25456c] w-full flex justify-start items-center p-6'>
                <h2 className='text-white font-semibold text-xl'>{tableTitle}</h2>
            </div>

            {/* Table Content */}
            <div className='w-full flex flex-wrap '>
                {
                    products.map((p, idx) => {
                        return (
                            <Link 
                            href={p.tds}
                            target='_blank'
                            key={idx} className='
                            p-4 bg-[#f5f5f5] border-2 border-white
                            grid grid-cols-6
                            sm:w-1/2 w-full min-h-56
                            group cursor-pointer'>
                                
                                <div className='col-span-5'>
                                    <h3 className='text-[#25456c] font-semibold my-2'>{p.productCode + ": " + p.productName}</h3>
                                    <desc className='font-light leading-4 text-sm'>{p.desc}</desc>
                                </div>

                                <div className='col-span-1 flex justify-center items-end 
                                mb-5 group-hover:mb-10 transition-all duration-300'>
                                    <Icon className='drop-shadow-xl group-hover:drop-shadow-lg transition-all duration-300' icon="material-symbols:download" width="40" height="40"  style={{color: "#25456c"}} />
                                </div>

                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PlasticProductSlug