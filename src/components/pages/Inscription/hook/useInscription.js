import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import useCareerService from "../../../../hooks/useCareerService"

const useInscription = () => {
    const {updateSubjectCareer} = useCareerService()
    const { register, handleSubmit} = useForm({
        defaultValues:{
            id:'',
            subjects: ''
        }
    })
    const registerSubject =  async data => {
        console.log('Career : ',data.id)
        console.log('Subject : ',data.subjects)
        try{
            await updateSubjectCareer(data)
            toast.success('Inscripción éxitosa.')
            
        } catch(e){
            console.log(e.message)
            toast.error('Asignatura inscrita.')
        }
    }
    return {
        register,
        handleSubmit: handleSubmit(registerSubject)
    }
}
export default useInscription