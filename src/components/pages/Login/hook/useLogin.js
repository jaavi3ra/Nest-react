import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useAuth } from "../../../context/AuthContext"
import getAuthService from "../../../Services/getAuthService"

const useLogin = () => {
    const { registerToken } = useAuth() //localstorage

    const { register, handleSubmit } = useForm({
        defaultValues: {
            rut: '',
            password: ''
        }
    })

    const onSubmit = async data => {
        try {
            const dataLogin = await getAuthService().login(data)
            const token = dataLogin.accessToken

            if (token) {
                registerToken(token)
            } else {
                toast.error('Credenciales inválidas')
            }

        } catch (error) {
            toast.error('Credenciales inválidas')
        }

    }
    const validekey = (evt) => {
        var code = (evt.which) ? evt.which : evt.keyCode;

        if (code === 8) { // backspace.
            return true;
        } else if (code >= 48 && code <= 57) { // is a number.
            return true;
        } else { // other keys.
            return false;
        }
        
    }

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        validekey
    }
}
export default useLogin