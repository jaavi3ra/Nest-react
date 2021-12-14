import { useEffect, useState } from "react"
import useUserService from "../../../../hooks/useUserService"

export default function useUserByid () {
    const { getUserById } = useUserService()
        const [user, setUser] = useState()
        useEffect(() => {
            getUserById()
                .then(setUser)
                .catch(console.error)
        }, [getUserById])
        return user
    }
   