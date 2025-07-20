import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Contact from './components/Contact';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className="h-16 w-full "></div>
        <div className="px-0 md:px-8 flex flex-col items-center">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="courses" element={<Courses />} />
            <Route path="contact" element={<Contact />} />

          </Routes>
        </div>
        <div className="h-16 w-full "></div>

      </Router>

      {/* <File /> */}

    </>
  )
}

export default App
