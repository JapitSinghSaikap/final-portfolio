  import React from "react";
  import { motion } from "framer-motion";

  export default function About() {
    return (
      <motion.section
        id="about"
        className="mb-20 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-4">
            I'm a passionate software engineer with a knack for creating elegant solutions to complex problems. With
            expertise in both front-end and back-end development, I bring ideas to life through clean, efficient code.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, playing basketball and watching Sci-fi series.
          </p>
        </motion.div>
      </motion.section>
    );
  }
