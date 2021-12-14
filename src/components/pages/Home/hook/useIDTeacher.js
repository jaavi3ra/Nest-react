import { useEffect, useState } from "react"
import useTeacherService from "../../../../hooks/useTeacherService"

export default function useIDTeacher(subjectdata) {
    const { getTeacherById } = useTeacherService()
    const [teacher, setTeacher] = useState()
    useEffect(() => {
        if (!subjectdata) {
            console.log('error: ', subjectdata)
        }
        getTeacherById(subjectdata)
            .then(setTeacher)
            .catch(console.error)
    }, [getTeacherById,subjectdata ])
    return teacher
}
   
