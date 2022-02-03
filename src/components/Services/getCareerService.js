import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL 

const getCareerService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })
    
    const getCareerBySection = async (id) => {
        const response = await apiClient.get(`/api/career/${id}`)
        return response.data
    }
    const updateSubjectCareer = async ({ id,subjects }) => {
        const response = await apiClient.put(`/api/career/${id}`, { subjects })
        return response.data
    }
    
    return {
        getCareerBySection,
        updateSubjectCareer
    }
}
export default getCareerService