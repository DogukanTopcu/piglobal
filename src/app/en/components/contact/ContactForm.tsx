"use client"
import axios from 'axios';
import React, { FormEvent, useEffect, useState } from 'react'
import { ourServicesData } from '../../data/contentData';
import { BeatLoader } from 'react-spinners';

import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const ContactForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            setSuccess(0);
        }, 3000);
    }, [success]);
    
    
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        setIsLoading(true);

        const data = {
            subject: formData.get("subject"),
            email: formData.get("email"),
            fullName: formData.get("fullName"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        }

        await axios.post("../api/contact-us", data).then((res) => {
            console.log(res.data);
            setIsLoading(false);
            setSuccess(1);
        }).catch((err) => {
            console.log(err.message);
            setIsLoading(false);
            setSuccess(2);
        });
        
    }
  return (
    <div className='px-8 py-6 shadow-2xl mb-20'>
        <h1 className='mb-7 font-bold text-2xl leading-10'>Contact Form</h1>

        <form onSubmit={onSubmit} className='flex flex-col w-full gap-4' method='POST'>
            <SubjectOption />

            <CInput type="email" name="email" placeholder="Your Email*" />
            <CInput type="text" name="fullName" placeholder="Your Full Name*" />
            <CInput type="text" name="phone" placeholder="Phone Number*" />
            
            <textarea 
                className='w-full p-4 min-h-36 border-b-2'
                name='message'
                placeholder='Message*'
                required
            />

                
            <p onClick={() => setIsChecked(true)} className='text-sm leading-7 text-[#4b506b] my-6 cursor-default'>
                <input className='mr-4'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                type="checkbox" name="accept" required />
                I hereby expressly consent to the processing of my personal data specified in the General Clarification Notice on the Protection and Processing of Personal Data, Pi Global Co. to send commercial electronic messages to me regarding announcements, advertisements, campaigns, etc., to use and store my information for this purpose and to share it with service provider third parties. 
            </p>

            <button disabled={isLoading || success == 1 || success == 2 ? true : false} className={`w-full py-4 ${success == 1 ? "bg-green-700" : success == 2 ? "bg-red-700" : "bg-[#3694ff]"} 
            text-white font-bold tracking-wider rounded text-center flex items-center justify-center
            transition-all duration-300 ease`}
            type="submit">
                {isLoading ? <BeatLoader /> : success == 1 ? <FaCheck /> : success == 2 ? <MdClose /> : "Submit"}
            </button>
            
        </form>
    </div>
  )
}

const CInput = ({ type, name, placeholder } : { type: string; name: string; placeholder: string }) => {
    return (
        <input className='p-4 border-b-2'
        type={type} name={name} placeholder={placeholder} required />
    )
}


const SubjectOption = () => {
    const data = ourServicesData;
    return (
        <select name="subject" defaultValue="--Select Subject--" required className='p-4 border-b-2'>
          <option disabled hidden>--Select a Subject--</option>
          
          {
            data.map((d, idx) => {
                return (
                    <option key={idx} value={d.title}>{d.title}</option>
                )
            })
          }
          <option value="Recruitment">Recruitment</option>
          <option value="Internship">Internship</option>
        </select>
    )
}

export default ContactForm