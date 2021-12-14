import { useForm } from "react-hook-form"

const useSubjectForm = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            _id: ''
        }
    })

    const onSubmit = async values => {
        console.log(values)
    }
    return {      
        register,
        handleSubmit: handleSubmit(onSubmit)        
    }
}
export default useSubjectForm