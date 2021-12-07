import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import getAuthService from "../../../Services/getAuthService"

const usePass = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            rut: '',
            password: ''
        }
    })

    const onSubmit = async data => {
        try {
            const dataPassword = await getAuthService().NewPassword(data)
         
            if (dataPassword) {
                toast.success('Contraseña cambiada con éxito.')
                navigate('/login', {replace: true})
            } else {
                toast.error('Contraseña inválida (1)') 
            }
        } catch (error) {
            console.log(error)
            toast.error('Credenciales inválidas (2)')
        }
    }
    return{
        register,
        handleSubmit: handleSubmit(onSubmit)
    }

}
export default usePass