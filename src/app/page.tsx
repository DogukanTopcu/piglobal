"use client"
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/navbar/Menu";
import { useEffect, useState } from "react";
import Popup from "./components/Popup";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";
import AboutUs from "./components/home/AboutUs";
import OurProducts from "./components/home/OurProducts";
import { ScreenSizeContexts } from "@/contexts/ScreenSizeContext";
import { NavbarContexts } from "@/contexts/NavbarContext";



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
  }, []);

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
          <Popup />
          <Banner />
          <Menu />
        </NavbarContexts.Provider>
        <AboutUs />
        <OurProducts />
        <WhatsApp />

        <Footer />
      </ScreenSizeContexts.Provider>
    </main>
  );
}
