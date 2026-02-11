"use client";
import Image from "next/image";
import { motion } from "motion/react";
import logo from "@/assets/logo.png";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function DashboardClient({ ownerId }: { ownerId: string }) {
  const navigate = useRouter();
  const [businessName, setBusinessName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [canEmbed, setCanEmbed] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/settings", {
        ownerId,
        businessName,
        supportEmail,
        knowledge,
      });
      
      setLoading(false);
      setSaved(true);
      setCanEmbed(true);

      setTimeout(() => {
        setSaved(false);
      }, 3000);

      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!ownerId) {
      navigate.push("/");
    }
    if (ownerId) {
      const handleGetDetails = async () => {
        try {
          const result = await axios.post("/api/settings/get", {
            ownerId,
          });
 
          setBusinessName(result.data.businessName);
          setSupportEmail(result.data.supportEmail);
          setKnowledge(result.data.knowledge);
         
            if (result.data.businessName && result.data.supportEmail && result.data.knowledge) {
      setCanEmbed(true);
    }



        } catch (error) {
          console.log(error);
    

        }
      };
      handleGetDetails();
    }
  },[ownerId]);

  return (
    <div className="min-h-screen nebula-bg text-amber-50">
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
  whileHover={canEmbed ? { y: -1.5 } : {}}
  whileTap={canEmbed ? { scale: 0.97 } : {}}
  disabled={!canEmbed}
  onClick={() => canEmbed && navigate.push("/embed")}
  className={`
    group relative px-7 py-2.5 rounded-xl
    backdrop-blur-xl border font-semibold tracking-wide
    shadow-[0_8px_30px_rgba(0,0,0,0.55)]
    overflow-hidden transition-all duration-300
    ${
      canEmbed
        ? "bg-gradient-to-b from-[#1c1c22] to-[#0f0f14] border-white/15 text-white cursor-pointer hover:border-white/30"
        : "bg-gradient-to-b from-[#141418] to-[#0b0b0f] border-white/5 text-zinc-500 cursor-not-allowed"
    }
  `}
>
 
  <span
    className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      bg-gradient-to-b from-white/10 to-transparent
      transition duration-300
    "
  />

  
  <span
    className="
      absolute bottom-0 left-1/2 -translate-x-1/2
      w-0 h-[2px]
      bg-gradient-to-r from-transparent via-white/40 to-transparent
      group-hover:w-3/4 transition-all duration-500
    "
  />

 
  {canEmbed && (
    <span
      className="
        absolute -inset-[1px] rounded-xl blur opacity-0 group-hover:opacity-40
        bg-white/20 transition duration-500 -z-10
      "
    />
  )}

  <span className="relative z-10">Embed AI Chat</span>
</motion.button>
 

            
          </div>

          <div
            className="absolute bottom-0 inset-x-0 h-[1px]
          bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
          />
        </div>
      </motion.nav>

     

    

<div className="relative flex justify-center px-4 py-24 mt-6">


  <div className="absolute -top-28 w-[800px] h-[380px]
    bg-gradient-to-r from-yellow-400/10 via-amber-300/10 to-yellow-500/10
    blur-[200px] rounded-full pointer-events-none" />

  <motion.div
    initial={{ opacity: 0, y: 35 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="
      relative w-full max-w-6xl
      rounded-[30px]
      border border-white/10
      bg-gradient-to-b from-[#0c0c12] to-[#060608]
      shadow-[0_80px_260px_rgba(0,0,0,0.95),0_0_60px_rgba(255,215,0,0.08)]
      overflow-hidden text-white
    "
  >

    {/* TOP  */}
    <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="flex gap-2">
        <span className="w-3 h-3 bg-red-600 rounded-full" />
        <span className="w-3 h-3 bg-yellow-500 rounded-full" />
        <span className="w-3 h-3 bg-emerald-500 rounded-full" />
      </div>

      <span className="text-[11px] tracking-[0.35em] text-zinc-500 font-semibold">
        AI CONTROL CENTER
      </span>

      <span className="px-3 py-[3px] text-[10px] gold-border rounded-md font-semibold tracking-widest">
        ACTIVE
      </span>
    </div>

    
    <div className="grid md:grid-cols-2 gap-14 p-12 max-md:p-7">

      {/* LEFT PANEL */}
      <div className="space-y-6">

        <h1 className="text-4xl font-semibold leading-tight gold-text">
          Configure Your <span className="
  text-4xl font-semibold leading-tight
  bg-gradient-to-r from-white via-zinc-300 to-slate-400
  bg-clip-text text-transparent
">
   AI Assistant
</span>
        </h1>
          
           

        <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
          Control how your chatbot behaves across every website.
          Define identity, support details, and knowledge so
          responses stay accurate and on-brand.
        </p>

        <div className="space-y-2 text-sm text-zinc-500">
          <p>• Brand tone customization</p>
          <p>• Faster automated responses</p>
          <p>• Centralized AI control</p>
        </div>

        <div className="
          mt-6 px-5 py-4 rounded-xl
          bg-white/5 border border-white/10
          text-zinc-400 text-xs
        ">
          Changes apply instantly to all embedded chatbots.
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="space-y-9">

        {/* BUSINESS */}
        <div>
          <h3 className="text-[11px] tracking-[0.3em] mb-5 gold-text font-semibold">
            BUSINESS DETAILS
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Business Name"
              value={businessName}
              onChange={(e)=>setBusinessName(e.target.value)}
              className="
                w-full bg-[#121216]
                border border-white/10
                rounded-xl px-5 py-3 text-sm
                focus:border-yellow-400/40
                focus:ring-2 focus:ring-yellow-400/10
                outline-none transition
              "
            />

            <input
              type="text"
              placeholder="Support Email"
              value={supportEmail}
              onChange={(e)=>setSupportEmail(e.target.value)}
              className="
                w-full bg-[#121216]
                border border-white/10
                rounded-xl px-5 py-3 text-sm
                focus:border-yellow-400/40
                focus:ring-2 focus:ring-yellow-400/10
                outline-none transition
              "
            />
          </div>
        </div>

        {/* KNOWLEDGE */}
        <div>
          <h3 className="text-[11px] tracking-[0.3em] mb-5 gold-text font-semibold">
            KNOWLEDGE BASE
          </h3>

          <textarea
            value={knowledge}
            onChange={(e)=>setKnowledge(e.target.value)}
            placeholder="Refund policy, delivery time, FAQs..."
            className="
              w-full h-36 resize-none
              bg-[#121216]
              border border-white/10
              rounded-xl px-5 py-4 text-sm
              focus:border-yellow-400/40
              focus:ring-2 focus:ring-yellow-400/10
              outline-none transition
            "
          />
        </div>

        <div className="flex flex-wrap items-center gap-5">

  
  <motion.button
    whileHover={{ y: -2, scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    disabled={loading}
    onClick={handleSave}
    className={`
      group relative px-9 py-3.5 rounded-xl
      backdrop-blur-xl border
      font-semibold text-sm tracking-wide
      shadow-[0_10px_40px_rgba(0,0,0,0.6)]
      overflow-hidden transition
      ${loading 
        ? "bg-zinc-800/40 border-white/10 text-zinc-500 cursor-not-allowed" 
        : "bg-white/[0.06] border-white/20 text-white"}
    `}
  >
    
    <span className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      bg-gradient-to-b from-white/20 to-transparent
      transition duration-300
    "/>

    <span className="relative z-10">
      {loading ? "Saving..." : "Apply Changes"}
    </span>
  </motion.button>


  
  {saved && (
    <span className="text-emerald-400 text-xs tracking-widest">
      ✓ UPDATED
    </span>
  )}


  
 {canEmbed && (
  <motion.button
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -1, scale: 1.015 }}
    whileTap={{ scale: 0.98 }}
    onClick={() => navigate.push("/embed")}
    className="
      group relative px-9 py-3.5 rounded-xl
      font-semibold text-sm tracking-wide text-white
      bg-gradient-to-b from-[#1f1f25] to-[#0e0e12]
      border border-white/15
      shadow-[0_8px_30px_rgba(0,0,0,0.6)]
      overflow-hidden transition
    "
  >
    {/* subtle hover light */}
    <span className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      bg-gradient-to-b from-white/10 to-transparent
      transition duration-300
    "/>

    {/* bottom accent line */}
    <span className="
      absolute bottom-0 left-1/2 -translate-x-1/2
      w-0 h-[2px]
      bg-gradient-to-r from-transparent via-white/40 to-transparent
      group-hover:w-3/4 transition-all duration-500
    "/>

    <span className="relative z-10">
      Embed Code →
    </span>
  </motion.button>
)}



</div>


      </div>
    </div>


    <div className="absolute bottom-0 inset-x-0 h-[2px]
      bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

  </motion.div>
</div>









    </div>
  );
}

export default DashboardClient;