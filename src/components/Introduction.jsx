import React from "react";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700">
        I'm a passionate software engineer with experience in building scalable web applications. I love solving complex
        problems and learning new technologies.
      </p>
    </motion.section>
  )
}

