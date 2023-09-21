import { useEffect, useState } from "react";

import getProjects from "../api/get-projects";


function useProjects() {
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        getProjects()
            .then((project) => {
            setProjects(project)
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