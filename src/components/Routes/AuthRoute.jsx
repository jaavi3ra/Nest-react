import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import LoginLayout from "../layout/MainLayout/LoginLayout"

export default function AutoRouter({Component}) {
    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(() =>{
        if(isAuthenticated){
            navigate('/', {replace: true})
        }
    },[navigate, isAuthenticated])

    return(
        <LoginLayout>
            <Component />
        </LoginLayout>
    )
    
}