import axios from "axios"
import jwtDecode from "jwt-decode"

const API_URL = process.env.REACT_APP_API_URL 

const getSubmissionService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })
    
    const getSubmissionByUser = async () => {
        const decode = jwtDecode(token)     
        const response = await apiClient.get(`/api/submission/${decode.sub}`)
        return response.data
    }
    
   
    return {
        getSubmissionByUser   
    }
}
export default getSubmissionService