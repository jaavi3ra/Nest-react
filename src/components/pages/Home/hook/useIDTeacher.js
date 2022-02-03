import { useEffect, useState } from "react"
import useTeacherService from "../../../../hooks/useTeacherService"

export default function useIDTeacher(subjectdata) {
    const { getTeacherById } = useTeacherService()
    const [teacher, setTeacher] = useState()
    useEffect(() => {      
        getTeacherById(subjectdata)
            .then(setTeacher)
            .catch(console.error)
    }, [getTeacherById,subjectdata ])
    return teacher
}
   
