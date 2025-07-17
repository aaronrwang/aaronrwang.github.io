import Card from './Card.jsx';
import './Experience.css';

import { experience } from './data/jobdata.js';

export default function Experience() {
    return (
        <section id="experience">
            <h1>Work Experience</h1>
            <div className="work-activities">

                {experience.work.map((job, index) => {
                    if (index < 10) {
                        return <Card key={`job-${index}`} job={job} />
                    }
                })}
            </div>
        </section>

    );
}