import { useEffect, useState } from "react"
import useSubjectService from "../../../../hooks/useSubjectService"

export default function useIDSubjet() {
    const { getAllbySection } = useSubjectService()
    const [subject, setSubject] = useState()
    useEffect(() => {
        getAllbySection()
            .then(setSubject)
            .catch(console.error)
    }, [getAllbySection])
    return subject
}
