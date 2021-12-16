import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL 

const getSessionService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })
    
    const getSessionByIdSubject = async (id) => {   
        const response = await apiClient.get(`/api/session/${id}`)
        return response.data
    }
     
    return {
        getSessionByIdSubject   
    }
}
export default getSessionService