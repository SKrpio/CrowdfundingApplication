import "../pages/CSS/HomePage.css";
import useProjects from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";


function HomePage() {

    const { projects } = useProjects();
    console.log("projects", projects)

    return (
        <div id="project-list">
            {
                projects.map((project, index) => {
                    return <ProjectCard project={project} index={index} />
                })
            }
        </div>
    )
}
export default HomePage

