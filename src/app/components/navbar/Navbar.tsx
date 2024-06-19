"use client"
import Image from "next/image";

import { logoData } from "@/data/data";
import { useContext, useState } from "react";
import { NavbarContexts, ScreenSizeContexts } from "../../page";

import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import { TR } from 'country-flag-icons/react/3x2';
import WideView from "./WideView";
import MobileView from "./MobileView";

const Navbar = () => {
    const { scrollY, screenWidth } = useContext(ScreenSizeContexts);

  return (
    <nav className={`fixed w-screen ${scrollY > 200 ? "lg:h-20 h-14 bg-white" : "lg:h-28 h-20"} z-30 transition-all duration-300 ease-out flex items-center`}>
        <div className='flex justify-between items-center bg-transparent h-full w-full lg:py-5 py-2 lg:px-16 px-8 max-w-screen'>
            <Image src={logoData} alt="logo" className="h-full w-auto rounded-xl" />

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

                <LanguageButton />
            </div>
        </div>
    </nav>
  )
}

const LanguageButton = () => (<button className="font-bold flex items-center justify-center gap-2"><p className="mix-blend-difference sm:text-lg text-xs">TR</p><TR title="Türkiye" className="w-5" /></button>)

export default Navbar