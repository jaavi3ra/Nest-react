import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import useEvaluationService from "../../../../hooks/useEvaluationService"

export default function useEvaluationBySubj () {
    const { getEvaluationBySubject } = useEvaluationService()
    const { id } = useParams()

    const [subject, setSubject] = useState()
    useEffect(() => {
        getEvaluationBySubject(id)
            .then(setSubject)
            .catch(console.error)
    }, [getEvaluationBySubject, id])
    return subject
}