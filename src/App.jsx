import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import Navbar from './components/Navbar';
import Navbar from "./components/Navbar";
import About from './components/About';
// import Projects from './components/Projects';
import Projects from "./components/project";
import Header from './components/Header';
import Contact from './components/Contacts';
import Experience from "./components/Experience";
// import Experience from "./components/Experience";
// import Experience from "./components/Experience";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";

const Particle = ({ x, y, size, delay }) => {
  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
};

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-0 left-0 h-1 bg-blue-500"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.2 }}
    />
  );
};

const GridAnimation = () => {
  const gridSize = 40;
  const columns = Math.ceil(window.innerWidth / gridSize);
  const rows = Math.ceil(window.innerHeight / gridSize);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {Array.from({ length: columns * rows }).map((_, i) => {
        const x = (i % columns) * gridSize;
        const y = Math.floor(i / columns) * gridSize;

        return (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: 2,
              height: 2,
              left: x,
              top: y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: Math.random() * 1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

function App() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newParticle = {
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 1,
      };
      setParticles((prev) => [...prev.slice(-50), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div className="min-h-screen bg-black text-white overflow-auto relative">
        <div className="fixed inset-0 z-10 pointer-events-none">
          <GridAnimation />
        </div>
        {particles.map((particle, i) => (
          <Particle key={i} {...particle} />
        ))}
        <main className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <Navbar />
          <Header />
          <About />
          {/* <Skills/> */}
          <Projects />
          <Experience/>
          <Contact />
        </main>
      </motion.div>
      <ScrollIndicator />
    </>
  );
}

export default App;