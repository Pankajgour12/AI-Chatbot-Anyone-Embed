"use client"
import Image from "next/image"
import { motion} from "motion/react"
import logo from "@/assets/logo.png"
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import axios from "axios"

function DashboardClient({ownerId}:{ownerId:string}) {
    const navigate = useRouter()
    const [business , setBusiness] = useState("")
    const [supportEmail, setSupportEmail] = useState("")
    const [knowledgeBase, setKnowledgeBase] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSave = async () => {
try {
    const result = await axios.post("/api/settings",{
ownerId,business,supportEmail,knowledgeBase
})
console.log(result.data)
} catch (error) {
    console.log(error)

    
}

    }

  return (
    <div className='min-h-screen bg-neural text-amber-50'>
        <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="relative backdrop-blur-2xl bg-black/30 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">

        
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-amber-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

         {/* Left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group relative"
            onClick={()=>navigate.push("/")}
          >
            <Image src={logo} alt="logo" height={36} />

            <p className="text-lg font-semibold text-white tracking-wide">
              Support <span className="text-amber-400">AI</span>
            </p>

            
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px]
              bg-gradient-to-r from-transparent via-amber-400 to-transparent
              group-hover:w-3/4 transition-all duration-500" />
          </motion.div>

          {/* RIGHT */}
         
            
          <motion.button
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.96 }}
  className="
    group relative px-7 py-2.5 rounded-xl
    bg-zinc-900/80 backdrop-blur-md
    border border-white/15
    text-white font-semibold tracking-wide
    shadow-[0_8px_30px_rgba(0,0,0,0.5)]
    overflow-hidden
  "
>
  {/* subtle light sweep */}
  <span
    className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      bg-gradient-to-r from-transparent via-white/10 to-transparent
      transition duration-500
    "
  />

  {/* bottom accent line */}
  <span
    className="
      absolute bottom-0 left-1/2 -translate-x-1/2
      w-0 h-[2px]
      bg-gradient-to-r from-transparent via-amber-400 to-transparent
      group-hover:w-3/4 transition-all duration-500
    "
  />

  <span className="relative z-10">
    Embed AI Chat
  </span>
           </motion.button>





        </div>

     
        <div className="absolute bottom-0 inset-x-0 h-[1px]
          bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      </div>
       </motion.nav>
       
       
       <div className="flex justify-center px-4 py-14 mt-20 ">
          <motion.div
          className="w-full max-w-3xl bg-zinc-500/10 backdrop-blur-2xl rounded-2xl shadow-xl p-10"
          >
            <div className="mb-10">
                <h2 className="text-2xl text-white font-bold mb-4">Welcome to your Dashboard</h2>
                <p className="text-green-600 mt-1">

                    Manage Your AI chatbot knowledge and busines details
                    </p> 
            </div>

            <div className="mb-10">
                <h2 className="text-lg mb-2">Business Details</h2>
                <div className="space-y-4">
                    <input type="text" className="w-full rounded-xl border border-white px-4 py-3 text-sm 
                    focus:outline-none focus:ring-2 focus:ring-white/50
                    " placeholder="Business Name"
                    onChange={(e)=>setBusiness(e.target.value)}
                    value={business}
                    />

                     <input type="text" className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm 
                    focus:outline-none focus:ring-2 focus:ring-white/50
                    "placeholder="Support Email"
                    onChange={(e)=>setSupportEmail(e.target.value)}
                    value={supportEmail}
                    />

                </div>

            </div>
            
            <div className="mb-10">
                <h2 className="text-lg mb-2">Knowledge base</h2>
                <p className="text-sm font-semibold mb-2">Add FAQs,Policies,delivery info,refund ,etc.</p>
                <div className="space-y-4">
                    <textarea className="w-full h-28  max-h-52 rounded-xl border border-white px-4 py-3 text-sm 
                    focus:outline-none focus:ring-2 focus:ring-white/50
                    " placeholder={
                        `   Example:
    Refund Policy: 7 days return available
    Delivery Time: 3-5 days delivery available
    Contact: 123-456-7890



                        `
                    }
                    onChange={(e)=>setKnowledgeBase(e.target.value) } value={knowledgeBase}
                    />

                  
                </div>

            </div>

           <div className="flex items-center gap-5">
              <motion.div
             
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60 "
              >
                Save
            </motion.div> 
           </div>




          </motion.div>





       </div>



    </div>
  )
}

export default DashboardClient