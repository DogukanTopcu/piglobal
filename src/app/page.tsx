"use client"
import Navbar from "./en/components/navbar/Navbar";
import Banner from "./en/components/Banner";
import Menu from "./en/components/navbar/Menu";
import { useEffect, useState } from "react";
import Popup from "./en/components/Popup";
import WhatsApp from "./en/components/WhatsApp";
import Footer from "./en/components/Footer";
import AboutUs from "./en/components/home/AboutUs";
import OurProducts from "./en/components/home/OurProducts";
import Services from "./en/components/home/Services"
import { ScreenSizeContexts } from "@/contexts/ScreenSizeContext";
import { NavbarContexts } from "@/contexts/NavbarContext";
import TwentyFourSeven from "./en/components/home/7_24";



export default function Home() {
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
      <ScreenSizeContexts.Provider value={{ isTop, setIsTop, scrollY, setScrollY, screenWidth, setScreenWidth, screenHeight, setScreenHeight }}>
        <NavbarContexts.Provider value={{ isOpen, setIsOpen, isPopUpOpen, setIsPopUpOpen }}>
          <Navbar />
          <Menu />
          <Popup />
          <Banner />
        </NavbarContexts.Provider>
        <AboutUs />
        <OurProducts />
        <Services />
        <TwentyFourSeven />
        <WhatsApp />
        <Footer />
      </ScreenSizeContexts.Provider>
    </main>
  );
}
