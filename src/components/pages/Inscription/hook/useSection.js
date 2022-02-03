import { useEffect, useState } from "react"
import useSectionService from "../../../../hooks/useSectionService"

export default function useSection() {
    const { getSection } = useSectionService()
    const [section, setSection] = useState()
    useEffect(() => {
        getSection()
            .then(setSection)
            .catch(console.error)
    }, [getSection])
    return section
}
