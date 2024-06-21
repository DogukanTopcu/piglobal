"use client"
import { productsData } from '@/data/contentData';
import React, { Dispatch, SetStateAction, useState } from 'react'

const OurProducts = () => {
    const products = productsData;
    const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <section className='py-24 bg-[#25456c] text-white'>
        <div className='container max-w-7xl mx-auto flex flex-col gap-16'>
            {/* title */}
            <h1 className='text-4xl font-extrabold tracking-wide'>PRODUCTS</h1>

            {/* Categories */}
            <div className='flex justify-center items-center h-36'>
                {
                    products.map((p, idx) => {
                        return(
                            <CategoryCard key={idx} idx={idx} name={p.categoryName} icon={p.categoryIcon} selected={idx == selectedCategory} setSelectedCategory={setSelectedCategory} length={products.length} />
                        )
                    })
                }
            </div>

            {/* Products */}

        </div>
    </section>
  )
}

const CategoryCard = ( { idx, name, icon, selected, setSelectedCategory, length } : { idx: number; name : string; icon : string; selected : Boolean; setSelectedCategory : Dispatch<SetStateAction<number>>; length: number }) => {
    return(
        <div onClick={() => setSelectedCategory(idx)}
        className={`border-white ${idx == 0 ? "border-2 rounded-l-lg" : idx == length - 1 ? "border-t-2 border-b-2 border-r-2 rounded-r-lg" : "border-t-2 border-b-2 border-r-2"}
         w-36 h-full p-4 cursor-pointer
         flex flex-col justify-center gap-5 items-center
         transition-all duration-300 ease ${selected ? "bg-white" : "bg-transparent"}`}>
            <div
                style={{
                    backgroundImage: `url(${icon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className={`w-12 h-12 ${selected ? "" : "invert"}`}
            />
            <p className={`${selected ? "text-black" : "text-white"} text-sm text-center`}>{name}</p>
        </div>
    )
}

export default OurProducts