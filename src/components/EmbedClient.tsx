'use client'

import React, { useState } from 'react'
import Image from "next/image";
import { motion } from "motion/react";
import logo from "@/assets/logo.png";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const EmbedClient = ({ownerId}:{ownerId:string}) => {
    const navigate = useRouter()
    const [copied,setCopied] =useState(false)
    const [previewOpen, setPreviewOpen] = useState(false)

    const embedCode = `
        <script src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js"
           data-ownerId="${ownerId}">
        </script>
    `
    const handleCopy = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    toast.success("Code Copied")
    setTimeout(() =>setCopied(false),2000);

    }

  return (
    <div className='min-h-screen aura-bg'>
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
              onClick={() => navigate.push("/")}
            >
              <Image src={logo} alt="logo" height={36} />

              <p className="text-lg font-semibold text-white tracking-wide">
                Support <span className="text-amber-400">AI</span>
              </p>

              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px]
              bg-gradient-to-r from-transparent via-amber-400 to-transparent
              group-hover:w-3/4 transition-all duration-500"
              />
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
  onClick={()=>navigate.push('/dashboard')}
            >
              
              <span
                className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      bg-gradient-to-r from-transparent via-white/10 to-transparent
      transition duration-500
    "
              />

           
              <span
                className="
      absolute bottom-0 left-1/2 -translate-x-1/2
      w-0 h-[2px]
      bg-gradient-to-r from-transparent via-amber-400 to-transparent
      group-hover:w-3/4 transition-all duration-500
    "
              />

              <span className="relative z-10">Back to Dashboard</span>
            </motion.button>
          </div>

          <div
            className="absolute bottom-0 inset-x-0 h-[1px]
          bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
          />
        </div>
      </motion.nav>

      <div className="flex justify-center px-4 py-16 mt-8">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="
      relative w-full max-w-4xl
      text-white rounded-3xl
      bg-gradient-to-br from-zinc-900/80 to-black/80
      border border-white/10
      backdrop-blur-2xl
      p-10
      shadow-[0_50px_180px_rgba(0,0,0,0.95)]
      overflow-hidden
    "
  >
    {/* glow */}
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-indigo-500/10 blur-[140px] rounded-full" />

    <h1 className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent mb-3">
      Embed AI Chatbot
    </h1>

    <p className="text-zinc-400 text-sm mb-6">
      Paste this script before <code className="text-white">&lt;/body&gt;</code>
    </p>

    {/* CODE BOX */}
    <div className="relative bg-black/70 border border-white/10 rounded-xl p-6 text-sm font-mono mb-10 overflow-hidden">
      <pre className="text-zinc-200">{embedCode}</pre>

      <button
        onClick={handleCopy}
        disabled={copied}
        className="
          absolute top-3 right-3
          px-4 py-1.5 rounded-lg text-xs font-semibold
          bg-white/10 border border-white/20
          hover:bg-white/20 transition
        "
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>

    <ol className="space-y-2 text-sm text-zinc-400 list-decimal list-inside">
      <li>Copy the embed script</li>
      <li>Paste before body closing tag</li>
      <li>Reload your website</li>
    </ol>
  </motion.div>
</div>
{/* ====  LIVE PREVIEW  ====== */}

<div className="flex justify-center px-4 pb-24 mt-10">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="
      relative w-full max-w-6xl
      rounded-[26px]
      border border-white/10
      bg-gradient-to-br from-[#0b0b12] to-[#050507]
      shadow-[0_70px_240px_rgba(0,0,0,0.95)]
      overflow-hidden
    "
  >
    
    <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <span className="text-xs tracking-[0.3em] text-zinc-500">
        LIVE PREVIEW
      </span>

      <span className="text-xs text-emerald-400 border border-emerald-400/30 px-2 py-[2px] rounded">
        ACTIVE
      </span>
    </div>

   {/* left */}
    <div className="grid lg:grid-cols-2 gap-10 p-8 lg:p-5 bg-gradient-to-br from-zinc-950 via-black to-zinc-900">

    
      <div className="flex flex-col justify-center text-white space-y-5">
        <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
          This Chat Looks  
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {" "}Exactly Like{" "}
          </span>
          Your Website
        </h1>

        <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
          The AI assistant automatically adapts to your site theme.  
          Visitors can chat instantly while browsing —  
          without breaking your design or layout.
        </p>

        <div className="flex gap-3 mt-3">
          <span className="px-3 py-1 text-xs border border-white/10 rounded-lg text-zinc-400">
            Instant Replies
          </span>
          <span className="px-3 py-1 text-xs border border-white/10 rounded-lg text-zinc-400">
            Mobile Friendly
          </span>
          <span className="px-3 py-1 text-xs border border-white/10 rounded-lg text-zinc-400">
            Auto Theme
          </span>
        </div>
      </div>

      {/*  RIGHT   */}
      <div className="relative min-h-[500px]">


        <div className="
          absolute bottom-6 right-6
          w-14 h-14 rounded-full
          bg-gradient-to-br from-zinc-800 to-black
          border border-white/10
          shadow-[0_25px_80px_rgba(0,0,0,0.9)]
          flex items-center justify-center
          text-white text-xl
        ">
          💬
        </div>

        {/* CHAT PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            absolute
            left-1/2 -translate-x-1/2
            bottom-20

            lg:left-auto lg:translate-x-0
            lg:right-6 lg:bottom-24

            w-[95%] sm:w-[340px]
            h-[400px]
            rounded-[24px]
            bg-[rgba(15,15,23,0.96)]
            backdrop-blur-[35px]
            border border-white/10
            shadow-[0_70px_240px_rgba(0,0,0,0.95)]
            flex flex-col overflow-hidden
          "
        >
          
          <div className="px-5 py-4 flex justify-between items-center border-b border-white/10 bg-black/40">
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            </div>

            <span className="text-xs tracking-[0.25em] font-semibold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              AI ASSISTANT
            </span>

            <span className="text-zinc-500 text-sm">✕</span>
          </div>

          
          <div className="flex-1 p-4 flex flex-col gap-3 text-xs overflow-y-auto">
            <div className="self-start px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white max-w-[80%]">
              Hello 👋 How can I help you?
            </div>

            <div className="self-end px-4 py-2 rounded-xl bg-white text-black shadow max-w-[80%]">
              Do you offer support?
            </div>

            <div className="self-start px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white max-w-[80%]">
              Yes, 24/7 support available.
            </div>
          </div>

          
          <div className="p-4 border-t border-white/10 flex gap-2">
            <input
              disabled
              placeholder="Type a message..."
              className="flex-1 bg-[#0f0f14] border border-white/15 rounded-xl px-3 py-2 text-xs text-zinc-400"
            />
            <button
              disabled
              className="px-3 py-2 rounded-xl bg-white text-black text-xs font-semibold shadow"
            >
              ➤
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
</div>








    




    </div>
  )
}

export default EmbedClient