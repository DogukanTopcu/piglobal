import { Dispatch, SetStateAction } from "react";

export type TypeNavbarContext = {
  isOpen: Boolean,
  setIsOpen: Dispatch<SetStateAction<Boolean>>,

  isPopUpOpen: Boolean,
  setIsPopUpOpen: Dispatch<SetStateAction<Boolean>>
};
export const TypeNavbarContextState = {
  isOpen: false,
  setIsOpen: () => false,

  isPopUpOpen: true,
  setIsPopUpOpen: () => true
};


export type ScreenSizeContext = {
    isTop: Boolean,
    setIsTop: Dispatch<SetStateAction<Boolean>>,

    scrollY: number,
    setScrollY: Dispatch<SetStateAction<number>>,

    screenWidth: number,
    setScreenWidth: Dispatch<SetStateAction<number>>,

    screenHeight: number,
    setScreenHeight: Dispatch<SetStateAction<number>>
}
export const ScreenSizeContextState = {
    isTop: true,
    setIsTop: () => true,

    scrollY: 0,
    setScrollY: () => 0,

    screenWidth: 0,
    setScreenWidth: () => 0,

    screenHeight: 0,
    setScreenHeight: () => 0
}