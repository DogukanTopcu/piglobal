import Link from 'next/link';
import React from 'react'

const ProductCard = ({ img, url, title, desc, brochure } : { img: string; url: string; title: string; desc: string; brochure: string }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full border-2 rounded-xl group'>
        <Link
            href=""
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className='w-full h-96
            flex justify-center items-end'
        >
            <div className='bg-[#25456c]/50 p-4 rounded-t-xl z-0
            h-1/2
            group-hover:h-full
            transition-all duration-300 ease-out flex flex-col gap-4'>
                <h4 className='text-white text-xl font-bold tracking-wider underline'>{title}</h4>
                <p className='text-white text-sm font-light leading-tight'>{desc}</p>
            </div>
        </Link>

        <Link
            href={brochure}
            target='_blank'
            className='py-4 text-center w-full bg-[#25456c] z-10
            text-white font-semibold tracking-wide text-lg
            rounded-b-xl'
        >
            Download Brochure
        </Link>
        
    </div>
  )
}

export default ProductCard