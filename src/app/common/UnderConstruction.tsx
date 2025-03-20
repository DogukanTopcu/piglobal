"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Construction from "@/images/under-construction.png";
import Logo from "@/images/piglobal-logo.png";

const UnderConstruction = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(prev => Math.min(prev + 1, 70));
    }, 50);
    
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#25456c]/30 to-[#25456c] p-24">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center rounded-xl bg-white/90 shadow-2xl p-6 md:p-10">
        {/* Logo */}
        <div className="mb-8">
          <Image 
            src={Logo} 
            alt="PI Global Logo" 
            width={180} 
            height={80} 
            className="object-contain"
          />
        </div>
        
        {/* Construction Image */}
        <div className="w-full mb-8 relative">
          <Image 
            src={Construction} 
            alt="Under Construction" 
            className="w-full object-contain max-h-[300px]"
          />
        </div>
        
        {/* Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We&apos;re Building Something Amazing!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Our team is working hard to create an exceptional experience for you.
            Please check back soon to see our progress.
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full max-w-md mb-10">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="h-4 rounded-full bg-amber-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">
            {progress}% Complete
          </p>
        </div>
        
        {/* Contact */}
        <div className="text-center">
          <p className="text-gray-700 mb-2">
            Questions? Get in touch with us:
          </p>
          <a 
            href="mailto:info@piglobal.com" 
            className="text-amber-600 hover:text-amber-800 font-medium"
          >
            info@piglobal.com
          </a>
        </div>
      </div>
      
      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} PI Global. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default UnderConstruction