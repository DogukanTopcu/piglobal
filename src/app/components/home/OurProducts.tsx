"use client"
import { productsData } from '@/data/contentData';
import React, { Dispatch, SetStateAction, useState } from 'react'

const OurProducts = () => {
    const products = productsData;
    const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <section className='sm:py-24 py-16 bg-[#25456c] text-white'>
        <div className='container max-w-7xl mx-auto flex flex-col sm:gap-16 gap-10'>
            {/* title */}
            <h1 className='sm:text-4xl text-xl px-6 font-extrabold tracking-wide'>PRODUCTS</h1>

            {/* Categories */}
            <div className='flex justify-center items-center flex-wrap sm:h-36 h-24'>
                {
                    products.map((p, idx) => {
                        return(
                            <CategoryCard key={idx} idx={idx} name={p.categoryName} icon={p.categoryIcon} selected={idx == selectedCategory} setSelectedCategory={setSelectedCategory} />
                        )
                    })
                }
            </div>

            {/* Products */}

        </div>
    </section>
  )
}

const CategoryCard = ( { idx, name, icon, selected, setSelectedCategory } : { idx: number; name : string; icon : string; selected : Boolean; setSelectedCategory : Dispatch<SetStateAction<number>>; }) => {
    return(
        <div onClick={() => setSelectedCategory(idx)}
        className={`border-white border-[0.5px]
         sm:w-36 w-24 h-full sm:p-4 p-2 cursor-pointer
         flex flex-col justify-center gap-5 items-center
         transition-all duration-300 ease ${selected ? "bg-white" : "bg-transparent"}`}>
            <div
                style={{
                    backgroundImage: `url(${icon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
                className={`sm:w-12 sm:h-12 w-8 h-8 ${selected ? "" : "invert"}`}
            />
            <p className={`${selected ? "text-black" : "text-white"} sm:text-sm text-xs text-center`}>{name}</p>
        </div>
    )
}

export default OurProducts