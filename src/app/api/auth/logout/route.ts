import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){
     const cooiesStore = await cookies()
        cooiesStore.delete("access_token")
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}`)

    

}