import './Academics.css';
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ComputerScience from './courses/ComputerScience.jsx';
import Mathematics from './courses/Mathematics.jsx';
import Ecp from './courses/Ecp.jsx';
import Engineering from './courses/Engineering.jsx';
import Core from './courses/Core.jsx';
import Down from './logos/Down.jsx'
import { courses } from './data/courses.js';
const defaultDescription = {
    'id': null,
    'name': 'Description',
    'grade': null,
    'description': null
}
export default function Academics() {
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
            <div className="courses-outer">
                <div className="courses-inner">
                    {/* <div className={coverClass}>
                        <h1 onClick={openCover}><Down /></h1>
                        <div className="cover-garage" />
                    </div> */}
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
                                    Tested Out
                                </div>
                                <div className="key-element">
                                    <div id='key-current' className="key-color-box"></div>
                                    Current Class
                                </div>
                                <div className="key-element">
                                    <div id='key-ta' className="key-color-box"></div>
                                    Teacher's Assistant
                                </div>
                                <div className="key-element">
                                    <div id='key-london' className="key-color-box"></div>
                                    Study Abroad
                                </div>
                                <div className="key-element">
                                    <div id='key-future' className="key-color-box"></div>
                                    Future Class
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="courses-mobile"></div>
            <div className="courses-alt">
                Computer Science Classes: Data Structures, Systems Programming and Logic Design.
            </div>
        </section >

    );
}

// <div className="flipbook">
//     <div className="cover">Timeline<small>Courses, experience and activites</small></div>
// </div>