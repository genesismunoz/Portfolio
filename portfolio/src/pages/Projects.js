import React from "react";
import ProjectItem from "../components/ProjectItem";
import proj1 from '../assets/proj1.jpg'
import proj2 from '../assets/proj2.jpg'
import proj3 from '../assets/proj3.jpg'

function Projects(){
    return (
        <div className="projects">
            <h1> My Projects</h1>
            <div className="projectList">
                <ProjectItem name= "Garbage Route Optimizer" image={proj1} />
                <ProjectItem name= "iPhone Multimeter" image={proj2} />
                <ProjectItem name= "This Website" image={proj3} />

            </div>
        </div>
    )
}

export default Projects;