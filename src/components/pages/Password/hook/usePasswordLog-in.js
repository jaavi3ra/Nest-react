import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import getPasswordService from "../../../Services/getPasswordService"

const usePassword = () => {
   const {ChangePassword} = getPasswordService()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            password: ''
        }
    })

    const onSubmit = async data => {
        try {
            const dataPassword = await ChangePassword(data)
         
            if (dataPassword) {
                toast.success('Contraseña cambiada con éxito.')
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
export default usePassword