"use client"
import Image from "next/image";

import { logoData } from "@/app/en/data/data";
import { useContext } from "react";


import { US } from 'country-flag-icons/react/3x2';
import WideViewTR from "./WideViewTR";
import MobileViewTR from "./MobileViewTR";
import { ScreenSizeContexts } from "@/contexts/ScreenSizeContext";
import { usePathname, useRouter } from "next/navigation";
import { tr_to_en_dict } from "@/app/languageSupport";

const NavbarTR = () => {
    const { scrollY, screenWidth } = useContext(ScreenSizeContexts);
    const router = useRouter();

  return (
    <nav className={`fixed w-screen ${scrollY > 200 ? "lg:h-20 h-14 bg-[#efefef]" : "lg:h-28 sm:h-20 h-16"} z-40 transition-all duration-300 ease-out flex items-center`}>
        <div className='flex justify-between items-center bg-transparent h-full w-full lg:py-5 py-2 lg:px-16 px-8 max-w-screen'>
            <Image onClick={() => router.push("/tr")} src={logoData} alt="logo" className="h-full w-auto rounded-xl cursor-pointer" />

            <div className="text-white flex justify-center items-center sm:gap-12 gap-6">
                {
                    screenWidth > 1024 ? (
                        <WideViewTR />

                    )
                    :
                    (
                        <MobileViewTR />
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
        <button onClick={() => location == "/tr" ? router.push("/") : router.push(`${tr_to_en_dict[location]}`)} className="font-bold flex items-center justify-center gap-2"><p className="mix-blend-difference sm:text-lg text-xs">EN</p><US title="United States" className="w-5" /></button>
    )
}

export default NavbarTR