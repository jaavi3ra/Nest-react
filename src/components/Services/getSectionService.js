import axios from "axios"
import jwtDecode from "jwt-decode"

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000'

const getSectionService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })
    
    const getSection = async () => {
        const decode = jwtDecode(token)
        const response = await apiClient.get(`/api/section/${decode.sub}`)
        return response.data
    }
    const getAllSection = async () => {
        const response = await apiClient.get('/api/section/')
        return response.data
    }
   
    return {
        getSection,
        getAllSection      
    }
}
export default getSectionService