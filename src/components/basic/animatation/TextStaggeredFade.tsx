"use client";

import { motion } from "framer-motion";
import { FC } from "react";

interface ITextStaggeredFadeProps {
  text: string;
  start?: boolean;
}

export const TextStaggeredFade: FC<ITextStaggeredFadeProps> = ({
  text,
  start = false,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.07 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      initial="hidden"
      animate={start ? "show" : "hidden"}
      variants={container}
      className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
    >
      {text.split("").map((ch, i) => (
        <motion.span key={`${ch}-${i}`} variants={letter}>
          {ch}
        </motion.span>
      ))}
    </motion.h2>
  );
};
