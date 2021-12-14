import { useMemo } from "react"
import { useAuth } from "../components/context/AuthContext"
import getSessionService from "../components/Services/getSessionService"

const useSectionService = () => {
    const { token } = useAuth()
    return useMemo(() => getSessionService(token), [token])
}
export default useSectionService