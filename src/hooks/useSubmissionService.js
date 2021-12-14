import { useMemo } from "react"
import { useAuth } from "../components/context/AuthContext"
import getSubmissionService from "../components/Services/getSubmissionService"


const useSubmissionService = () => {
    const { token } = useAuth()
    return useMemo(() => getSubmissionService(token), [token])
}
export default useSubmissionService