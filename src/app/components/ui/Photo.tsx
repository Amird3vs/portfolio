"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.7, duration: 0.3, ease: "easeInOut" },
          }}
          className="w-[258px] h-[240px] -translate-y-2 xl:w-[438px] xl:h-[390px] mix-blend-lighten absolute"
        >
          <Image
            src="/imgs/gradpic-nobg.png"
            priority
            quality={100}
            fill
            alt="profile pic"
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[270px] xl:w-[436px] h-[270px] xl:h-[456px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#3DAC78"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
