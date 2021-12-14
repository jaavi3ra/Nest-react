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
    
    const getAllSubjectbySection = async (id) => {
        const response = await apiClient.get(`/api/subject/sec/${id}`)
        return response.data
    }
   
    const getAllbySection = async () => {
        const decode = jwtDecode(token)
        const section = await apiClient.get(`/api/section/${decode.sub}`)
        const response = getAllSubjectbySection(section.data._id)
        return response
    }
    
    const getSubjectById = async (id) =>{
        const response = await apiClient.get(`/api/subject/${id}`)
        return response.data
    }
    
    return {
        getAllbySection,
        getSubjectById,
        getAllSubjectbySection
            
    }
}
export default getSubjectService