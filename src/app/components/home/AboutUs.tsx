import { aboutUsData, referenceData } from '@/data/contentData'
import { motion } from "framer-motion";
import { useState } from 'react';

const AboutUs = () => {
    const data = aboutUsData.filter((x) => x.isActive)[0];
  return (
    <section className='container max-w-7xl mx-auto py-24 flex flex-col gap-16'>
        {/* title */}
        <h1 className='text-2xl tracking-[0.3em] text-[#25456c]'>{data.title}</h1>

        {/* Content */}
        <div className='grid grid-cols-2'>
            <h2 className='text-5xl font-bold tracking-wide leading-snug'>{data.subtitle}</h2>
            <desc className='font-semibold flex items-center justify-center'>
                {data.desc}
            </desc>
        </div>

        {/* Data */}
        <div className='grid grid-cols-3 mt-20 gap-y-20'>
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
        <div className='flex flex-col items-center justify-center gap-10'>
            <motion.div

                style={{
                    backgroundImage: `url(${data.icon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className='w-36 h-36'
            />
            <div className='flex flex-col justify-center items-center gap-4'>
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
    const references = referenceData;
    return (
        <div className='flex flex-col items-center justify-center pt-10'>
            <h1 className='text-[#25456c] text-2xl tracking-wider font-bold'>REFERENCES</h1>

            <div className='flex justify-center items-center gap-x-10 pt-12'>
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
                className={`w-32 h-32 transition-all duration-300 ease ${isHovered ? "-translate-y-4" : "grayscale"}`}
            />

            <p className={`transition-all duration-300 ease ${isHovered ? "opacity-100" : "opacity-0"}`}>
                {reference.referenceName}
            </p>
        </div>
    )
}

export default AboutUs