"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import logo from "@/assets/logo.png"

export default function Navbar({email}:{email:string}) {
  

 const handleLogin=()=>{
  window.location.href="/api/auth/login"
 }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
    
      <div className="relative w-full bg-transparent backdrop-blur-md overflow-hidden">

       
        <motion.div
          initial={{ x: "-120%" }}
          animate={{ x: "140%" }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute top-0 h-full w-1/3
          bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        />

        
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group relative"
          >
            <Image src={logo} alt="logo" height={34} />

           
            <span className="absolute -inset-2 rounded-full bg-white/10 blur-xl
              opacity-0 group-hover:opacity-100 transition duration-400" />

            <p className="text-lg font-semibold tracking-wide text-white
              transition group-hover:text-orange-400">
              Support <span className="opacity-60">AI</span>
            </p>
          </motion.div>

            {email? <p>{email}</p>:  <motion.button
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2 rounded-md font-semibold
              text-white border border-white/30 overflow-hidden group"
            onClick={handleLogin}
          >
           
            <span className="absolute inset-0 bg-white/10 opacity-0
              group-hover:opacity-100 transition duration-300" />

            <span className="absolute top-0 left-[-120%] w-1/2 h-full
              bg-gradient-to-r from-transparent via-white/50 to-transparent
              skew-x-12 group-hover:left-[140%] transition-all duration-700" />

            <span className="relative z-10 tracking-wide">Login</span>
          </motion.button> }
         

        </div>

       
        <div className="absolute inset-x-0 bottom-0 h-[1px]
          bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
      </div>
    </motion.nav>
  )
}
