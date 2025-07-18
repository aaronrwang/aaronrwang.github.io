import './App.css'
import Navbar from './components/Navbar';
import CompleteTimeline from './components/Timeline';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className="h-16 w-full"></div>
        <div className="max-w-md mx-auto">
          <Routes>
            <Route path="" element={<div>Aaron Wang</div>} />
            <Route path="experience" element={<CompleteTimeline />} />
            <Route path="projects" element={<div>Projects</div>} />
            <Route path="courses" element={<div>Courses</div>} />
            <Route path="contact" element={<div>Contact</div>} />

          </Routes>
        </div>
      </Router>

      {/* <File /> */}

    </>
  )
}

export default App
