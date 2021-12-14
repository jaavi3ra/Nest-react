import axios from "axios"
import jwtDecode from "jwt-decode"


const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000'

const getAuthService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })

    const ChangePassword = async ({ password }) => {
        const id = jwtDecode(token)
        console.log(id.sub)
        const response = await apiClient.put(`/changePassword/${id.sub}`,{ password })
        return response.data
    }
    return {
        ChangePassword
    }
}
export default getAuthService