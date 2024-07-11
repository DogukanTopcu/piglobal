"use client"
import React, { useContext } from 'react';
import Hero from '../../../common/Hero'
import { RecruitmentsHeroData } from '../../data/heroData';
import { Icon } from '@iconify/react';
import { ScreenSizeContexts } from '@/contexts/ScreenSizeContext';


const contentData = `<div class='container max-w-4xl mx-auto my-24 px-4'>
          <h1 class='sm:leading-10 sm:text-xl text-lg font-semibold'>Pi Global Co. Recruitment Process</h1>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>At Pi Global Co., we wholeheartedly believe that our success is dependent on our most valuable resource, our employees. In this context, within the framework of our mission, vision, and principles, we develop our human resources processes to find and employ the most talented employees.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>We evaluate candidates applying for our open positions according to the process outlined below and complete the recruitment process.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>We initially review the resumes of our applicants based on the specified qualifications and job description.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>Based on our set of <a class="text-blue-700 underline" href='/en/human-resources/our-principles' target='_blank'>9 principles</a> (Assure, Win Hearts, Produce Result, Be the Best, Understand the Customer, Seize The Future, Add Meaning, Guide and Empower), we conduct principle-based interviews with suitable candidates together with our HR team and relevant department managers.</p>
          <br />
          <br />
          <p class='sm:leading-8 leading-7 sm:text-lg'>We extend a job offer to the candidate deemed suitable for the position. Our recruitment process is completed once the candidate accepts the offer and begins their employment.</p>
        </div>`;

const Recruitment = () => {
  const content = contentData;
  const data = RecruitmentsHeroData;
  return (
    <div>
        <Hero img={data.image} title={data.title} />
        
        <div dangerouslySetInnerHTML={{__html: content }} />
        
        <RecruitmentProgress />

        
    </div>
  )
}



const RecruitmentProgress = () => {
  const data = recruitmentProgressData;
  return (
    <div className='flex flex-wrap items-center justify-center container max-w-4xl mx-auto px-4 mb-20'>
      {
        data.map((d, idx) => {
          console.log(idx == data.length);
          return (
            <RecruitmentProgressCard key={idx} icon={d.icon} name={d.name} isLast={idx == data.length - 1} />
          )
        })
      }
    </div>
  )
}

const RecruitmentProgressCard = ({ icon, name, isLast } : { icon: string; name: string; isLast: Boolean }) => {
  const { screenWidth } = useContext(ScreenSizeContexts);
  return (
    <div className={`h-52 flex items-center my-2 text-[#25456c] ${isLast ? "justify-start" : "justify-between"} ${screenWidth > 450 ? "flex-row w-52" : "flex-col w-full"}`}>
      <div className={`h-full ${screenWidth > 450 ? "w-40" : "w-full"} border-2 border-[#25456c] p-4 rounded-lg flex flex-col items-center justify-center gap-8`}>
        {/* Icon */}
        <div
            style={{
                backgroundImage: icon,
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}
            className='w-[80px] h-[80px]'
        />

        {/* Name */}
        <p className='font-bold text-center'>{name}</p>
      </div>

      {
        !isLast ? screenWidth > 450 ? (
          <div className=''>
            <Icon icon="ic:round-arrow-right" width="50" height="80" style={{color: "#25456c"}} />
          </div>
        ) : (
            <div className=''>
                <Icon icon="iconamoon:arrow-down-2-fill" width="80" height="50"  style={{color: "#25456c"}} />    
            </div>
        ) : null
      }
    </div>
  )
}



const recruitmentProgressData = [
  {
    order: 1,
    name: "Resume Evaluation",
    icon: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 20 20'%3E%3Cg fill='%2325456c'%3E%3Cpath d='M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01'/%3E%3Cpath fill-rule='evenodd' d='M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75' clip-rule='evenodd'/%3E%3Cpath fill-rule='evenodd' d='M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006' clip-rule='evenodd'/%3E%3Cpath fill-rule='evenodd' d='M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1' clip-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`
  },
  {
    order: 2,
    name: "Principle Based Interview",
    icon: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%2325456c' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M7 6V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2h4c1.414 0 2.121 0 2.56.44C17 2.878 17 3.585 17 5v1c0 1.414 0 2.121-.44 2.56C16.122 9 15.415 9 14 9h-1l-3 2V9c-1.414 0-2.121 0-2.56-.44C7 8.122 7 7.415 7 6M3.59 18.74c-.629.422-2.277 1.282-1.273 2.358c.49.526 1.037.902 1.723.902h3.92c.686 0 1.233-.376 1.723-.902c1.004-1.076-.644-1.936-1.273-2.357a4.29 4.29 0 0 0-4.82 0m12-.001c-.629.422-2.277 1.282-1.273 2.358c.49.526 1.037.902 1.723.902h3.92c.686 0 1.233-.376 1.723-.902c1.004-1.076-.644-1.936-1.273-2.357a4.29 4.29 0 0 0-4.82 0M8 13.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m12 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0' color='%2325456c'/%3E%3C/svg%3E")`,
  },
  {
    order: 3,
    name: "Testing and Inventory",
    icon: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'%3E%3Cpath fill='%2325456c' d='M5 19V5h7v7h7v1c.7 0 1.37.13 2 .35V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2zm9-14.5l5.5 5.5H14zm8.5 12.75L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59z'/%3E%3C/svg%3E")`,
  },
  {
    order: 4,
    name: "Job Offer",
    icon: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 24 24'%3E%3Cpath fill='%2325456c' d='M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6'/%3E%3C/svg%3E")`,
  },
];


export default Recruitment