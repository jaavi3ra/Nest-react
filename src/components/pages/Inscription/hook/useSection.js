import { useEffect, useState } from "react"
import useSectionService from "../../../../hooks/useSectionService"

export default function useSection() {
    const { getAllSection } = useSectionService()
    const [teacher, setTeacher] = useState()
    useEffect(() => {
        getAllSection()
            .then(setTeacher)
            .catch(console.error)
    }, [getAllSection])
    return teacher
}
