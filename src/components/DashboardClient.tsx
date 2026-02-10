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

  const handleSave = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/settings", {
        ownerId,
        businessName,
        supportEmail,
        knowledge,
      });
      console.log(result.data);
      setLoading(false);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
      }, 3000);

      setBusinessName("");
      setSupportEmail("");
      setKnowledge("");
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
         console.log(result.data);
          setBusinessName(result.data.businessName);
          setSupportEmail(result.data.supportEmail);
          setKnowledge(result.data.knowledge);
         
        } catch (error) {
          console.log(error);
    

        }
      };
      handleGetDetails();
    }
  },[ownerId]);

  return (
    <div className="min-h-screen app-bg text-amber-50">
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

              <span className="relative z-10">Embed AI Chat</span>
            </motion.button>
          </div>

          <div
            className="absolute bottom-0 inset-x-0 h-[1px]
          bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
          />
        </div>
      </motion.nav>

      <div className="relative flex justify-center px-4 py-24 mt-10">

 
  <div className="absolute w-[500px] h-[300px] bg-amber-500/8 blur-[200px] rounded-full pointer-events-none" />

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="
      relative w-full max-w-4xl
      bg-[#0b0b0d]
      border border-white/10
      rounded-2xl
      shadow-[0_40px_140px_rgba(0,0,0,0.9)]
      overflow-hidden
    "
  >

    {/* TOP  */}
    <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black/70">

      <div className="flex items-center gap-3">
        <span className="w-3 h-3 bg-red-500 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-emerald-400 rounded-full" />
      </div>

      <span className="text-[11px] font-mono tracking-[0.25em] text-gray-500">
        SUPPORT_AI.CONSOLE
      </span>

      <span className="px-2 py-[2px] text-[10px]
        border border-emerald-400/40
        text-emerald-400 rounded
        shadow-[0_0_12px_rgba(16,185,129,0.3)]">
        ONLINE
      </span>
    </div>

    
    <div className="p-12 space-y-14">

      {/* BUSINESS */}
      <div>
        <h3 className="
          text-xs font-semibold tracking-[0.25em]
          bg-gradient-to-r from-gray-400 to-gray-600
          bg-clip-text text-transparent mb-6
        ">
          BUSINESS DETAILS
        </h3>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e)=>setBusinessName(e.target.value)}
            className="
              w-full bg-[#111113]
              border border-white/10
              rounded-lg px-5 py-3
              text-sm text-white
              focus:border-amber-400/40
              focus:ring-1 focus:ring-amber-400/30
              outline-none
              placeholder:text-gray-600
            "
          />

          <input
            type="text"
            placeholder="Support Email"
            value={supportEmail}
            onChange={(e)=>setSupportEmail(e.target.value)}
            className="
              w-full bg-[#111113]
              border border-white/10
              rounded-lg px-5 py-3
              text-sm text-white
              focus:border-amber-400/40
              focus:ring-1 focus:ring-amber-400/30
              outline-none
              placeholder:text-gray-600
            "
          />
        </div>
      </div>

     
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* KNOWLEDGE */}
      <div>
        <h3 className="
          text-xs font-semibold tracking-[0.25em]
          bg-gradient-to-r from-gray-400 to-gray-600
          bg-clip-text text-transparent mb-6
        ">
          KNOWLEDGE BASE
        </h3>

        <textarea
          value={knowledge}
          onChange={(e)=>setKnowledge(e.target.value)}
          placeholder="Refund Policy, Delivery Info..."
          className="
            w-full h-40 resize-none
            bg-[#111113]
            border border-white/10
            rounded-lg px-5 py-4
            text-sm text-white
            focus:border-amber-400/40
            focus:ring-1 focus:ring-amber-400/30
            outline-none
            placeholder:text-gray-600
          "
        />
      </div>

      {/* ACTION */}
      <div className="flex items-center justify-between">

        <motion.button
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.97 }}
  disabled={loading}
  onClick={handleSave}
  className="
    group relative px-9 py-3 rounded-xl
    bg-white/[0.06] backdrop-blur-xl
    border border-white/15
    text-white font-semibold text-sm tracking-wide
    shadow-[0_8px_30px_rgba(0,0,0,0.6)]
    overflow-hidden
    disabled:opacity-60
  "
>

  {/* subtle inner light */}
  <span
    className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      bg-gradient-to-b from-white/10 to-transparent
      transition duration-400
    "
  />

  {/* bottom accent line */}
  <span
    className="
      absolute bottom-0 left-1/2 -translate-x-1/2
      w-0 h-[2px]
      bg-gradient-to-r from-transparent via-white/60 to-transparent
      group-hover:w-3/4 transition-all duration-500
    "
  />

  <span className="relative z-10">
    {loading ? "Saving..." : "Apply Changes"}
  </span>
</motion.button>


        {saved && (
          <span className="text-emerald-400 text-xs tracking-wide font-mono">
            ✓ CONFIG SAVED
          </span>
        )}

      </div>
    </div>

   
    <div className="absolute bottom-0 inset-x-0 h-[2px]
      bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

  </motion.div>
     </div>



    </div>
  );
}

export default DashboardClient;