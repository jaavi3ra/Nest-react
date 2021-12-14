import { useMemo } from "react"
import { useAuth } from "../components/context/AuthContext"
import getUserService from "../components/Services/getUserService"

const useUserService = () => {
    const { token } = useAuth()
    return useMemo(() => getUserService(token), [token])
}
export default useUserService