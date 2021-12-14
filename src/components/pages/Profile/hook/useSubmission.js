import { useEffect, useState } from "react"
import useSubmissionService from "../../../../hooks/useSubmissionService"

export default function useSection () {
    const { getSubmissionByUser } = useSubmissionService()
        const [section, setSection] = useState()
        useEffect(() => {
            getSubmissionByUser()
                .then(setSection)
                .catch(console.error)
        }, [getSubmissionByUser])
        return section
    }
   