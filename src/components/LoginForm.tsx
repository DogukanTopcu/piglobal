"use client"
import { AdminContexts } from '@/contexts/AdminSessionContext';
import Image from 'next/image'
import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';
import { BeatLoader } from 'react-spinners';

const LoginForm = () => {
    const inputClass = "border-2 w-full px-4 py-2 rounded-lg";

    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(0);

    const { login } = useContext(AdminContexts);


    useEffect(() => {
        setTimeout(() => {
            setSuccess(0);
        }, 3000);
    }, [success]);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        setIsLoading(true);
        const feedback = await login({email: formData.get("email")!.toString(), password: formData.get("password")!.toString()});
        setIsLoading(false);

        if (feedback) {
            setSuccess(1);
        }
        else {
            setSuccess(2);
        } 
        
    }
  return (
    <div className='w-11/12 mx-auto'>
        {/* header */}
        <div className="flex flex-col items-center justify-center my-10 gap-4">
            <Image src="/logo-circular.svg" alt="Logo" width={175} height={175} />
            <h1 className='font-bold text-xl text-center'>Pi Global Admin Panel</h1>
        </div>

        {/* inputs and button */}
        <form onSubmit={onSubmit} className='flex flex-col items-center justify-center gap-2 w-full'>
            <input name='email' placeholder='email' className={inputClass} type="email" />
            <input name='password' placeholder='password' className={inputClass} type="password" />
            <button disabled={isLoading || success == 1 || success == 2 ? true : false} 
            className={`w-full mx-auto py-2 bg-blue-500 rounded-full text-white mt-6 transition-all duration-300 ease
                flex justify-center items-center
                ${success == 1 ? "bg-green-700" : success == 2 ? "bg-red-700" : "bg-[#3694ff]"}`} 
            type="submit">
                {isLoading ? <BeatLoader /> : success == 1 ? <FaCheck /> : success == 2 ? <MdClose /> : "Login"}
            </button>
        </form>
    </div>
  )
}

export default LoginForm