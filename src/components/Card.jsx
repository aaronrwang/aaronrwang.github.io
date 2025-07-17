import './Card.css'
import { motion, useInView } from 'framer-motion';
import { useRef, } from 'react';

export default function Card({ job }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <div className="card">
            <div className="card-content">
                <div className="card-header">
                    <img src={job.img} className="icon-img" />
                    <div className="title">
                        <h3>{job.title}</h3>
                        <h5>{job.company}</h5>
                    </div>
                </div>
                <hr />
                <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
            </div>
        </div>
    );
}