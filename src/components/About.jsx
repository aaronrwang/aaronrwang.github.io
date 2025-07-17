import './About.css';

import animation from './../assets/animation.json';
import Lottie from "lottie-react";
import download from "./../assets/download.svg"


export default function () {
    return (
        <section id="about">
            <div id="aboutPhotoContainer">
                {/* <img src={photo} id='profilePhoto' /> */}
                <Lottie animationData={animation} loop={true} id="aboutPhoto" />
            </div>
            <div id="aboutDescription">
                <h1>Aaron Wang</h1>
                <div id="education">
                    <h2>University of Notre Dame</h2>
                    <b>Computer Science<br />Applied Computational Mathematics and Statistics</b>
                </div>
                <p>I am currently interested in Full stack development, with a particular interest in creating interactive, user-centric applications.</p>
                <a id="resume-download" target="_blank" href="https://drive.google.com/file/d/1hQEJ8JxSfK0S432iqlYz3kVYIHUYVZbA/view?usp=sharing">
                    <b>View Resume</b>
                    <img src={download} height="20px" />
                </a>
            </div>
        </section>
    )
}