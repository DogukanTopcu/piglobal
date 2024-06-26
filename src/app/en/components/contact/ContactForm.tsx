"use client"
import axios from 'axios';
import React, { FormEvent, useState } from 'react'

const ContactForm = () => {
    const [isChecked, setIsChecked] = useState(false);
    
    
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData.get("name"));
        console.log("Hello");

        const data = {
            name: formData.get("name"),
            surname: formData.get("surname"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        }

        await axios.post("../api/contact-us", data).then((res) => {
            console.log(res.data);
        }).catch((err) => console.log(err.message));
        
    }
  return (
    <div className='px-8 py-6 shadow-2xl mb-20'>
        <h1 className='mb-7 font-bold text-2xl leading-10'>Contact Form</h1>

        <form onSubmit={onSubmit} className='flex flex-col w-full gap-4' method='POST'>
            <CInput type="text" name="name" placeholder="Name*" />
            <CInput type="text" name="surname" placeholder="Surame*" />
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
                Kişisel Verilerin Korunması ve İşlenmesi Genel Aydınlatma Bildirimi’nde belirtilen kişisel verilerimin işlenmesine, Süper Film Ambalaj San. ve Tic. A.Ş.’nin duyuru, reklam, kampanya vb. konularda şahsıma ticari elektronik ileti göndermesine, bilgilerimin bu amaçla kullanılmasına, saklanmasına ve hizmet sağlayıcı üçüncü kişilerle paylaşılmasına açık bir şekilde rıza veriyorum. 
            </p>

            <button className='w-full py-4 bg-[#3694ff] text-white font-bold tracking-wider rounded'
            type="submit">Submit</button>
            
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

export default ContactForm