import { useEffect, useState } from "react"
import useSubjectService from "../../../../hooks/useSubjectService"

export default function useSubjectBySection (id) {
    const { getAllSubjectbySection } = useSubjectService()
    const [subject, setSubject] = useState()
    useEffect(() => {
        getAllSubjectbySection(id)
            .then(setSubject)
            .catch(console.error)
    }, [getAllSubjectbySection, id])
    return subject
}
