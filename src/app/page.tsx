"use client"
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import { Dispatch, SetStateAction, createContext, useState } from "react";



type TypeContext = {
  isOpen: Boolean,
  setIsOpen: Dispatch<SetStateAction<Boolean>>
};
const TypeContextState = {
  isOpen: false,
  setIsOpen: () => false
};

export const SidebarContext = createContext<TypeContext>(TypeContextState);


export default function Home() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <main className="">
      <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
        <Navbar />
        <Banner />
        <Menu />
      </SidebarContext.Provider>
    </main>
  );
}
