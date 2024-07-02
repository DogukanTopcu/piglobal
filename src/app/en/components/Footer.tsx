import { ScreenSizeContexts } from '@/contexts/ScreenSizeContext';
import { logoData, menuData, socialMedias } from '@/app/en/data/data'
import Image from 'next/image'
import React, { useContext } from 'react';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { contactInfoData } from '../data/contactData';

import { PiDiamondsFourFill } from "react-icons/pi";

const Footer = () => {
    const { screenWidth } = useContext(ScreenSizeContexts);

    const router = useRouter();

    const allMenuData = menuData.sort((x, y) => x.order > y.order ? 1 : -1);
    const socials = socialMedias;
  return (
    <footer className='pt-12 bg-[#efefef]'>
        <div className='flex justify-center items-center sm:gap-8 gap-6 mb-16'>
            <div className='flex justify-center items-center gap-3'>
                <PiDiamondsFourFill />
                <h3>Dubai</h3>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <PiDiamondsFourFill />
                <h3>Gaziantep</h3>
            </div>
            <div className='flex justify-center items-center gap-3'>
                <PiDiamondsFourFill />
                <h3>İzmir</h3>
            </div>
        </div>
        <div className={`container max-w-7xl mx-auto flex ${screenWidth > 1024 ? "flex-row" : "flex-col"} justify-between items-start my-10 px-10 gap-10`}>
            <div className={`max-w-[250px] ${screenWidth > 1024 ? "" : "mx-auto"}`}>
                {/* Logo and Communication */}
                <Image src={logoData} alt="logo" className="w-full h-auto rounded-xl mb-10" />
                <div>
                    <p className='mt-3 font-bold text-lg text-center w-full my-5'>Communication</p>
                    <div className='flex justify-start items-start gap-4 my-5'>
                        {/* Location */}
                        <FaLocationDot size={36} />
                        <p className='text-sm'>{contactInfoData[0].address}</p>
                    </div>
                    <div className='flex flex-col w-full gap-4'>
                    {
                        contactInfoData[0].phones.map((p, idx) => {
                            return (
                                <div key={idx} className='flex justify-start items-start gap-4'>
                                    {/* Phone */}
                                    <FaPhone size={14} />
                                    <a className='text-sm' href={`tel:${p}`}>{contactInfoData[0].phonesAsText[idx]}</a>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>

            <div className={`flex w-full ${screenWidth > 1024 ? "flex-row items-start justify-between" : "flex-col items-center justify-center text-center"} gap-12`}>
                {/* Other Columns */}
                {
                    allMenuData.map((d, idx) => {
                        if (d.type > 0) {
                            return (
                                <div key={idx}>
                                    <h1 className='font-bold mb-2 text-lg w-full'>{d.mainTitle}</h1>
                                    <div className='flex flex-col gap-3'>
                                        {
                                            d.subtitles.map((s, idx) => (<button onClick={() => router.push(d.subtitleUrls[idx])} key={idx} className='cursor-pointer hover:underline text-left'>{s}</button>))
                                        }
                                    </div>
                                </div>
                            );
                        }
                        else {
                            null
                        }
                    })
                }
            </div>

            <div className={`${screenWidth > 1024 ? "" : "w-full flex flex-col justify-center items-center"}`}>
                {/* Last Column and Social Media buttons */}
                <div className={`flex flex-col gap-3 mb-10 ${screenWidth > 1024 ? "" : "justify-center items-center"}`}>
                    {
                        allMenuData.map((d, idx) => {
                            if (d.type == 0) {
                                return (<button onClick={() => router.push(d.url)} key={idx} className='cursor-pointer hover:underline font-bold text-lg text-left'>{d.mainTitle}</button>)
                            }
                            else null;
                        })
                    }
                </div>

                <div>
                    {/* Social Media */}
                    <h1 className='font-bold text-lg mb-2'>FOLLOW US</h1>
                    <ul className='flex flex-col gap-4'>
                        {
                            socials.map((s, idx) => {
                                return (
                                    <li key={idx} className='flex justify-start gap-3 items-center'>
                                        {s.icon}
                                        <p className='text-sm'>{s.name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className='container mx-auto max-w-7xl w-full flex items-center justify-center py-8'>
            <p className='sm:text-[16px] text-xs'>All rights are reserved © 2024 Pi Global Co.</p>
        </div>
    </footer>
  )
}

export default Footer