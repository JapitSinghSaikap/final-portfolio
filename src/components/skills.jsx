import React from "react";
import { motion } from "framer-motion";

const skills = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git"]

export default function Skills() {
  return (
    <motion.section className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  )
}

