"use client"
import { productsData } from '@/data/contentData';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const OurProducts = () => {
    const products = productsData;
    const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <section className='sm:py-24 py-16 bg-[#25456c] text-white'>
        <div className='container max-w-7xl mx-auto flex flex-col sm:gap-16 gap-10 px-6'>
            {/* title */}
            <h1 className='sm:text-4xl text-2xl text-center font-extrabold tracking-wide'>PRODUCTS</h1>

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
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 lg:gap-y-0 gap-y-4 w-full'>
                {
                    products[selectedCategory].products.map((p, idx) => {
                        return (
                            <Product key={idx} product={p} />
                        )
                    })
                }
                <div className='flex justify-center items-center h-full sm:col-span-2 lg:col-span-1'>
                    <button className='border-2 border-white px-6 py-3 font-semibold text-lg flex items-center gap-2
                    hover:bg-white hover:text-black transition-color duration-300 ease'>
                        More Products
                        <FaArrowRight />
                    </button>
                </div>
            </div>

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


interface ProductInterface {
    productName: string;
    productDesc: string;
    productUrl: string,
    productImg: string;
}
const Product = ({ product } : { product : ProductInterface}) => {
    return (
        <div
            style={{
                backgroundImage: `url(${product.productImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}

            className='aspect-video shrink-0 bg-neutral-700 bg-blend-overlay w-full h-96 border-2'
        >
            <div className='flex flex-col justify-end items-end w-full h-full'>
                <div className='bg-gradient-to-r from-[#90302d] p-4'>
                    <p className='w-full text-left text-2xl font-extrabold'>{product.productName}</p>
                    <p className='w-full text-left '>{product.productDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default OurProducts