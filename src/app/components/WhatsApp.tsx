import Image from 'next/image';
import React from 'react';
import WP from "@/images/WhatsApp.svg.webp";

const WhatsApp = () => {
  return (
    <button className='fixed right-10 bottom-10 p-3 rounded-full w-24 h-24 bg-green-500'>
        <Image src={WP} alt='whatsapp' />
    </button>
  )
}

export default WhatsApp