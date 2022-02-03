import { useMemo } from "react"
import { useAuth } from "../components/context/AuthContext"
import getCareerService from "../components/Services/getCareerService"

const useCareerService = () => {
    const { token } = useAuth()
    return useMemo(() => getCareerService(token), [token])
}
export default useCareerService