import{ Link }from"react-router-dom";
import "../pages/CSS/ProjectCard.css"

function ProjectCard(props) {
    const { project } = props;
    const projectLink = `project/${project.id}` 
    
    return (
        <div className="project-card">
            <Link to={projectLink}>
                <img src={project.image} />
                <h3>{project.title}</h3>
            </Link>
        </div>
    )
}

export default ProjectCard