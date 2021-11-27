//import { lazy } from 'react'
import {
    Route,
    Routes
} from 'react-router-dom'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Subject from './pages/Subjects'




function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Subject/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/perfil" element={<Perfil />} />
        </Routes>


    )
}
export default Router