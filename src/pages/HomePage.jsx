import "../pages/CSS/HomePage.css";
import useProjects from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";


function HomePage() {

    const { projects } = useProjects();
    console.log("projects", projects)

    return (
        <div id="project-list">
            {
                projects.map((project, index, key, projectData) => {
                    return <ProjectCard projectData={projectData} index={index} key={key} />
            
                })
            }
        </div>
    )
}
export default HomePage

