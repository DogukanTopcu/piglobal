import { ScreenSizeContext } from "@/types/ContextTypes";
import { createContext } from "react";

const ScreenSizeContextState = {
    isTop: true,
    setIsTop: () => true,

    scrollY: 0,
    setScrollY: () => 0,

    screenWidth: 0,
    setScreenWidth: () => 0,

    screenHeight: 0,
    setScreenHeight: () => 0
}

export const ScreenSizeContexts = createContext<ScreenSizeContext>(ScreenSizeContextState);