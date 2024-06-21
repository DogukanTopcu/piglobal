import { TypeNavbarContext } from "@/types/ContextTypes";
import { createContext } from "react";


const TypeNavbarContextState = {
  isOpen: false,
  setIsOpen: () => false,

  isPopUpOpen: true,
  setIsPopUpOpen: () => true
};

export const NavbarContexts = createContext<TypeNavbarContext>(TypeNavbarContextState);
