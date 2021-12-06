import axios from "axios"
import jwtDecode from "jwt-decode"

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000'

const getAuthService = () => {

    const apiClient = axios.create({
        baseURL: API_URL
    })

    const login = async ({ rut, password }) => {
        const response = await apiClient.post('/login', { rut, password })
        return response.data
    }
    const NewPassword = async ({ rut, password }) => {
        const tokenTemp = await apiClient.post('/getID', { rut })
        const decode = jwtDecode(tokenTemp)
        const response = await apiClient.put(`/changePassword/${decode.sub}`,{ password })
        return response.data
    }
    return {
        login,
        NewPassword
    }
}
export default getAuthService