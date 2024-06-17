"use client"
import { motion, useMotionValue } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { bannerData } from "@/data/data";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


type BannerModel = {
    title: String,
    desc: String,
    image: string,
    button: String,
    buttonUrl: String,
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
    <div className="relative h-screen overflow-hidden bg-neutral-950">
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
        transition={SPRING_OPTIONS}
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
                        transition={SPRING_OPTIONS}
                        className="aspect-video w-screen h-screen shrink-0 bg-neutral-800 flex justify-center items-center"
                        >
                            <BannerData {...data} />
                        </motion.div>
                    );
                })
            }
        </motion.div>

        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        <GradientEdges />
    </div>
  )
}

const BannerData = (data : BannerModel) => {
    return (
        <div className="h-full w-full">
            {/* <Image src={data.image} alt="carousel-img" className="relative z-0 w-full pointer-events-none object-cover object-contain" /> */}
            <p className="relative z-10">{data.title}</p>
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
    <div className="mt-4 flex w-full justify-center gap-2 absolute z-20 bottom-10">
      {bannerData.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};
  
  
const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[70vw]  bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[70vw]  bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

export default Banner