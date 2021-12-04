import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layout/MainLayout";

export default function PrivateRoute({ Component }) {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login', { replace: true })
        }
    }, [navigate, isAuthenticated])
    
    return (
    <MainLayout>
        <Component />
    </MainLayout>
    )
}
