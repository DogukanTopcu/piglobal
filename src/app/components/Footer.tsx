import { logoData, menuData, socialMedias } from '@/data/data'
import Image from 'next/image'
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Footer = () => {
    const allMenuData = menuData.sort((x, y) => x.order > y.order ? 1 : -1);
    const socials = socialMedias;
  return (
    <footer className='w-screen pt-12 bg-[#efefef]'>
        <div className='container max-w-7xl mx-auto flex flex-row justify-between items-start my-10 px-10 gap-10'>
            
            <div className='max-w-[250px]'>
                {/* Logo and Communication */}
                <Image src={logoData} alt="logo" className="w-full h-auto rounded-xl mb-10" />
                <div>
                    <p className='mt-3 font-bold text-lg text-center w-full my-5'>Communication</p>
                    <div className='flex justify-start items-start gap-4 my-5'>
                        {/* Location */}
                        <FaLocationDot size={36} />
                        <p className='text-sm'>Batıkent mahallesi 09083 nolu sk. Şehzade evleri C blok kat 5 daire 10 Şehitkaml/Gaziantep</p>
                    </div>
                    <div className='flex justify-start items-start gap-4'>
                        {/* Phone */}
                        <FaPhone size={14} />
                        <a className='text-sm' href="tel:+903423424200">0 (342) 342 42 00</a>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-between items-start gap-12'>
                {/* Other Columns */}
                {
                    allMenuData.map((d) => {
                        if (d.type > 0) {
                            return (
                                <div>
                                    <h1 className='font-bold mb-2 text-lg'>{d.mainTitle}</h1>
                                    <ul className='flex flex-col gap-3'>
                                        {
                                            d.subtitles.map((s) => (<li className='cursor-pointer hover:underline'>{s}</li>))
                                        }
                                    </ul>
                                </div>
                            );
                        }
                        else {
                            null
                        }
                    })
                }
            </div>

            <div>
                {/* Last Column and Social Media buttons */}
                <ul className='flex flex-col gap-3 mb-10'>
                    {
                        allMenuData.map((d) => {
                            if (d.type == 0) {
                                return (<li className='cursor-pointer hover:underline'>{d.mainTitle}</li>)
                            }
                            else null;
                        })
                    }
                </ul>

                <div>
                    {/* Social Media */}
                    <h1 className='font-bold text-lg mb-2'>FOLLOW US</h1>
                    <ul className='flex flex-col gap-4'>
                        {
                            socials.map((s) => {
                                return (
                                    <li className='flex justify-start gap-3 items-center'>
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
            <p>All rights are reserved © 2024 Pi Global</p>
        </div>
    </footer>
  )
}

export default Footer