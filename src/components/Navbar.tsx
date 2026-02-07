"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import logo from "@/assets/logo.png"
import { useEffect, useRef, useState } from "react"

export default function Navbar({ email }: { email: string }) {
  const firstLetter = email?.charAt(0).toUpperCase()
  const [open, setOpen] = useState(false)
  const popupRef= useRef<HTMLDivElement>(null)
  useEffect(()=>{

    const handler=(e:MouseEvent)=>{
      if(popupRef.current && !popupRef.current?.contains(e.target as Node))

      setOpen(false)

    }
    document.addEventListener("mousedown",handler)
    return ()=>document.removeEventListener("mousedown",handler)

  },[])

  const handleLogin = () => {
    window.location.href = "/api/auth/login"
  }

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="relative backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">

        
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group relative"
          >
            <Image src={logo} alt="logo" height={36} />

            <div className="absolute -inset-3 bg-orange-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <p className="text-lg font-semibold text-white tracking-wide group-hover:text-orange-400 transition">
              Support <span className="opacity-60">AI</span>
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          {email ? (
            <div className="relative" ref={popupRef}>
              
              <motion.button
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.08 }}
                onClick={() => setOpen(!open)}
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/50 to-pink-500/35 
                text-white flex items-center justify-center font-bold shadow-lg"
              >
                {firstLetter}


                <span className="absolute inset-0 rounded-full border border-orange-400/50 animate-ping opacity-40" />
              </motion.button>

              {/* Dropdown */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-44 rounded-xl bg-zinc-900/90 backdrop-blur-xl 
                    border border-white/10 shadow-xl overflow-hidden"
                  >
                    <button className="px-4 py-3 w-full text-left text-sm text-white hover:bg-white/10 transition">
                      Dashboard
                    </button>

                    <button className="px-4 py-3 w-full text-left text-sm text-red-400 hover:bg-white/10 transition">
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogin}
              className="relative px-6 py-2 rounded-md font-semibold text-white overflow-hidden border border-white/20"
            >
              
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/40 to-pink-500/40 opacity-0 hover:opacity-100 transition duration-300" />

              
              <span className="absolute top-0 left-[-120%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 hover:left-[150%] transition-all duration-700" />

              <span className="relative z-10">Login</span>
            </motion.button>
          )}
        </div>

        {/* bottom glow line */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
      </div>
    </motion.nav>
  )
}
