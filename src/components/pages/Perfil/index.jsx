import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "../../common/profile";
import Home from "../Home";

export default function Perfil() {
    const [users, setUsers] = useState()
    const fetchUsers = async () => {
        const response = await axios.get("https://proyectonest.herokuapp.com/api/users")
        console.log(response)
        setUsers(response.data)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <h4>Perfil</h4>
            {users?.map(item => (

                <Profile key={item._id} user={item} />
            ))}
            <Home />

          

        </div>
       
    )
}