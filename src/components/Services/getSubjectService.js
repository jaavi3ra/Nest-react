import axios from "axios"
import jwtDecode from "jwt-decode"

const API_URL = process.env.REACT_APP_API_URL 

const getSubjectService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })
    
    const getAllSubjectbySection = async (id) => {
        const response = await apiClient.get(`/api/subject/${id}`)
        return response.data
    }
   
    const getSubjectById = async (id) =>{
        const response = await apiClient.get(`/api/subject/${id}`)
        return response.data
    }
    
    
    return {
       
        getSubjectById,
        getAllSubjectbySection
            
    }
}
export default getSubjectService