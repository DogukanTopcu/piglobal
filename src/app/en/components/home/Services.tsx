import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons";
import { ScreenSizeContexts } from "@/contexts/ScreenSizeContext";
import { ourServicesData } from "@/app/en/data/contentData";

import ArrowIcon from "@/images/arrow-icon.png";

import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const Services = () => {
  const items = ourServicesData;
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="sm:py-24 py-16 text-black">
      <div className='container max-w-7xl mx-auto flex flex-col sm:gap-16 gap-10 px-6'>
        {/* title */}
        <h1 className='sm:text-4xl text-2xl text-center font-extrabold tracking-wide'>SERVICES</h1>

        {/* Content */}
        {/* <div className="flex flex-col h-fit w-full max-w-6xl mx-auto shadow overflow-hidden"> */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 h-fit w-full max-w-6xl mx-auto md:gap-20 gap-x-12 gap-y-20">
          {items.map((item, idx) => {
            return (
              <ServicesCard key={idx} title={item.title} desc={item.description} img={item.imgSrc} />
            );
          })}
        </div>

        {/* Contact Us Button */}
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="font-bold leading-10 tracking-wider text-2xl">For All Your Questions</h3>
          <Image src={ArrowIcon} alt="arrow" className="-translate-x-24" />
          <a href="/en/contact" className="bg-[#90302d] hover:bg-[#25456c] hover:px-10 hover:py-3 hover:my-1
          transition-all duration-300 ease-out
          rounded-full py-4 px-6 text-white font-bold">Contact Us</a>
        </div>

      </div>
    </section>
  );
};


interface ServiceProps {
  img: string, 
  title: string, 
  desc: string,
}
const ServicesCard = ({ img, title, desc } : ServiceProps) => {

  return (
    <div
    className="flex flex-col items-center justify-center w-full h-full cursor-pointer group pt-10">

      {/* Button Icon */}
      <div className="relative w-full transition-all duration-300 ease group-hover:-translate-y-12 z-30">
        <div className="p-4 absolute rounded-full bg-[#90302d] opacity-0
        group-hover:opacity-100 z-30
        transition-all duration-300 ease-in
        -right-2">
          <FiArrowUpRight color="white" size={24} />
        </div>
      </div>

      {/* Image */}
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}

        className="w-64 h-44 bg-black
        rounded-xl z-30 shadow-2xl
        -translate-y-20 group-hover:translate-y-10
        group-hover:bg-[#25456c] bg-blend-overlay bg-white/0
        transition-all duration-300 
        flex items-center justify-center text-center p-3
        absolute"
      >
        <p className="text-white text-sm font-semibold group-hover:opacity-100 opacity-0 
        transition-all duration-300">
          {desc}
        </p>
      </div>

      {/* Content */}
      <h2 className="font-bold text-lg absolute z-20 
      translate-y-16 group-hover:-translate-y-24
      transition-all duration-300 ease-out
      max-w-64 text-center">{title}</h2>

      {/* Back Box */}
      <div className="relative z-10 shadow-2xl rounded-xl w-full h-56 border-2 
      group-hover:-translate-y-10
      transition-all duration-300 ease-out"></div>

      
    </div>
  )
}

export default Services;