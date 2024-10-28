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
            <div className={`cover-img ${img ? '' : 'fade'}`}><img src={job.cover} height="240px" width="400px" /><h3 className="image-header">{job.title}</h3></div>
            <div className="card-content">
                <div className="card-header">
                    <div className="icon"><img src={job.img} className="icon" /></div>
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