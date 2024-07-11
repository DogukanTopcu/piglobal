import React from 'react'
import { Metadata } from 'next';
import RecruitmentTR from './RecruitmentTR';


export const metadata : Metadata = {
  title: "İşe Alım",
  // description: "Gıda ve Tarım Ürünlerimiz"
}

const RecruitmentPage = () => <RecruitmentTR />;

export default RecruitmentPage