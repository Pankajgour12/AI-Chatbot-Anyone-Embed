
import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){
 const {searchParams} = new URL(req.url)

 const code = searchParams.get('code')
    const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`

 if(!code){
     return NextResponse.json({message:"code is not Found"},
         {status:400})
 }
 const session = await scalekit.authenticateWithCode(code,redirectUrl)


 const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}`)


response.cookies.set("access_token",session.accessToken,{
    httpOnly:true,
    maxAge:24*60*60*1000,
    secure:true,
    
    path:"/"
})

 
return response


}