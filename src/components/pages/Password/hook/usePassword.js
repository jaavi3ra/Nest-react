import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import getAuthService from "../../../Services/getAuthService"

const usePass = () => {
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
            } else {
                toast.error('Credenciales inválidas (1)')
            }

        } catch (error) {
            toast.error('Credenciales inválidas (2)')
        }

    }
    return{
        register,
        handleSubmit: handleSubmit(onSubmit)
    }

}
export default usePass