import axios from "axios"


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
        const response = await apiClient.post(`/NewPassword/`,{ rut, password })
        return response.data
    }
    const ChangePassword = async ({ id, password }) => {
        const response = await apiClient.put(`/changePassword/${id}`,{ password })
        return response.data
    }
    return {
        login,
        NewPassword,
        ChangePassword
    }
}
export default getAuthService