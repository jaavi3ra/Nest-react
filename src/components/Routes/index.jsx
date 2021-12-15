import {
    Route,
    Routes
} from 'react-router-dom'
import Login from '../pages/Login'
import Perfil from '../pages/Profile'
import Home from '../pages/Home'
import Subject from '../pages/Subjects'
import Inscription from '../pages/Inscription'
import Support from '../pages/Support'
import PasswordLogin from '../pages/Password/PassLogin'
import PasswordMain from '../pages/Password/PassMain'
import Documents from '../pages/Document'
import PrivateRoute from './PrivateAuth'
import AuthRoute from './AuthRoute'


function Router() {
    return (
        
        <Routes>
            <Route exact path="/" element={<PrivateRoute Component={Home}/>} />
            <Route exact path="/login" element={<AuthRoute Component={Login} />} />
            <Route exact path="/NewPassword" element={<AuthRoute Component={PasswordLogin}/>} />
            <Route exact path="/profile" element={<PrivateRoute Component={Perfil}/>} />
            <Route exact path="/subject/:id" element={<PrivateRoute Component={Subject}/>} />
            <Route exact path="/assign" element={<PrivateRoute Component={Inscription}/>} />
            <Route exact path="/support" element={<PrivateRoute Component={Support}/>} />
            <Route exact path="/ChangePassword" element={<PrivateRoute Component={PasswordMain}/>} />
            <Route exact path="/documents" element={<PrivateRoute Component={Documents}/>} />
        </Routes>

    )
}
export default Router