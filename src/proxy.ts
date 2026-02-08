import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/getSession";


export async function proxy(req:NextRequest){
    const user = await getSession()
    if(!user){
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/`)
    }
    return NextResponse.next()
}

export const config={
    matcher:"/dashboard"
}