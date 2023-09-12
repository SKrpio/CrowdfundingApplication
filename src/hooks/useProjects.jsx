import { useEffect, useState } from "react";

import getProjects from "../api/get-projects";

function useProjects(projectId) {
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        getProjects(projectId)
            .then((projects) => {
            setProjects(projects)
            setIsLoading(false)
        })
        .catch((error) => {
            setError(error)
            setIsLoading(false)
        })
}, [projectId])
return { projects, isLoading, error } 
}

export default useProjects