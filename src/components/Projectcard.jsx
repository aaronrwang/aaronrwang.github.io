import GitHubLogo from './logos/GitHubLogo.jsx';
import './Projects.css'
export default function Projectcard({ project }) {
    return (
        <div className='project-card'>
            <div>
                <h2>{project.title}</h2>
                <a target="blank" href={project.github}><GitHubLogo color="#000" width='30' height='30' /></a>
            </div>
            <img src={project.img} />
            <p>{project.description}</p>
            <b>Skills: {project.skills}</b>
        </div>);
}