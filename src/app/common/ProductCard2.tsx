import Link from 'next/link'
import React from 'react'

const ProductCard2 = ({ url, title, desc, img } : { url: string, title: string, desc: string, img: string }) => {
  return (
    <Link
    href=""
    className='flex flex-col group'
    >
        <div 
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

            className='w-full h-96 shadow-xl'
        />

        <div className='flex flex-col gap-1 flex-start 
        transition-all duration-300 ease-out
        group-hover:bg-transparent bg-[#25456c]
        text-white group-hover:text-black
        -translate-y-full group-hover:translate-y-0 py-5 px-3'>

            <h3 className='font-semibold text-sm'>{title}</h3>
            <p className='font-light text-sm max-w-64'>{desc}</p>
        </div>
    </Link>
  )
}

export default ProductCard2