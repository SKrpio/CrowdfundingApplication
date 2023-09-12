import ProjectCard from "../components/ProjectCard"
import "../pages/CSS/HomePage.css";
import useProjects from "../hooks/useProjects";


function HomePage() {

    const { projects, isLoading, error } = useProjects()
    console.log(projects)

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

