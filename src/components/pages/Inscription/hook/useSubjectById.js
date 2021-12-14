import { useEffect, useState } from "react"
import useSubjectService from "../../../../hooks/useSubjectService"

export default function useSubjectByIdParams(id) {
    const { getSubjectById } = useSubjectService()

    const [subject, setSubject] = useState()
    useEffect(() => {
        getSubjectById(id)
            .then(setSubject)
            .catch(console.error)
    }, [getSubjectById, id])
    return subject
}