import Image from "next/image";
import { bannerLogo } from "./en/data/data";

export default function Loading() {
    return (
        <main className="flex flex-col justify-center items-center w-screen h-screen gap-20">
            <div className="flex justfify-center items-center">
                <Image src={bannerLogo} alt="Logo" className="relative z-10 pointer-events-none sm:w-40 sm:h-40 w-20 h-20 sm:min-w-40" />
                <div className="absolute z-0 animate-ping sm:w-40 sm:h-40 w-20 h-20 rounded-full border-2 border-white bg-sky-400 opacity-75" />
            </div>
            <h1 className="text-xl tracking-wider font-bold text-center">Loading...</h1>
        </main>
    )
  }