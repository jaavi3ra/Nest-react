import { useEffect, useState } from "react"
import useCareerService from "../../../../hooks/useCareerService"

export default function useIDCareer(id) {
    const { getCareerBySection } = useCareerService()
    const [career, setCareer] = useState()
    useEffect(() => {
        getCareerBySection(id)
            .then(setCareer)
            .catch(console.error)
    }, [getCareerBySection, id])
    return career
}
