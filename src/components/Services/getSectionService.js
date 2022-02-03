import axios from "axios"
import jwtDecode from "jwt-decode"

const API_URL = process.env.REACT_APP_API_URL 

const getSectionService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })
    
    const getSection = async () => {
        const studentList = await getStudentListByUser()  
        const response = await apiClient.get(`/api/section/${studentList}`)
        return response.data
    }
    const getAllSection = async () => {
        const response = await apiClient.get('/api/section/')
        return response.data
    }
    const getStudentListByUser = async () => {
        const decode = jwtDecode(token)
        const response = await apiClient.get(`/api/studentList/${decode.sub}`)    
        return response.data._id
    }
   
    return {
        getSection,
        getAllSection      
    }
}
export default getSectionService