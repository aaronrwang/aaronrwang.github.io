import Card from './Card.jsx';
import './Experience.css';

import { experience } from './data/jobdata.js';

import { motion, useInView } from 'framer-motion';
import { useRef, } from 'react';

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    return (
        <section id="experience">
            <h1>Work Experience</h1>
            <motion.div
                className="work-activities"
                ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >

                {experience.work.map((job, index) => {
                    if (index < 10) {
                        return <Card key={`job-${index}`} job={job} />
                    }
                })}
            </motion.div>
        </section>

    );
}