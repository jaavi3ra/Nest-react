import { useMemo } from "react"
import { useAuth } from "../components/context/AuthContext"
import getTeacherService from "../components/Services/getTeacherService"

const useTeacherService = () => {
    const { token } = useAuth()
    return useMemo(() => getTeacherService(token), [token])
}
export default useTeacherService