
import getProject from '../api/get-projects'  

import { useParams } from "react-router-dom"

import useProject from "../hooks/useproject"

import CreatePledge from '../components/CreatePledge.jsx'

function ProjectPage() {
    const { id } = useParams()
    const { project, isLoading, error } = useProject(id)


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
            <h3>{`Status: ${project.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges && Array.isArray(project.pledges) ? (
                    project.pledges.map((pledgeData, key) => (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    ))
                ) : (
                    <li>No pledges available</li>
                )}
            </ul>
        </div>
    )
    
}

export default ProjectPage