import Image from 'next/image';
import React from 'react';
import WP from "@/images/WhatsApp.svg.webp";

const WhatsAppTR = () => {
  return (
    <button className='fixed sm:left-10 sm:bottom-10 left-4 bottom-4 p-3 rounded-full sm:w-24 sm:h-24 w-16 h-16 bg-green-500'>
        <Image src={WP} alt='whatsapp' />
    </button>
  )
}

export default WhatsAppTR