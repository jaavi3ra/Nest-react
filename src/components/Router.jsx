//import { lazy } from 'react'
import {
    Route,
    Routes
} from 'react-router-dom'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Home from './pages/Home'
import Subject from './pages/Subjects'
import Inscription from './pages/Inscription'




function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile" element={<Perfil />} />
            <Route exact path="/subject" element={<Subject />} />
            <Route exact path="/assign" element={<Inscription />} />
        </Routes>


    )
}
export default Router