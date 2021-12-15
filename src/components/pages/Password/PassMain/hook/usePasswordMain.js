import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import usePasswordMainService from "../../../../../hooks/usePasswordMainService"

const usePassword = () => {
   const { ChangePassword } = usePasswordMainService()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            password: ''
        }
    })

    const onSubmit = async data => {
        try {
            const password = await ChangePassword(data)
         
            if (password) {
                toast.success('Contraseña cambiada con éxito.')
            } else {
                toast.error('Contraseña inválida (1)') 
            }
        } catch (error) {
            console.log(error)
            toast.error('Error Servidor (2)')
        }
    }
    return{
        register,
        handleSubmit: handleSubmit(onSubmit)
    }

}
export default usePassword