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
    const changePassword = async ({ id, password }) => {
        const response = await apiClient.put('/login', { id, password })
        return response.data
    }
    return {
        login,
        changePassword
    }
}
export default getAuthService