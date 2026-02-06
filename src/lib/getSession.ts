import { cookies } from "next/headers";
import { scalekit } from "./scalekit";


export async function getSession(){
    const session = await cookies()
    // console.log("Session",session)
    const token = session.get("access_token")?.value
    // console.log("Token",token)
    if(!token){
        return null
    }
    try {
        const result:any = await scalekit.validateToken(token)
        const user = await scalekit.user.getUser(result.sub)
        return user
        
    } catch (error) {
        console.log(error)
        return null
        
    }


}