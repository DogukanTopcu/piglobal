import React from 'react'
import { Metadata } from 'next';
import Recruitment from './Recruitment';


export const metadata : Metadata = {
  title: "Recruitment",
  // description: "Gıda ve Tarım Ürünlerimiz"
}

const RecruitmentPage = () => <Recruitment />;

export default RecruitmentPage