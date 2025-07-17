import './App.css';

import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Academics from './components/Academics.jsx';
import Project from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


export default function App() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleScroll = (event) => {
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      event.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust for navbar height
        behavior: 'smooth' // Enable smooth scrolling
      });
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Navbar onScroll={handleScroll} />
      <About />
      <Experience />
      <Project />
      <Academics />
      <Contact />
      <footer>

      </footer>
    </motion.div>
  );
};

