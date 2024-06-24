"use client"
import React, { useState } from 'react'

const ContactFormTR = () => {
    const [isChecked, setIsChecked] = useState(false);
    const onSubmit = () => {

    }
  return (
    <div className='px-8 py-6 shadow-2xl mb-20'>
        <h1 className='mb-7 font-bold text-2xl leading-10'>İletişim Formu</h1>

        <form onSubmit={() => onsubmit} className='flex flex-col w-full gap-4'>
            <CInput type="name" name="name" placeholder="İsim*" />
            <CInput type="surname" name="surname" placeholder="Soyisim*" />
            <CInput type="phone" name="phone" placeholder="Telefon Numarası*" />
            
            <textarea 
                className='w-full p-4 min-h-36 border-b-2'
                name='message'
                placeholder='Mesaj*'
                required
            />

                
            <p onClick={() => setIsChecked(!isChecked)} className='text-sm leading-7 text-[#4b506b] my-6 cursor-default'>
                <input className='mr-4'
                checked={isChecked}
                type="checkbox" name="accept" required />
                Kişisel Verilerin Korunması ve İşlenmesi Genel Aydınlatma Bildirimi’nde belirtilen kişisel verilerimin işlenmesine, Pi Global Co.'nun duyuru, reklam, kampanya vb. konularda şahsıma ticari elektronik ileti göndermesine, bilgilerimin bu amaçla kullanılmasına, saklanmasına ve hizmet sağlayıcı üçüncü kişilerle paylaşılmasına açık bir şekilde rıza veriyorum. 
            </p>

            <button className='w-full py-4 bg-[#3694ff] text-white font-bold tracking-wider rounded'
            type="submit">Gönder</button>
            
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

export default ContactFormTR