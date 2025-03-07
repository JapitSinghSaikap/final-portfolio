import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Student",
    company: "Chitkara University",
    period: "2023 - Present",
    description: [
      "Pursuing BE-CSE", 
      "Dean’s List for academic excellence.",
      "Honored by the Chancellor for outstanding performance.",
      "Active member of the Debate Society & Basketball Team.",
    ],
  },
  {
    title: "Smart India Hackathon (SIH) Participant",
    company: "Internal University Round",
    period: "2024",
    description: [
      "Cleared the university-level round for SIH 2024.",
      "Competed against top student teams.",
      "Gained experience in team collaboration and innovative thinking.",
    ],
  },
  {
    title: "Freelance & Open Source Contributor",
    company: "Self-employed",
    period: "2023 - Present",
    description: [
      "Built a real-time chat application using WebSockets.",
      "Created a job listing website using MERN stack.",
      "Contributed to open-source projects on GitHub.",
    ],
  },
  {
    title: "Certifications",
    company: "Google Arcade & Internal Hackathons",
    period: "2023 - 2024",
    description: [
      "Successfully completed Google Arcade challenges",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="mb-6 p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-800"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 * index, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
          <p className="text-gray-400">
            {exp.company} | {exp.period}
          </p>
          <ul className="mt-2 text-gray-300">
            {exp.description.map((desc, i) => (
              <motion.li
                key={i}
                className="mb-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {desc}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  );
}