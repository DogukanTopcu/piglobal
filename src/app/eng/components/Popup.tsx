"use client"
import React, { useContext } from 'react'
import { popupData } from '@/app/eng/data/data';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { MdOutlineClose } from "react-icons/md";
import { NavbarContexts } from '@/contexts/NavbarContext';


type PopUpType = {
  image: string | StaticImport,
  url: string
}

const Popup = () => {
  const { isPopUpOpen, setIsPopUpOpen } = useContext(NavbarContexts);
  const data : PopUpType = popupData;

  return (
    <>
    {
      isPopUpOpen ? 
      (
        <div className='fixed bg-slate-900/20 top-0 w-screen h-screen flex justify-center items-center backdrop-blur z-50'>
          <div
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
           className='container bg-[#e9e9e9] bg-blend-darken max-w-[700px] w-[95vw] h-[95vw] max-h-[700px] border-white border-2 flex justify-end items-start'>
            <button className='relative top-5 right-5 ' onClick={() => setIsPopUpOpen(false)}>
              <MdOutlineClose style={{color: 'white'}} size={32} className='cursor-pointer invert' />
            </button>
          </div>
        </div>
      )
      : null
    }
    </>
    
  )
}

export default Popup