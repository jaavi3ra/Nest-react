import { useMemo } from "react"
import { useAuth } from "../components/context/AuthContext"
import getPasswordService from "../components/Services/getPasswordService"

const usePasswordLogService = () => {
    const { token } = useAuth()
    return useMemo(() => getPasswordService(token), [token])
}
export default usePasswordLogService