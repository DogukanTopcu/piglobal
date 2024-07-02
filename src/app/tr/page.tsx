"use client"
import { NavbarContexts } from '@/contexts/NavbarContext';
import { ScreenSizeContexts } from '@/contexts/ScreenSizeContext';
import React, { useEffect, useState } from 'react'
import WhatsAppTR from './components/WhatsAppTR';
import FooterTR from './components/FooterTR';
import ServicesTR from './components/home/ServicesTR';
import OurProductsTR from './components/home/OurProductsTR';
import AboutUsTR from './components/home/AboutUsTR';
import MenuTR from './components/navbar/MenuTR';
import BannerTR from './components/BannerTR';
import PopupTR from './components/PopupTR';
import NavbarTR from './components/navbar/NavbarTR';
import YediYirmidortTR from './components/home/7_24TR';

const HomePageTR = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState<Boolean>(true);
  
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
        <BannerTR />
        <PopupTR />
        <AboutUsTR />
        <OurProductsTR />
        <ServicesTR />
        <YediYirmidortTR />
        <WhatsAppTR />
    </main>
  )
}

export default HomePageTR