import axios from "axios"
import jwtDecode from "jwt-decode"

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000'

const getUserService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })
    
    const getUserById = async () => {
        const decode = jwtDecode(token)     
        const response = await apiClient.get(`/api/users/${decode.sub}`)
       console.log(response.data)
        return response.data
    }
   
    return {
        getUserById      
    }
}
export default getUserService