"use client"
import axios from 'axios';
import React, { FormEvent, useEffect, useState } from 'react'
import { ourServicesDataTR } from '../../data/contentDataTR';
import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';

const ContactFormTR = () => {
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
        <h1 className='mb-7 font-bold text-2xl leading-10'>İletişim Formu</h1>

        <form onSubmit={onSubmit} className='flex flex-col w-full gap-4' method='POST'>
            <SubjectOption />

            <CInput type="email" name="email" placeholder="E-Mailiniz*" />
            <CInput type="text" name="fullName" placeholder="Tam İsminiz*" />
            <CInput type="text" name="phone" placeholder="Telefon Numarası*" />
            
            <textarea 
                className='w-full p-4 min-h-36 border-b-2'
                name='message'
                placeholder='Mesaj*'
                required
            />

                
            <p onClick={() => setIsChecked(true)} className='text-sm leading-7 text-[#4b506b] my-6 cursor-default'>
                <input className='mr-4'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                type="checkbox" name="accept" required />
                Kişisel Verilerin Korunması ve İşlenmesi Genel Aydınlatma Bildirimi&apos;nde belirtilen kişisel verilerimin işlenmesine, Pi Global Co.&apos;nun duyuru, reklam, kampanya vb. konularda şahsıma ticari elektronik ileti göndermesine, bilgilerimin bu amaçla kullanılmasına, saklanmasına ve hizmet sağlayıcı üçüncü kişilerle paylaşılmasına açık bir şekilde rıza veriyorum. 
            </p>

            <button disabled={isLoading || success == 1 || success == 2 ? true : false} className={`w-full py-4 ${success == 1 ? "bg-green-700" : success == 2 ? "bg-red-700" : "bg-[#3694ff]"} 
            text-white font-bold tracking-wider rounded text-center flex items-center justify-center
            transition-all duration-300 ease`}
            type="submit">
                {isLoading ? <BeatLoader /> : success == 1 ? <FaCheck /> : success == 2 ? <MdClose /> : "Gönder"}
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
    const data = ourServicesDataTR;
    return (
        <select name="subject" defaultValue="--Select Subject--" required className='p-4 border-b-2'>
          <option disabled>--Konu Seçiniz--</option>
          {
            data.map((d, idx) => {
                return (
                    <option key={idx} value={d.title}>{d.title}</option>
                )
            })
          }
          <option value="İş Başvurusu">İş Başvurusu</option>
          <option value="Staj">Staj</option>
        </select>
    )
}


export default ContactFormTR