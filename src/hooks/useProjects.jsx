import { useEffect, useState } from "react";

import getProjects from "../api/get-projects";


function useProjects() {
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        getProjects()
            .then((projects) => {
            setProjects(projects)
            setIsLoading(false)
        })
        .catch((error) => {
            setError(error)
            setIsLoading(false)
        })
}, [])
return { projects, isLoading, error } 
}

export default useProjects