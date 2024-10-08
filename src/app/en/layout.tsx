"use client"
import React, { useEffect, useState } from 'react'
import { NavbarContexts } from '@/contexts/NavbarContext';
import Navbar from './components/navbar/Navbar';
import Menu from './components/navbar/Menu';
import { ScreenSizeContexts } from '@/contexts/ScreenSizeContext';
import Footer from './components/Footer';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState<Boolean>(false);

  const [isTop, setIsTop] = useState<Boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    const scroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", scroll, false);

    if (scrollY != 0) setIsTop(false);
    else setIsTop(true);

    return () => window.removeEventListener("scroll", scroll, false);
  }, [scrollY]);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const width = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", width, false);
    return () => window.addEventListener("resize", width, false);
  }, []);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    const height = () => setScreenHeight(window.innerHeight);
    window.addEventListener("resize", height, false);
    return () => window.addEventListener("resize", height, false);
  }, []);


    return (
      <main>
        <ScreenSizeContexts.Provider value={{ isTop, setIsTop, scrollY, setScrollY, screenWidth, setScreenWidth, screenHeight, setScreenHeight }}>
        <NavbarContexts.Provider value={{ isOpen, setIsOpen, isPopUpOpen, setIsPopUpOpen }}>
          <Navbar />
          <Menu />
        </NavbarContexts.Provider>
        
        {children}
        <Footer />

      </ScreenSizeContexts.Provider>
      </main>
    );
  }