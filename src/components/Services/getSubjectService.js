import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000'

const getSubjectService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })

    const getAll = async () => {
        const response = await apiClient.get('/api/subject/')
        return response.data
    }
   
    return {
        getAll      
    }
}
export default getSubjectService