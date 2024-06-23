import React from 'react'

const Hero = ({ title, img } : { title : string, img : string }) => {
  return (
    <section>
        <div
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}

            className='h-80 bg-blend-overlay bg-black/40'
        />
        <div className='w-full py-4 bg-[#25456c] flex justify-center items-center gap-5'>
          <div className='border-[0.5px] w-full' />
          <h1 className='font-bold tracking-wider text-lg text-white text-center whitespace-nowrap'>{title}</h1>
          <div className='border-[0.5px] w-full' />
        </div>
    </section>
  )
}

export default Hero