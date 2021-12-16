import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL 

const getTeacherService = (token) => {

    const apiClient = axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    })


    const getTeacherById = async (idTeacher) => {
        const response = await apiClient.get(`/api/teacher/${idTeacher}`)
        return response.data
    }
    
    const getTeacherByidSubject = async (idsubject) => {
        const response = await apiClient.get(`/api/subject/${idsubject}`)
        return response.data.teacher
    }


    return {
        getTeacherById,
        getTeacherByidSubject
    }
}
export default getTeacherService