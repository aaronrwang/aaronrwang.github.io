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
        <div className="h-16 w-full"></div>
        <div className="max-w-md mx-auto">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="courses" element={<Courses />} />
            <Route path="contact" element={<Contact />} />

          </Routes>
        </div>
      </Router>

      {/* <File /> */}

    </>
  )
}

export default App
