import { motion } from "framer-motion";
import { useState } from 'react';
import { aboutUsDataTR, referenceDataTR } from '../../data/contentDataTR';

const AboutUsTR = () => {
    const data = aboutUsDataTR.filter((x) => x.isActive)[0];
  return (
    <section className='container max-w-7xl mx-auto sm:py-24 py-16 flex flex-col sm:gap-16 gap-10 px-6'>
        {/* title */}
        <h1 className='sm:text-2xl text-lg tracking-[0.3em] text-[#25456c]'>{data.title}</h1>

        {/* Content */}
        <div className='sm:grid sm:grid-cols-2'>
            <h2 className='sm:text-5xl text-2xl font-bold sm:tracking-wide leading-snug sm:text-left text-center sm:mb-0 mb-8'>{data.subtitle}</h2>
            <desc className='sm:font-semibold sm:text-md text-sm flex items-center justify-center sem:text-left text-center'>
                {data.desc}
            </desc>
        </div>

        {/* Data */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:mt-20 mt-8 gap-y-20'>
            {
                data.numerics.map((d, idx) => {
                    return (
                        <DataCard key={idx} data={d} />
                    )
                })
            }
        </div>

        {/* References */}
        <References />
    </section>
  )
}

interface DataCardInterface {
    toptext: string;
    subtext: string;
    num: number;
    unit: string;
    icon: string;
}

const DataCard = ( { data } : { data : DataCardInterface} ) => {
    
    return (
        <div className='flex flex-col items-center justify-center sm:gap-10 gap-6'>
            <motion.div

                style={{
                    backgroundImage: `url(${data.icon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className='sm:w-36 sm:h-36 w-24 h-24'
            />
            <div className='flex flex-col justify-center items-center sm:gap-4 gap-2'>
                <p>{data.toptext}</p>
                <div className='flex justify-center items-end gap-3'>
                    <p className='text-4xl font-bold tracking-tighter'>{data.num.toLocaleString('en', {useGrouping:true})}</p>
                    <p className='text-xl font-bold'>{data.unit}</p>
                </div>
                <p>{data.subtext}</p>
            </div>
        </div>
    )
}


const References = () => {
    const references = referenceDataTR;
    return (
        <div className='flex flex-col items-center justify-center pt-10'>
            <h1 className='text-[#25456c] text-2xl tracking-wider font-bold'>REFERANSLARIMIZ</h1>

            <div className='flex justify-center items-center flex-wrap gap-x-10 pt-12'>
                {
                    references.map((r, idx) => {
                        return (
                            <ReferenceCard key={idx} reference={r} />
                        )
                    })
                }
            </div>
        </div>
    )
}

interface ReferenceCardInterface {
    referenceName: string;
    referenceUrl: string;
    referenceImg: string;
}
const ReferenceCard = ( { reference } : { reference : ReferenceCardInterface }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='flex flex-col items-center cursor-pointer'
        >
            <div 
                style={{
                    backgroundImage: `url(${reference.referenceImg})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className={`sm:w-32 sm:h-32 w-16 h-16 transition-all duration-300 ease ${isHovered ? "-translate-y-4" : "grayscale"}`}
            />

            <p className={`transition-all duration-300 ease ${isHovered ? "opacity-100" : "opacity-0"}`}>
                {reference.referenceName}
            </p>
        </div>
    )
}

export default AboutUsTR