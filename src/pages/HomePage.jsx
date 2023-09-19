import "../pages/CSS/HomePage.css";
import useProjects from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";
import getProjects from "../api/get-projects";

function HomePage() {

    const { projects, isLoading, error } = useProjects();
    console.log("projects", projects)

    return (
        <div id="project-list">
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard project={project} key={index} />
                    )
                })
            }
        </div>
    )
}
export default HomePage

