import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  const name = "Japit Singh"

  return (
    <header className="mb-20 h-screen flex flex-col justify-center items-center">
      <motion.h1
        className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 text-center"
        variants={nameVariants}
        initial="hidden"
        animate="visible"
      >
        {name.split("").map((letter, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="text-2xl sm:text-3xl text-gray-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Software Engineer & Creative Developer
      </motion.p>
    </header>
  )
}

