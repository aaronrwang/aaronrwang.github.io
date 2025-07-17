import GithubLogo from './logos/GitHubLogo.jsx'
import './Card.css'
import { useState } from 'react'
import ND from '../assets/Experience/ND.jpg'

export default function Card({ job }) {
    const [img, setImg] = useState(true)
    function viewContent() {
        setImg((r) => !r)
    }
    return (
        <div className="card" onClick={viewContent}>
            <div className="card-content">
                <div className="card-header">
                    <div className="icon">
                        <img src={job.img} className="icon-img" />
                        <h2>{job.company}</h2>
                    </div>
                    <div className="card-title"><h4>{job.title} | {job.location}</h4></div>
                </div>
                <div className="card-body">
                    <hr />
                    <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
                </div>
            </div>
        </div>
    );
}