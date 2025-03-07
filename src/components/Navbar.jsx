import React from "react";
import { motion } from "framer-motion";
const resume = "/Japit_Resume.pdf";


export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-30 bg-black bg-opacity-90" 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <motion.a
              href={resume}
              download="Japit_Resume.pdf"
              className="text-xl font-bold text-white mr-8 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
            Japit Singh
          </motion.a>

          <div className="flex space-x-4">
            <a href="#about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#projects" className="text-white hover:text-gray-300">
              Projects
            </a>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 

