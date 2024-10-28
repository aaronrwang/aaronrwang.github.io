import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Academics from './components/Academics.jsx';
import Project from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

export default function App() {

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
    <>
      <Navbar onScroll={handleScroll} />
      <About />
      <Academics />
      <Project />
      <Experience />
      <Contact />
      <footer>

      </footer>
    </>
  );
};

