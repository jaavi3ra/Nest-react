import { useMemo } from "react"
import { useAuth } from "../components/context/AuthContext"
import getSubjectService from "../components/Services/getSubjectService"

const useSubjectService = () => {
    const { token } = useAuth()
    return useMemo(() => getSubjectService(token), [token])
}
export default useSubjectService