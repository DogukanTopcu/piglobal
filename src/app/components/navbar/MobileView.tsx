import { NavbarContexts } from "@/contexts/NavbarContext";
import { ScreenSizeContexts } from "@/contexts/ScreenSizeContext";
import { useContext, useEffect, useState } from "react";

const MobileView = () => {
    const [tempScrollY, setTempScrollY] = useState(0);
    const { isOpen, setIsOpen } = useContext(NavbarContexts);
    const { scrollY } = useContext(ScreenSizeContexts);
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (isOpen) {
            document.getElementById("body")?.classList.add("fixed");
            console.log(document.getElementById("body"));
            setTempScrollY(scrollY);
        }
        else {
            document.getElementById("body")?.classList.remove("fixed");
            window.scrollTo(0, tempScrollY);
        }
    }, [isOpen])
    return(
        <>
            <button onClick={handleMenuClick} className="flex justify-around items-center gap-4 mix-blend-difference">
                <p className={`font-bold transition-all duration-300 ease-out sm:text-lg text-xs ${isOpen ? "opacity-0" : "opacity-100"}`}>MENU</p>
                <div className="flex flex-col justify-center items-center">
                    <span className={`bg-white block transition-all duration-300 ease-out sm:h-1 h-0.5 w-8 sm:rounded-2xl rounded ${isOpen ? 'rotate-45 sm:translate-y-1.5 translate-y-1' : '-translate-y-1'}`} ></span>
                    <span className={`bg-white block transition-all duration-300 ease-out sm:h-1 h-0.5 w-8 sm:rounded-2xl rounded my-0.5 ${isOpen ? 'opacity-0 -translate-x-20' : 'opacity-100'}`}  ></span>
                    <span className={`bg-white block transition-all duration-300 ease-out sm:h-1 h-0.5 w-8 sm:rounded-2xl rounded ${isOpen ? '-rotate-45 sm:-translate-y-1.5 -translate-y-1' : 'translate-y-1'}`}  ></span>
                </div>
            </button>
        </>
    )
}


export default MobileView;