"use client"
import Image from "next/image";

import { logoData } from "@/app/en/data/data";
import { useContext } from "react";


import { TR } from 'country-flag-icons/react/3x2';
import WideView from "./WideView";
import MobileView from "./MobileView";
import { ScreenSizeContexts } from "@/contexts/ScreenSizeContext";
import { usePathname, useRouter } from "next/navigation";
import { en_to_tr_dict } from "@/app/languageSupport";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const router = useRouter();
    const { scrollY, screenWidth } = useContext(ScreenSizeContexts);

  return (
    <nav className={`fixed w-screen ${scrollY > 200 ? "lg:h-20 h-14 bg-[#efefef]" : "lg:h-28 sm:h-20 h-16"} z-40 transition-all duration-300 ease-out flex items-center`}>
        <div className='flex justify-between items-center bg-transparent h-full w-full lg:py-5 py-2 lg:px-16 px-8 max-w-screen'>
            <Image onClick={() => router.push("/")} src={logoData} alt="logo" className="h-full w-auto rounded-xl cursor-pointer" />

            <div className="text-white flex justify-center items-center sm:gap-12 gap-6">
                {
                    screenWidth > 1024 ? (
                        <WideView />

                    )
                    :
                    (
                        <MobileView />
                    )
                }

            </div>
        </div>
    </nav>
  )
}


export const LanguageButton = () => {
    const router = useRouter();
    const location = usePathname();
    return (
        <Link href={location == "/" ? "/tr" : en_to_tr_dict[location]} className="font-bold flex items-center justify-center gap-2"><p className="mix-blend-difference sm:text-lg text-xs">TR</p><TR title="Türkiye" className="w-5" /></Link>
    )
}

export const MobileLanguageButton = () => (<div className="font-bold flex items-center justify-center gap-2"><p className="sm:text-lg text-xs">TR</p><TR title="Türkiye" className="w-5" /></div>)

export default Navbar