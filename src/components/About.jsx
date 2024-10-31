import photo from "../assets/Photo.png";
import './About.css';
import animation from './../assets/animation.json';
import Lottie from "lottie-react";
import Dl from './logos/Download.jsx';
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
                <p>Join me on this journey of app development to turn concepts into practical applications for real users. </p>
                <a id="resume-download" target="_blank" href="https://docs.google.com/document/d/1b-15NpIjybX310q7pPLRJQf9WNqo-bDr/edit?usp=sharing&ouid=102225202270181873995&rtpof=true&sd=true">
                    <b>View Resume</b>
                    <img src={download} height="20px" />
                </a>
            </div>
        </section>
    )
}