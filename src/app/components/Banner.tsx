"use client"
import { motion, useMotionValue } from "framer-motion";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { bannerData, bannerLogo, bannerLogoTitle } from "@/data/data";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ScreenSizeContexts } from "@/contexts/ScreenSizeContext";


type BannerModel = {
    title: String,
    desc: String,
    image: string,
    button: String,
    redirect: String,
    icon: String
};

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 75,
};

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const Banner = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);

    // Otomatik geçiş kodu
    // useEffect(() => {
    //     const intervalRef = setInterval(() => {
    //       const x = dragX.get();
    //       if (x === 0) {
    //         setImgIndex((pv) => {
    //           if (pv === bannerData.length - 1) {
    //             return 0;
    //           }
    //           return pv + 1;
    //         });
    //       }
    //     }, AUTO_DELAY);
    //     return () => clearInterval(intervalRef);
    //   }, []);

    const onDragEnd = () => {
        const x = dragX.get();
        if (x <= -DRAG_BUFFER && imgIndex < bannerData.length - 1) {
          setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
          setImgIndex((pv) => pv - 1);
        }
      };
  return (
    <div className="relative h-[calc(100dvh)] transition-all duration-300 overflow-hidden bg-neutral-950">
        <motion.div 
        drag="x" 
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
            translateX: `-${imgIndex * 100}%`,
        }}
        transition={{
          type: "tween"
        }}
        // transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex items-center">
            {
                bannerData.map((d, idx) => {
                    const data : BannerModel = d;
                    return (
                        <motion.div
                        key={idx}
                        animate={{
                          scale: imgIndex === idx ? 1 : 0.85,
                        }}
                        style={{
                          backgroundImage: `url(${data.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        transition={{
                          type: "tween"
                        }}
                        // transition={SPRING_OPTIONS}
                        className="aspect-video bg-blend-overlay w-screen h-[calc(100dvh)] transition-all duration-300 shrink-0 bg-neutral-800 flex justify-center items-center"
                        >
                            <BannerData data={data} idx={idx} />
                        </motion.div>
                    );
                })
            }
        </motion.div>

        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        {/* <GradientEdges /> */}
    </div>
  )
}

const BannerData = ({data, idx} : { data: BannerModel, idx: number}) => {
  const { screenWidth } = useContext(ScreenSizeContexts);

    return (
    <div className="container max-w-6xl mx-auto w-full h-2/3 grid lg:grid-cols-2 flex justify-between items-center px-6">
      {
        idx === 0 && screenWidth < 1024 ?  (
          <div className="h-full">
            <EfectedLogo />
          </div>
        ) : null
      }
      <div className="text-white">
        {/* Text */}
        <h1 className="sm:text-2xl text-lg font-bold sm:mb-8 mb-4">{data.title}</h1>
        <p className="sm:text-md text-sm">{data.desc}</p>
      </div>
      <div className="flex justify-end items-end w-full h-full">
        {
          idx === 0 && screenWidth > 1024 ?  (
            <div className="h-full">
              <EfectedLogo key={idx} />
            </div>
          ) : null
        }
        {/* Button */}
        <button className="sm:px-10 px-8 sm:py-4 py-2 sm:text-md text-sm rounded font-bold bg-[#90302d] text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          {data.button}
        </button>
      </div>
    </div>
    );
}

const EfectedLogo = () => {
  return (
    <div className="relative top-0 right-0 w-full h-full flex flex-col justify-start items-center gap-10 lg:mt-20 mt-0">
      <div>
        <Image src={bannerLogo} alt="Logo" className="relative z-10 pointer-events-none sm:w-40 sm:h-40 w-20 h-20 sm:min-w-40" />
        <div className="absolute z-0 top-0 animate-ping sm:w-40 sm:h-40 w-20 h-20 rounded-full border-2 border-white bg-sky-400 opacity-75" />
      </div>
      <Image src={bannerLogoTitle} alt="Logo" className="relative z-10 pointer-events-none sm:w-100 w-48 brightness-200 -mt-4 sm:mt-0" />
    </div>
  );
}



const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 w-full sm:h-12 h-5 absolute z-20 bottom-12 flex justify-center items-center ">
      <div className="flex w-full justify-center items-center sm:gap-12 gap-6">
        {bannerData.map((d, idx) => {
          return (
            <Dot key={idx} idx={idx} imgIndex={imgIndex} icon={d.icon} setImgIndex={setImgIndex} />
          );
        })}
      </div>
    </div>
  );
};
  
const Dot = ( { idx, imgIndex, icon, setImgIndex } : { idx: number, imgIndex: number, icon: string, setImgIndex: Dispatch<SetStateAction<number>> }) => {
  return (
    <button
      key={idx}
      onClick={() => setImgIndex(idx)}
      className={`sm:hover:p-4 hover:p-1.5 rounded-full transition-all hover:border-2 hover:border-white hover:rounded-full
      ${
        idx === imgIndex ? "bg-neutral-50 p-4" : "grayscale"
      }`}
    >
      <div
        style={{
          backgroundImage: `url(${icon})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`sm:h-10 sm:w-10 h-6 w-6 ${idx !== imgIndex ? "invert" : ""}`}
      />
      {/* <Image src={d.icon} alt="icon" className="sm:h-8 sm:w-8 h-3 w-3 " /> */}
    </button>
  )
}

export default Banner