import { useEffect, useState } from "react";

import getProject from "../api/get-projects";

function useProject(projectId) {
    const [project, setProject] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState();

    useEffect(() => {
        getProject(projectId)
            .then((projects) => {
            setProject(projects)
            setIsLoading(false)
        })
        .catch((error) => {
            setError(error)
            setIsLoading(false)
        })
}, [projectId])
return { project, isLoading, error } 
}

export default useProject