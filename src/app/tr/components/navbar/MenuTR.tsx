"use client"
import { useMotionValue, motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useContext, useRef, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { NavbarContexts } from "@/contexts/NavbarContext";
import { menuDataTR } from "../../data/dataTR";
import { useRouter } from "next/navigation";
import { LanguageButton } from "./NavbarTR";


const MenuTR = () => {
    const { isOpen } = useContext(NavbarContexts);
    const router = useRouter();

    const [selected, setSelected] = useState(-1);
    const data = menuDataTR.sort((x, y) => x.order > y.order ? 1 : -1);

  return (
    <section className={`fixed transition-all duration-300 ease-out bg-neutral-950 p-4 md:py-8 md:px-16 top-0 right-0 h-screen w-screen flex flex-col justify-between z-20 ${isOpen ? "block" : "-translate-y-[100%]"}`}>
        <div></div>
        <div className="mx-auto max-w-5xl w-full">
          {
            data.map((d, idx) => {
              return (
                <Link
                    key={idx}
                    heading = {d.mainTitle}
                    href="#"
                    type={d.type}
                    idx={idx}
                    setSelected={setSelected}
                />
              )
            })
          }
        </div>

        <button onClick={() => router.push("/")} className="text-white group relative flex items-center justify-between border-b-2 border-neutral-700 transition-colors duration-500 hover:border-neutral-50 p-4">
          <LanguageButton />
          <FiArrowRight size={32} className="text-5xl text-neutral-50" />
        </button>

        <SubsideMenu selected={selected} setSelected={setSelected} subtitles={data[selected] == null ? [] : data[selected].subtitles} subtitleLinks={data[selected] == null ? [] : data[selected].subtitleUrls} />
    </section>
  )
}

interface LinkProps {
  heading: string;
  href: string;
  type: number;
  setSelected: Dispatch<SetStateAction<number>>;
  idx: number;
}

const Link = ({ heading, href, type, setSelected, idx }: LinkProps) => {
    const ref = useRef<HTMLAnchorElement | null>(null);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
      const rect = ref.current!.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    };

    return (
        <motion.a
          onClick={() => {
            if (type > 0) {
              setSelected(idx);
            }
          }}
          href={href}
          ref={ref}
          onMouseMove={handleMouseMove}
          initial="initial"
          whileHover="whileHover"
          className="group relative flex items-center justify-between border-b-2 border-neutral-700 transition-colors duration-500 hover:border-neutral-50 p-4"
        >
            <div>
            <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: -16 },
                }}
                transition={{
                  type: "spring",
                  staggerChildren: 0.075,
                  delayChildren: 0.25,
                }}
                className="relative z-10 block text-xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-2xl"
            >
                <p>{heading}</p>
            </motion.span>
            </div>
          
            {
              type > 0 ? 
              (
                <motion.div
                  variants={{
                    initial: {
                      x: "25%",
                      opacity: 1,
                    },
                    whileHover: {
                      x: "0%",
                      opacity: 1,
                    },
                  }}
                  transition={{ type: "spring" }}
                  className="relative z-10"
                >
                    <FiArrowRight size={32} className="text-5xl text-neutral-50" />
                </motion.div>
              ) : null
            }
        </motion.a>
    );
};


const SubsideMenu = ({ selected, setSelected, subtitles, subtitleLinks } : { selected: number; setSelected: Dispatch<SetStateAction<number>>; subtitles: string[]; subtitleLinks: string[] }) => {
  const { isOpen } = useContext(NavbarContexts);
  return (
    <div className={`
      ${isOpen ? "block" : "hidden"}
      fixed transition-all duration-300 ease-out bg-neutral-950 p-4 md:py-8 md:px-16 top-0 right-0 h-screen w-screen flex flex-col justify-center z-20
    ${selected != -1 ? "translate-x-0" : "translate-x-[100%]"}`}>
      
      <button className="fixed left-10 top-20" onClick={() => setSelected(-1)}>
        <FiArrowLeft size={36} color="white" />
      </button>

      {
        subtitles.map((s, idx) => {
          return (
            <Link key={idx} heading={s} href={subtitleLinks[idx]} type={0} idx={idx} setSelected={setSelected} />
          )
        })
      }
    </div>
  )
}


export default MenuTR;