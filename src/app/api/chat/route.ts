import Settings from '@/model/setting.model';
import { NextRequest, NextResponse } from 'next/server';



export async function Post(req:NextRequest) {
    try {
        const {message, ownerId} = await req.json();
        if(!message || !ownerId) {
           return NextResponse.json(
            {message:"message and ownerId are required"},
            {status:400}
           )}


    const setting = await Settings.findOne({ownerId});
     if(!setting){
        return NextResponse.json(
            {message:"chat bot is not configured yet."},
            {status:404}
        )

     } 
     
     const knowledge =`business name-${setting.businessName} || not provided
                       support email - ${setting.supportEmail} || not provided
                       knowledge-      ${setting.knowledge} || not provided
}
     `

    
     const prompt=`
You are a helpful assistant for this business. Answer the question as best as you can.
 
Use ONLY the information provide below to answer the custmor's question.
You may rephrase, summarize, or interpret the information if needed.
Do NOT invent new policies, prices, or promises.

If the customer's question is completely unreleted to the information,
or cannot be reasonably answered from it, reply exactly with:
"I'm sorry, but I don't have the information to answer that question. Please contact our support team for assistance."
Here is the information:

"Please contact support."


--------------------
BUSINESS INFORMATION
--------------------
${knowledge}

     
--------------------
CUSTOMER QUESTION
--------------------
${message}


--------------------
ASSISTANT ANSWER
--------------------
     `

    } catch (error) {
        
    }
    
}