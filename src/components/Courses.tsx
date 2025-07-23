import FileTree from './course-components/FileTree';
import ReadmeViewer from './course-components/ReadMeViewer';
import { motion } from 'framer-motion';

import { useEffect, useState } from "react";

export default function Courses() {
  const [activeCourse, setActiveCourse] = useState('readme');
  const [height, setWindowHeight] = useState(window.innerHeight - 192);
  const [isSmUp, setIsSmUp] = useState(window.innerWidth >= 640);


  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight - 192);
      setIsSmUp(window.innerWidth >= 640);

    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        className="w-full flex flex-col-reverse overflow-hidden sm:border rounded-lg sm:flex-row"
        style={isSmUp ? { height: `${height}px` } : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Pane */}
        <div
          className="w-full sm:w-[260px] h-full overflow-auto sm:border-r border rounded-lg sm:rounded-none"
        >
          <FileTree setactivecourse={(a: string) => { setActiveCourse(a); }} className="h-full overflow-auto pb-16 rounded-lg sm:rounded-none" />
        </div>
        <div className="p-2 sm:hidden" />


        {/* Right Pane */}
        <ReadmeViewer fileName={activeCourse} className="sm:flex-1 overflow-auto sm:w-full rounded-lg border sm:rounded-none" style={isSmUp ? { height: `${height}px` } : {}} />

      </motion.div >
    </>
  );
}