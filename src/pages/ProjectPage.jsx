import { oneProject } from  "../data"

import getProjects from '../api/get-projects'  

import { useParams } from "react-router-dom"

import useProjects from "../hooks/useProjects"

function ProjectPage() {
    const { project, isLoading, error } = useProjects(id)
    const { id } = useParams()

    if (isLoading) {
        return (<p>loading...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <h3>{`Status: ${oneProject.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    )
                })}
            </ul>
         </div>
    )
}

export default ProjectPage