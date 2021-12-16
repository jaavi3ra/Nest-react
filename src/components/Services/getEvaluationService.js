import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL 

const getTeacherService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })

    
    const getEvaluationBySubject = async (idsubject) => {
        const response = await apiClient.get(`/api/evaluation/${idsubject}`)
        return response.data
    }


    return {
        getEvaluationBySubject
    }
}
export default getTeacherService