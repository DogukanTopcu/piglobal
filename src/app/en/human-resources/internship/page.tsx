import React from 'react';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';

export const metadata : Metadata = {
    title: "Internship",
    // description: "Gıda ve Tarım Ürünlerimiz"
  }

const Internship = () => {
  return (
    <div>
        <UnderConstruction />
    </div>
  )
}

export default Internship