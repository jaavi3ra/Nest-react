import axios from "axios"
import jwtDecode from "jwt-decode"

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000'

const getSubjectService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })
    
    const decode = jwtDecode(token)
    const getUserById = async () => {
        const response = await apiClient.get(`/api/users/${decode.sub}`)
        return response.data
    }
   
    return {
        getUserById      
    }
}
export default getSubjectService