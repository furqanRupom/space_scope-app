import {useSession} from "next-auth/react"
export const useAuthenticateUser = () =>{
    const {data:session} = useSession()
    const user = session?.user
    return [user]
}