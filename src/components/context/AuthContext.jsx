import jwtDecode from "jwt-decode";
import {
    createContext,
    useContext,
    useMemo,
    useState
} from "react";

const TOKEN_KEY = 'nest-app::token'

const AuthContext = createContext({
    isAuthenticated: false,
    token: undefined,
    user: undefined,
    registerToken: () => { },
    logout: () => { }
})

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState()

    const registerToken = accesstoken => {
        if (accesstoken) {
            setToken(accesstoken)
            localStorage.setItem(TOKEN_KEY, accesstoken)
        }else{
            setToken(undefined)
        }
    }

    const user = useMemo(() => token ? jwtDecode(token) : undefined, [token])
    
    const logout = () => {
        setToken(undefined) //cambia el estado
        localStorage.removeItem(TOKEN_KEY)
    }
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!token, //parse boolean
                token,
                user,
                registerToken,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>

    )
}
export const useAuth = () => useContext(AuthContext)