import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import './Navbar.css';

import GitHubLogo from './logos/GitHubLogo.jsx';
import LinkedInLogo from './logos/LinkedInLogo.jsx';
import Menubar from './logos/menuIcon.jsx';
export default function Navbar({ onScroll }) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return (
        <nav className="navbar">
            <div className="nav">
                <ul className="nav-links">
                    <li className="menuButton"><Link to="" spy={true} smooth={true} offset={0} duration={500} activeClass="active"><Menubar color="#FFF" width='30' height='30' /></Link></li>
                    <li className="name"><div className="ab">Aaron Wang</div></li>
                    <li className="hideOnMobile"><Link className="abc" to="about" spy={true} smooth={true} offset={-30} duration={500} onSetActive={closeMenu}>About Me</Link></li>
                    <li className="hideOnMobile"><Link className="abc" to="academics" spy={true} smooth={true} offset={-30} duration={500} onSetActive={closeMenu}>Academics</Link></li>
                    <li className="hideOnMobile"><Link className="abc" to="projects" spy={true} smooth={true} offset={-30} duration={500} onSetActive={closeMenu}>Projects</Link></li>
                    <li className="hideOnMobile"><Link className="abc" to="experience" spy={true} smooth={true} offset={-30} duration={500} onSetActive={closeMenu}>Experience</Link></li>
                    <li className="hideOnMobile"><Link className="abc" to="contact" spy={true} smooth={true} offset={-30} duration={500} onSetActive={closeMenu}>Contact</Link></li>
                </ul>
            </div>
            <div className="contact">
                <ul className="nav-contact-links">
                    <li><a target='_blank' href="http://www.linkedin.com/in/aaron-r-wang"><LinkedInLogo color="#FFF" width='30' height='30' />
                    </a></li>
                    <li><a target='_blank' href="https://github.com/awangwang04"><GitHubLogo color="#FFF" width='30' height='30' />
                    </a></li>
                </ul>
            </div>
        </nav >
    );
};

