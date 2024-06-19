"use client"
import { useMotionValue, motion } from "framer-motion";
import React, { useContext, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { NavbarContexts } from "../../page";


const Menu = () => {
    const { isOpen } = useContext(NavbarContexts);
  return (
    <section className={`transition-all duration-300 ease-out bg-neutral-950 p-4 md:py-8 md:px-16 absolute top-0 right-0 h-screen flex flex-col justify-center ${isOpen ? "block" : "-translate-y-[100%]"}`}>
        <div className="mx-auto max-w-5xl">
        <Link
            heading="Corporate"
            href="#"
        />
        <Link
            heading="Areas of Activity"
            href="#"
        />
        <Link
            heading="Media"
            href="#"
        />
        <Link
            heading="Human Resources"
            href="#"
        />
        <Link
            heading="Sustainability"
            href="#"
        />
        <Link
            heading="Communication"
            href="#"
        />
        </div>
    </section>
  )
}

interface LinkProps {
  heading: string;
  href: string;
}

const Link = ({ heading, href }: LinkProps) => {
    const ref = useRef<HTMLAnchorElement | null>(null);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        console.log(heading.split(""));
      const rect = ref.current!.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    };

    return (
        <motion.a
          href={href}
          ref={ref}
          onMouseMove={handleMouseMove}
          initial="initial"
          whileHover="whileHover"
          className="group relative flex items-center justify-between border-b-2 border-neutral-700 transition-colors duration-500 hover:border-neutral-50"
        >
            <div>
            <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: -16 },
                }}
                transition={{
                  type: "spring",
                  staggerChildren: 0.075,
                  delayChildren: 0.25,
                }}
                className="relative z-10 block text-xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-2xl"
            >
                {heading.split("").map((l, i) => (
                    <motion.span
                      variants={{
                        initial: { x: 0 },
                        whileHover: { x: 16 },
                      }}
                      transition={{ type: "spring" }}
                      className="inline-block"
                      key={i}
                    >
                      {l == " " ? (<span>&nbsp;</span>) : l}
                    </motion.span>
                    ))}
                </motion.span>
            </div>
          
            <motion.div
              variants={{
                initial: {
                  x: "25%",
                  opacity: 0,
                },
                whileHover: {
                  x: "0%",
                  opacity: 1,
                },
              }}
              transition={{ type: "spring" }}
              className="relative z-10 p-4"
            >
                <FiArrowRight className="text-5xl text-neutral-50" />
            </motion.div>
        </motion.a>
    );
};
export default Menu;