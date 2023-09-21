import "../pages/CSS/HomePage.css";
import useProjects from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";
import getProjects from "../api/get-projects";

function HomePage() {

    const { projects } = useProjects();
    console.log("projects", projects)

    return (
        <div id="project-list">
            {
                projects.map((project, index, key) => {
                    return (
                        console.log("projects within map", project),
                        <ProjectCard project={project} index={index} key={key} />
                    )
                })
            }
        </div>
    )
}
export default HomePage

