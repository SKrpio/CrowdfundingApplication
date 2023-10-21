import React from "react";
import "../pages/CSS/HomePage.css";
import useProjects from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";
import logo from '../images/logo.png';
import leftWing from '../images/leftWing.png';
import rightWing from '../images/rightWing.png';

function HomePage() {

    const { projects } = useProjects();
    return (
        <>
            <img src={leftWing} className="wing left-wing" />
            <img src={rightWing} className="wing right-wing"/>
            <div className="top-image"> 
                <img src={logo} alt="Background" />
            </div>
            <div id="project-list">
                {projects.map((project, index) => {
                    return <ProjectCard project={project} index={index} />;
                })}
            </div>
        </>
    );
}

export default HomePage;


