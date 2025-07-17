import './Projects.css';

import Projectcard from './Projectcard.jsx';
import { projects } from './data/projects.js'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


export default function () {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="projects">
            <h1>Projects</h1>
            <motion.div
                id='projects-grid'
                ref={ref}
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {projects.map((project, index) => {
                    if (index < 10) {
                        return <Projectcard project={project} key={index} />
                    }
                })}
            </motion.div>
        </section>
    )
}