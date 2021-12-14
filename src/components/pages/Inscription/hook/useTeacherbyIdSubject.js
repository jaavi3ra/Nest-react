import { useEffect, useState } from "react"
import useTeacherService from "../../../../hooks/useTeacherService"

export default function useTeacherbyIdSubject (data) {
        const { getTeacherByidSubject } = useTeacherService()
        const [teacher, setTeacher] = useState()
        useEffect(() => {
            getTeacherByidSubject(data)
                .then(setTeacher)
                .catch(console.error)
        }, [getTeacherByidSubject, data])
        return teacher
    }
