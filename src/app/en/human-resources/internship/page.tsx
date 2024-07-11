import React from 'react';
import UnderConstruction from '@/app/common/UnderConstruction';
import { Metadata } from 'next';
import { InternshipHeroData } from '../../data/heroData';
import Hero from '@/app/common/Hero';

export const metadata : Metadata = {
    title: "Internship",
    // description: "Gıda ve Tarım Ürünlerimiz"
  }

const Internship = () => {
  const content = contentData;
  const data = InternshipHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />

        <div dangerouslySetInnerHTML={{__html: content }} />
    </div>
  )
}


const contentData = `<div class='container max-w-4xl mx-auto my-24 px-4'>
          <h1 class='sm:leading-10 sm:text-xl text-lg font-semibold'>Pi Global Co. Internship Program</h1>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>At Pi Global Co., we consider our internship program as a “potential employee candidate experience”. We care about the perspective, technical knowledge, and energy of our potential employee candidates who continue their education. In our university internship program, we aim to ensure that students become a part of professional life. We open our doors to university students who want to benefit from our experience and have a good internship experience on their career journey.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>We provide internship opportunities to university students with mandatory internship obligations through a careful selection process following their application for the summertime internship program. During the internship, students have the chance to work with experienced professionals in their field, allowing them to apply their theoretical knowledge in practice and gain valuable insights into the professional world. Additionally, we offer training sessions and seminars throughout the internship period to support the personal and professional development of the students.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>To apply for suitable internship programs, you can reach and apply by <a class="text-blue-700 underline" href="/en/contact">contact us</a>.</p>
        </div>`


export default Internship