//import { lazy } from 'react'
import {
    Route,
    Routes
} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Perfil from './pages/Perfil'




function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/perfil" element={<Perfil />} />
        </Routes>


    )
}
export default Router