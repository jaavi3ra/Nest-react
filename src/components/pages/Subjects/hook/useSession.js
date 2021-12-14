import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import useSessionService from "../../../../hooks/useSessionService"

export default function useSubjectByIdParams() {
    const { getSessionByIdSubject } = useSessionService()
    const { id } = useParams()

    const [subject, setSubject] = useState()
    useEffect(() => {
        getSessionByIdSubject(id)
            .then(setSubject)
            .catch(console.error)
    }, [getSessionByIdSubject, id])
    return subject
}