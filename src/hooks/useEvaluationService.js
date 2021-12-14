import { useMemo } from "react"
import { useAuth } from "../components/context/AuthContext"
import getEvaluationService from "../components/Services/getEvaluationService"


const useTeacherService = () => {
    const { token } = useAuth()
    return useMemo(() => getEvaluationService(token), [token])
}
export default useTeacherService