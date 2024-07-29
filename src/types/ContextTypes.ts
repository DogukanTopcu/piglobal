import { User } from "@/models/User.model";
import { Dispatch, SetStateAction } from "react";

export type TypeNavbarContext = {
  isOpen: Boolean,
  setIsOpen: Dispatch<SetStateAction<Boolean>>,

  isPopUpOpen: Boolean,
  setIsPopUpOpen: Dispatch<SetStateAction<Boolean>>
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


export type AdminContext = {
  user: User,
  setUser: Dispatch<SetStateAction<User>>,

  session: String,
  setSession: Dispatch<SetStateAction<String>>,

  login: ({ email, password } : { email: string, password: string }) => Promise<boolean>,
  logout: Dispatch<SetStateAction<User>>,
}