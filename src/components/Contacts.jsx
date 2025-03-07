import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg mb-4">
          I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!
        </p>
        <motion.a
          href="mailto:singhjap302@gmail.com"
          className="inline-block bg-white text-black font-bold py-2 px-6 rounded-full text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.a>
        <div className="mt-8 flex justify-center space-x-6">
          <motion.a href="https://github.com/JapitSinghSaikap" className="text-gray-400 hover:text-white" whileHover={{ y: -5 }}>
            GitHub
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/japit-singh-118b6a27b/" className="text-gray-400 hover:text-white" whileHover={{ y: -5 }}>
            LinkedIn
          </motion.a>
          <motion.a href="https://x.com/home" className="text-gray-400 hover:text-white" whileHover={{ y: -5 }}>
            Twitter
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg mb-4">
          I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!
        </p>
        <motion.a
          href="mailto:singhjap302@gmail.com"
          className="inline-block bg-white text-black font-bold py-2 px-6 rounded-full text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </motion.a>
        <div className="mt-8 flex justify-center space-x-6">
          <motion.a href="https://github.com/JapitSinghSaikap" className="text-gray-400 hover:text-white" whileHover={{ y: -5 }}>
            GitHub
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/japit-singh-118b6a27b/" className="text-gray-400 hover:text-white" whileHover={{ y: -5 }}>
            LinkedIn
          </motion.a>
          <motion.a href="https://x.com/home" className="text-gray-400 hover:text-white" whileHover={{ y: -5 }}>
            Twitter
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}

