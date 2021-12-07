import { useMemo } from "react"
import { useAuth } from "../components/context/AuthContext"
import getSectionService from "../components/Services/getSectionService"

const useSectionService = () => {
    const { token } = useAuth()
    return useMemo(() => getSectionService(token), [token])
}
export default useSectionService