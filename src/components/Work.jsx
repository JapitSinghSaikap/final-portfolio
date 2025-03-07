import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    title: "UChat", 
    description: "A full-stack chat application built with React, Node.js and WebSockets.", 
    githubUrl: "https://github.com/JapitSinghSaikap/UChat" 
  },
  { 
    title: "Job Posting Platform", 
    description: " Developed an interactive front-end design for a freelancer job posting site with React and Tailwind CSS", 
    githubUrl: "https://github.com/JapitSinghSaikap/FEE-Project-II-" 
  },
  { 
    title: "Online Catalog Maker", 
    description: "Engineered an innovative solution enabling seamless customization of digital catalogs through a user-friendly interface", 
    githubUrl: "https://github.com/JapitSinghSaikap/Power-Rangers-E-Catalog-" 
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="mb-20 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                {project.title}
              </a>
            </h3>
            <p className="text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}