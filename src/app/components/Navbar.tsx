"use client"
import Image from "next/image";

import { logoData } from "@/data/data";
import { useContext, useState } from "react";
import { SidebarContext } from "../page";

const Navbar = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <nav className="absolute w-screen z-30">
        <div className='flex justify-between align-center bg-transparent h-[100px] py-5 px-16'>
            <Image src={logoData} alt="logo" className="h-full w-auto rounded-xl" />

            <div className="flex justify-center align-center gap-10 text-white">
                <button className="font-bold">TR</button>
                <button onClick={handleMenuClick} className="flex justify-around items-center gap-4">
                    <p className={`font-bold transition-all duration-300 ease-out ${isOpen ? "opacity-0" : "opacity-100"}`}>MENU</p>
                    <div className="flex flex-col justify-center items-center">
                        <span className={`bg-white block transition-all duration-300 ease-out h-1 w-10 rounded-2xl ${isOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'}`} ></span>
                        <span className={`bg-white block transition-all duration-300 ease-out h-1 w-10 rounded-2xl my-1 ${isOpen ? 'opacity-0 -translate-x-20' : 'opacity-100'}`}  ></span>
                        <span className={`bg-white block transition-all duration-300 ease-out h-1 w-10 rounded-2xl ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1'}`}  ></span>
                    </div>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar