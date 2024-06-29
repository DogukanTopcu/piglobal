import React from 'react'
import { contactInfoData } from '../../data/contactData';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';

import { MdAccessTimeFilled, MdEmail } from "react-icons/md";

const ContactInformation = () => {
    const data = contactInfoData;
  return (
    <div>
        <h1 className='text-2xl font-bold leading-10 my-8'>Contact</h1>

        {
            data.map((d, idx) => {
                return (
                    <ContactCard key={idx} data={d} />
                )
            })
        }


        <div className='md:col-span-2 h-[250px] md:h-[40vh] lg:h-[50vh] mt-12 shadow-xl rounded-[12px]'>
            <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.5363705241875!2d37.36672178322874!3d37.0685301807913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e14584438515%3A0xef07bb3d93b00b2e!2s%C4%B0ncilip%C4%B1nar%20Mah%2C%20Prof.%20Muammer%20Aksoy%20Blv.%20No%3A11%2C%2027090%20%C5%9Eehitkamil%2FGaziantep!5e0!3m2!1str!2str!4v1719497380596!5m2!1str!2str" width="100%" height="100%" style={{ border:0, borderRadius: "12px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}


interface IContactInfoData {
    title: string;
    address: string;
    phone: string;
    phoneAsText: string;
    time: string[];
    email: string,
    otherInfos: string[];
}

const ContactCard = ({ data } : { data : IContactInfoData }) => {
    return (
        <div className='flex flex-col items-start justify-start gap-8 shadow-xl py-12 px-10 rounded-lg'>
            <h1 className='font-bold'>{data.title}</h1>

            <div className='flex justify-start items-center gap-4'>
                <FaLocationDot size={20} />
                <address>{data.address}</address>
            </div>


            <div className='flex justify-start items-center gap-4'>
                <FaPhone size={20} />
                <a href={`tel:+9${data.phone}`}>{data.phoneAsText}</a>
            </div>

            {
                data.time.length != 0 ? (
                    <div className='flex justify-start items-center gap-4'>
                        <MdAccessTimeFilled size={20} />
                        <div>
                            {
                                data.time.map((t, idx) => (
                                    <p key={idx}>{t}</p>
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }

            <div className='flex justify-start items-center gap-4'>
                <MdEmail size={20} />
                <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>

            {
                data.otherInfos.map((o, idx) => {
                    return(
                        <p key={idx}>{o}</p>
                    )
                })
            }
        </div>
    )
}

export default ContactInformation