import { useEffect, useState } from "react";
import useSubjectService from "../../../hooks/useSubjectService";
import Profile from "../../common/profile";
import Home from "../Home";

export default function Perfil() {
    const [users, setUsers] = useState()
    const { getUserById } = useSubjectService()
    useEffect(() => {
        getUserById()
            .then(setUsers)
            .catch(console.error)
    }, [getUserById])
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