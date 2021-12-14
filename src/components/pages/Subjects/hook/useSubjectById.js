import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import useSubjectService from "../../../../hooks/useSubjectService"

export default function useSubjectByIdParams() {
    const { getSubjectById } = useSubjectService()
    const { id } = useParams()

    const [subject, setSubject] = useState()
    useEffect(() => {
        getSubjectById(id)
            .then(setSubject)
            .catch(console.error)
    }, [getSubjectById, id])
    return subject
}