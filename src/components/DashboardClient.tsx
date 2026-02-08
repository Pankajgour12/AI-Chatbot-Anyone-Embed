"use client"
import Image from "next/image"
import { motion} from "motion/react"
import logo from "@/assets/logo.png"
import React from 'react'
import { useRouter } from "next/navigation"

function DashboardClient({ownerId}:{ownerId:string}) {
    const navigate = useRouter()
  return (
    <div className='min-h-screen bg-neural text-amber-100'>
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
             
              className="group relative px-6 py-2 rounded-lg
                text-white font-semibold border border-white/20 overflow-hidden"
            >
              
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                transition duration-500" />

              
              <span className="absolute -inset-[2px] rounded-lg blur-md opacity-0
                group-hover:opacity-100 transition duration-500
                bg-gradient-to-r from-orange-400/30 to-emerald-300/30 " />

              <span className="relative z-10">Embed AI Chat</span>
            </motion.button>
          
        </div>

     
        <div className="absolute bottom-0 inset-x-0 h-[1px]
          bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
      </div>
    </motion.nav>

    

    </div>
  )
}

export default DashboardClient