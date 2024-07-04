"use client"
import React, { useEffect, useState } from 'react';


interface IContentData {
    title: string,
    content: string,
    bg_img: string,
    projects: {
        content: string,
        position: number,
        icon: string
    }[]
}
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;

const CircularBarTR = ({ contentData } : { contentData : IContentData }) => {
    const [selectedIcon, setSelectedIcon] = useState(0);

    useEffect(() => {
      const intervalRef = setInterval(() => {
        if (selectedIcon === 0) {
            setSelectedIcon((pv) => {
            if (pv === contentData.projects.length - 1) {
              return 0;
            }
            return pv + 1;
          });
        }
      }, AUTO_DELAY);
      return () => clearInterval(intervalRef);
    }, []);

  return (
    <div className='sm:w-[36rem] sm:h-[36rem] w-[80vw] h-[80vw] 
    rounded-full border-4 border-green-800'>
        
        <div className='relative w-full h-full flex justify-center items-center'>

            {/* Buttons */}
            {
                contentData.projects.sort((i, j) => (i.position >= j.position) ? 1 : -1)
                .map((p, idx) => {
                    let position = "";
                    switch (p.position) {
                        case 1: position = "sm:hover:-top-16 sm:-top-12 hover:-top-10 -top-8"; break;

                        case 2: position = 
                        "sm:hover:right-5 sm:hover:top-5 sm:right-8 sm:top-8 hover:-right-0 hover:-top-0 right-3 top-3"; 
                        break;
                        
                        case 3: position = "sm:hover:-right-16 sm:-right-12 hover:-right-10 -right-8"; break;
                        
                        case 4: position = 
                        "sm:hover:right-5 sm:hover:bottom-5 sm:right-8 sm:bottom-8 hover:right-0 hover:bottom-0 right-3 bottom-3"; 
                        break;
                        
                        case 5: position = "sm:hover:-bottom-16 sm:-bottom-12 hover:-bottom-10 -bottom-8"; break;
                        
                        case 6: position = 
                        "sm:hover:left-5 sm:hover:bottom-5 sm:left-8 sm:bottom-8 hover:left-0 hover:bottom-0 left-3 bottom-3"; 
                        break;
                        
                        case 7: position = "sm:hover:-left-16 sm:-left-12 hover:-left-10 -left-8"; break;
                        
                        case 8: position = 
                        "sm:hover:left-5 sm:hover:top-5 sm:left-8 sm:top-8 hover:left-0 hover:top-0 left-3 top-3"; 
                        break;
                        
                        default: position = "hover:-top-16 -top-12"; break;
                    }
                    return (
                        <button
                        onClick={() => setSelectedIcon(idx)}
                        key={idx}
                        style={{
                            backgroundImage: `url(${p.icon})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                        className={`absolute rounded-full
                        bg-white border-4 border-green-800
                        transition-all duration-300 ease-out
                        sm:w-24 sm:h-24 sm:hover:w-32 sm:hover:h-32
                        w-16 h-16 hover:w-20 hover:h-20
                        ${selectedIcon == idx ? "sm:w-32 sm:h-32 w-20 h-20" : "sm:w-24 sm:h-24 w-16 h-16"}
                        sm:bg-[length:50px] bg-[length:30px]
                        ${position}`}>
                        
                        </button>
                    );
                })
            }
            
            {/* Content */}
            <div className='flex flex-col justify-center items-center'>
                <p className='font-semibold sm:leading-7 sm:text-xl text-md sm:max-w-64 max-w-40 text-center text-white'>
                    {
                        contentData.projects[selectedIcon].content
                    }
                </p>
            </div>
        </div>


    </div>
  )
}

export default CircularBarTR