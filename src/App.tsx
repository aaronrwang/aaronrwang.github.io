import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import { Toaster } from 'sonner';
import { useState } from 'react';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [at, sat] = useState(0);

  return (
    <>

      <Router>
        <Navbar />
        <div className="h-16 w-full" />
        <div className="px-0 md:px-8 flex flex-col items-center">
          <Routes>
            <Route path="" element={<Home at={at} sat={sat} />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="courses" element={<Courses />} />
          </Routes>
        </div>
        <div className="h-16 w-full" />

      </Router>
      <Contact />
      <Toaster position="bottom-left" />



      {/* <File /> */}

    </>
  )
}

export default App
