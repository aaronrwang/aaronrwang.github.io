import Card from './Card.jsx';
import './Experience.css';

import { experience } from './data/jobdata.js';

export default function Experience() {
    return (
        <section id="experience">
            <h1>Work and Volunteer Experience</h1>
            <div className="work-activities">

                {experience.work.map((job, index) => (
                    <Card key={`job-${index}`} job={job} />

                ))}
            </div>
        </section>

    );
}

// <div className="flipbook">
//     <div className="cover">Timeline<small>Courses, experience and activites</small></div>
// </div>