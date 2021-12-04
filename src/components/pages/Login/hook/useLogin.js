import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { useAuth } from "../../../context/AuthContext"
import getAuthService from "../../../Services/getAuthService"

const useLogin = () => {
    const { registerToken, isAuthenticated } = useAuth() //localstorage
    const  navigate  = useNavigate()

    const { register, handleSubmit } = useForm({
        defaultValues: {
            rut: '',
            password: ''
        }
    })

    useEffect(() => {
        if(isAuthenticated){
            navigate('/')
        }
    },[navigate, isAuthenticated])

    const onSubmit = async data => {
        const dataLogin = await getAuthService().login(data)
        const token = dataLogin.accessToken

        if (token) {
            registerToken(token)
        }
        console.log('Unauthorized')
    }
    return {
        register,
        handleSubmit: handleSubmit(onSubmit)
    }
}
export default useLogin