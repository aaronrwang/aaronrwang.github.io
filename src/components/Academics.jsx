import './Academics.css';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ComputerScience from './courses/ComputerScience.jsx';
import Mathematics from './courses/Mathematics.jsx';
import Ecp from './courses/Ecp.jsx';
import Engineering from './courses/Engineering.jsx';
import Core from './courses/Core.jsx';

import { courses } from './data/courses.js';

import Squares from './Squares';

const defaultDescription = {
    'id': null,
    'name': 'Description',
    'grade': null,
    'description': null
}

export default function Academics() {
    const refmain = useRef(null);
    const inViewmain = useInView(refmain, { once: true, margin: '-100px' });
    const refalt = useRef(null);
    const inViewalt = useInView(refalt, { once: true, margin: '-100px' });

    const [description, setDescription] = useState(defaultDescription);
    const [id, setId] = useState(null);
    function changeDescription(course) {
        setId(course)
        setDescription(courses[course])
    }
    const [cover, changeCover] = useState(true)

    function openCover() {
        changeCover(false);
    }
    let coverClass = "courses-cover"
    if (!cover) {
        coverClass += " open"
    }
    return (
        <section id="academics">
            <h1>Courses</h1>
            <motion.div
                className="courses-outer"
                ref={refmain}
                initial={{ opacity: 0, x: -100 }}
                animate={inViewmain ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="courses-inner">
                    {/* <div className={coverClass}>
                        <h1 onClick={openCover}><Down /></h1>
                        <div className="cover-garage" />
                    </div> */}
                    {/* <Squares
                        speed={0.1}
                        squareSize={40}
                        direction='diagonal' // up, down, left, right, diagonal
                        borderColor='#666'
                        hoverFillColor='#222'
                    /> */}
                    <div className="courses-main">

                        <div className="courses-left">
                            <div className="courses-top">
                                <ComputerScience onClick={changeDescription} globalActiveID={id} />
                                <Ecp onClick={changeDescription} globalActiveID={id} />
                                {/* <div className="qwe" />
                                <div className="qwe" /> */}
                            </div>
                            <div className="courses-bottom">
                                {/* <div className="qwe" />
                                <div className="qwe" />
                                <div className="qwe" /> */}
                                <Mathematics onClick={changeDescription} globalActiveID={id} />
                                <Engineering onClick={changeDescription} globalActiveID={id} />
                                <Core onClick={changeDescription} globalActiveID={id} />

                            </div>
                        </div>
                        <div className="courses-right">
                            <div className="courses-description qwe">
                                <h4 className="courses-description-title">{description.name}</h4>
                                <div className="courses-description-info">
                                    <h6 className="course-code"> {description.id}</h6>
                                    <h6 className="course-grade">{description.grade ? 'Grade: ' : ''} {description.grade}</h6>
                                </div>
                                <div className="courses-description-p-container">
                                    <p className="courses-description-p">{description.description}</p></div>
                            </div>
                            <div className="courses-key qwe">
                                <h3>Key</h3>
                                <div className="key-element">
                                    <div id='key-tested' className="key-color-box"></div>
                                    Passed
                                </div>
                                <div className="key-element">
                                    <div id='key-current' className="key-color-box"></div>
                                    Current
                                </div>
                                <div className="key-element">
                                    <div id='key-ta' className="key-color-box"></div>
                                    TA
                                </div>
                                <div className="key-element">
                                    <div id='key-london' className="key-color-box"></div>
                                    London
                                </div>
                                <div className="key-element">
                                    <div id='key-future' className="key-color-box"></div>
                                    Future
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="courses-alt"
                ref={refalt}
                initial={{ opacity: 0, x: -100 }}
                animate={inViewalt ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}>
                <p>The following are classes I have taken so far.</p>
                <p>Computer Science Classes: Fundamentals of Computing, Discrete Math, Data Structures, Systems Programming and Logic Design.</p>
                <p>Math: Calc I-III, Linear Algebra, Introduction to Probability</p>
                <p>Engineering Corporate Practice: Macroeconomics, Microeconomics, and Integrated Business and Engineering Fundamentals</p>
                <p>Engineering: Engineering Design, Chemistry, Physics I-II,Embedded Systems, and Engineering of Photography</p>
                <p>Core: Foundational Theology and Business Ethics Philosophy Seminar</p>
                <p>Online: UDEMY: React 2024 Guide (IP), Complete Javascript (parts), Data Structure & Algorithms; Harvard CS50</p>
            </motion.div>
            {/* <div className="courses-extra">
                <h3>Online courses</h3>
                <ul>
                    <li><a href="https://nd.udemy.com/course/react-the-complete-guide-incl-redux/">UDEMY: React 2024 Guide (IP)</a></li>
                    <li><a href="https://nd.udemy.com/course/the-complete-javascript-course/">UDEMY: Complete Javascript (Parts)</a></li>
                    <li><a href="https://nd.udemy.com/course/data-structures-algorithms-cpp/">UDEMY: Data Structures & Algorithms</a></li>
                    <li><a href="https://pll.harvard.edu/course/cs50-introduction-computer-science">Harvard: CS50</a></li>
                </ul>
            </div> */}
        </section >

    );
}

// <div className="flipbook">
//     <div className="cover">Timeline<small>Courses, experience and activites</small></div>
// </div>