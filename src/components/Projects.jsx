import './Projects.css';
import GitHubLogo from './logos/GitHubLogo.jsx';
import Projectcard from './Projectcard.jsx';
import { projects } from './data/projects.js'
export default function () {
    const card = (<div className='project-card'>
        <div>
            <h2>Title</h2>
            <a href='github.io'><GitHubLogo color="#999" width='30' height='30' /></a>
        </div>
        <img />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <b>Skills</b>

    </div>)
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div id='projects-grid'>
                {projects.map((project, index) => {
                    if (index < 10) {
                        return <Projectcard project={project} key={index} />
                    }
                })}
            </div>
        </section>
    )
}