import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';
import { contactInfoDataTR } from '../../data/contactDataTR';

const ContactInformationTR = () => {
    const data = contactInfoDataTR;
  return (
    <div>
        <h1 className='text-2xl font-bold leading-10 my-8'>Contact</h1>

        {
            data.map((d) => {
                return (
                    <ContactCard data={d} />
                )
            })
        }
    </div>
  )
}


interface IContactInfoData {
    title: string;
    address: string;
    phone: string;
    otherInfos: string[];

}
const ContactCard = ({ data } : { data : IContactInfoData }) => {
    return (
        <div className='flex flex-col items-start justify-start gap-4 shadow-xl py-5 px-10 rounded-lg'>
            <h1 className='font-bold'>{data.title}</h1>

            <div className='flex justify-start items-center gap-4'>
                <FaLocationDot size={20} />
                <address>{data.address}</address>
            </div>


            <div className='flex justify-start items-center gap-4'>
                <FaPhone size={20} />
                <a href={`tel:+9${data.phone}`}>{data.phone}</a>
            </div>

            {
                data.otherInfos.map((o) => {
                    return(
                        <p>{o}</p>
                    )
                })
            }
        </div>
    )
}

export default ContactInformationTR