"use client"
import { menuData } from "@/app/en/data/data";
import { ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageButton } from "./Navbar";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import React from "react";

const WideView = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [dir, setDir] = useState<null | "l" | "r">(null);

    const data = menuData.sort((x, y) => (x.order > y.order) ? 1 : -1);

    const handleSetSelected = (val: number | null) => {
      if (typeof selected === "number" && typeof val === "number") {
        setDir(selected > val ? "r" : "l");
      } else if (val === null) {
        setDir(null);
      }

      setSelected(val);
    };
    return (
        <>
            <ul onMouseLeave={() => handleSetSelected(null)} className="flex justify-between items-center gap-6 mix-blend-difference">
                {
                    data.map((d) => {
                        return (
                            <FlyoutLink key={d.order} href={d.url} type={d.type} mainTitle={d.mainTitle} >
                                {d.mainTitle}
                            </FlyoutLink>
                        )
                    })
                }
            </ul>
            <LanguageButton />
        </>
    )
}


const FlyoutLink = ({ children, href, type, mainTitle } : { children : ReactNode; href : string; type : number | null; mainTitle : string; }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <Link
            href={type == 0 ? href : ""}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            <button className="relative text-white">
                <div className="flex items-center justify-center gap-2">
                    {children}
                    {
                        type! > 0 ? (
                            <FiChevronDown className={`transition-transform ${
                                open ? "rotate-180" : ""
                            }`} />
                        ) : null
                    }
                </div>
                <span
                    style={{
                        transform: open ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"
                />
            </button>

            {
                type == 1 || type == 2 ? (
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial = {{ opacity: 0, y: 15}}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                style={{ translateX: "-50%" }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute left-1/2 top-12 bg-white text-black py-6 w-fit text-nowrap"
                            >
                                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                                
                                {/* Content */}
                                <TypeOneContent mainTitle={mainTitle} router={router} />

                            </motion.div>
                        )}
                    </AnimatePresence>
                ) : null
            }
        </Link>
    )
}


const TypeOneContent = ({ mainTitle, router } : { mainTitle : string, router: AppRouterInstance }) => {
    const data = menuData.filter((x) => x.mainTitle == mainTitle)[0];
    return (
        <ul className="flex flex-col items-start gap-4">
            {
                data.subtitles.map((sub, idx) => {
                    return (
                        <li key={idx} className="border-b-2 w-full hover:border-[]">
                            <Link href={data.subtitleUrls[idx]} className="hover:underline hover:border-l-8 border-l-2 border-blue-500 px-6 text-start transition-all duration-300 ease-out w-full">
                            {sub}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
}




export default WideView;