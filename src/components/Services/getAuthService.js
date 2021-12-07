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
        const dataID = await apiClient.post('/getID', { rut })
        const response = await apiClient.put(`/NewPassword/${dataID.data}`,{ password })
        console.log(response)
        return response.data
    }
    return {
        login,
        NewPassword
    }
}
export default getAuthService