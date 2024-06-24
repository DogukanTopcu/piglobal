import Image from 'next/image'
import Construction from "@/images/under-construction.png";


const UnderConstruction = () => {
  return (
    <div className='w-full h-full bg-[#fec74e] w-screen h-screen flex justify-center items-center'>
        <Image className='container max-w-6xl mx-auto w-full pointer-events-none'
        src={Construction} alt='This page is under construction' /> 
    </div>
  )
}

export default UnderConstruction