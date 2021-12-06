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
    const getAll = async () => {
        const response = await apiClient.get(`/api/subject/${decode.sub}`)
        return response.data
    }
   
    return {
        getAll      
    }
}
export default getSubjectService