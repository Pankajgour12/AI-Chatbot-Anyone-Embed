"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import logo from "@/assets/logo.png";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const EmbedClient = ({ ownerId }: { ownerId: string }) => {
  const navigate = useRouter();
  const [copied, setCopied] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const embedCode = `
        <script src="${process.env.NEXT_PUBLIC_APP_URL}
          /chatBot.js"data-ownerId="${ownerId}">
        </script>
    `;
  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    toast.success("Code Copied");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen app-bg">
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
              onClick={() => navigate.push("/dashboard")}
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

      <div className="flex justify-center nebula-bg px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
      relative w-full max-w-6xl
      rounded-[42px]
      bg-[#050507]
      border border-white/[0.03]
      shadow-[0_180px_500px_rgba(0,0,0,1)]
      overflow-hidden
    "
        >
          <div
            className="absolute inset-0 pointer-events-none
      bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.06),transparent_40%)]"
          />

          <div className="grid lg:grid-cols-[1fr_1.25fr] gap-20 p-12 lg:p-20">
            {/* LEFT  */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <span className="text-[10px] tracking-[0.7em] text-zinc-600">
                  QUICK INTEGRATION
                </span>

                <h1
                  className="
  text-4xl font-semibold mt-4 leading-tight
  bg-gradient-to-r 
  from-[#f5f7ff] 
  via-[#c7d2fe] 
  to-[#a5b4fc]
  bg-clip-text text-transparent
"
                >
                  Embed Your AI Assistant
                </h1>

                <p
                  className="
  text-sm mt-4 max-w-sm leading-relaxed
  text-zinc-400
"
                >
                  A single lightweight script transforms your website into a
                  real-time conversational experience. No installs. No SDK. No
                  dependencies.
                </p>
                <p
                  className="
  text-sm font-medium
  bg-gradient-to-r
  from-[#e2e8ff]
  to-[#a5b4fc]
  bg-clip-text text-transparent
"
                >
                  Copy Script
                </p>
              </div>

              {/* STEPS */}
              <div className="space-y-6">
                {[
                  ["Copy Script", "Click copy or manually select the code."],
                  ["Paste in HTML", "Place before closing body tag."],
                  ["Reload Website", "Assistant appears automatically."],
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div
                      className="
                w-9 h-9 rounded-xl
                bg-[#0f0f12]
                border border-white/[0.06]
                flex items-center justify-center
                text-zinc-400 text-xs font-semibold
                shadow-inner
              "
                    >
                      {i + 1}
                    </div>

                    <div>
                      <p className="text-white text-sm font-medium">
                        {step[0]}
                      </p>
                      <p className="text-zinc-500 text-xs">{step[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT  */}
            <div className="relative">
              <div
                className="
          relative rounded-[30px]
          backdrop-blur-xl
          bg-white/[0.02]
          border border-white/[0.05]
          shadow-[0_80px_260px_rgba(0,0,0,1)]
          overflow-hidden
        "
              >
                <div
                  className="
            flex items-center justify-between
            px-6 py-4
            border-b border-white/[0.05]
            bg-black/40
          "
                >
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                    <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  </div>

                  <span
                    className="
  text-[10px] tracking-[0.4em]
  bg-gradient-to-r 
  from-[#94a3ff]
  to-[#c7d2fe]
  bg-clip-text text-transparent
"
                  >
                    index.html
                  </span>

                  <span
                    className="
  text-[10px] tracking-[0.4em]
  bg-gradient-to-r 
  from-[#94a3ff]
  to-[#c7d2fe]
  bg-clip-text text-transparent
"
                  >
                    ACTIVE
                  </span>
                </div>

                {/* CODE  */}
                <div className="relative p-10 font-mono text-[13px] leading-7">
                  <div className="text-zinc-600 mb-3">
                    // place before &lt;/body&gt;
                  </div>

                  <pre
                    className="
  whitespace-pre-wrap break-words
  font-mono
  text-[14px] leading-7
  bg-gradient-to-r 
  from-[#cbd5ff] 
  via-[#e0e7ff] 
  to-[#c7d2fe]
  bg-clip-text text-transparent
"
                  >
                    {embedCode}
                  </pre>

                  <button
                    onClick={handleCopy}
                    disabled={copied}
                    className="
                absolute top-6 right-6
              
  px-4 py-1.5 rounded-md
  text-[11px] font-semibold
  bg-[#121216]
  border border-[#232532]
  text-[#c7d2fe]
  hover:bg-[#1a1a22]
  transition

              "
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-zinc-600 mt-5 text-center">
                Lightweight • Secure • Universal Compatibility
              </p>
            </div>
          </div>
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
                  {" "}
                  Exactly Like{" "}
                </span>
                Your Website
              </h1>

              <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
                The AI assistant automatically adapts to your site theme.
                Visitors can chat instantly while browsing — without breaking
                your design or layout.
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
              <div
                className="
          absolute bottom-6 right-6
          w-14 h-14 rounded-full
          bg-gradient-to-br from-zinc-800 to-black
          border border-white/10
          shadow-[0_25px_80px_rgba(0,0,0,0.9)]
          flex items-center justify-center
          text-white text-xl
        "
              >
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
  );
};

export default EmbedClient;
