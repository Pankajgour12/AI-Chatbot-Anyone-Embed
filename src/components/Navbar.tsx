"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Navbar({ email }: { email: string }) {
  const firstLetter = email?.charAt(0).toUpperCase();
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    window.location.href = "/api/auth/login";
  };

  const handleLogOut = async () => {
    try {
      await axios.get("/api/auth/logout");

      window.location.href = "/";
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  const navigate = useRouter();

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="relative  backdrop-blur-2xl bg-black/30 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-amber-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group relative"
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
          {email ? (
            <div className="relative" ref={popupRef}>
              <motion.button
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.06 }}
                onClick={() => setOpen(!open)}
                className="relative w-10 h-10 rounded-full
                  bg-gradient-to-br from-amber-500/40 to-orange-500/40
                  text-white flex items-center justify-center font-bold shadow-xl"
              >
                {firstLetter}

                <span className="absolute -inset-1 rounded-full border border-amber-400/30" />
              </motion.button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-4 w-48 rounded-2xl
                      bg-black/80 backdrop-blur-2xl
                      border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                      overflow-hidden"
                  >
                    <button
                      className="px-5 py-3 w-full text-left text-sm text-white hover:bg-white/10 transition"
                      onClick={() => navigate.push("/dashboard")}
                    >
                      Dashboard
                    </button>

                    <button
                      className="px-5 py-3 w-full text-left text-sm text-red-400 hover:bg-white/10 transition"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.button
              whileHover={{ y: -1.5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLogin}
              disabled={loading}
              className={`
    group relative px-7 py-2.5 rounded-xl
    font-semibold tracking-wide text-sm
    backdrop-blur-xl border
    shadow-[0_8px_30px_rgba(0,0,0,0.55)]
    overflow-hidden transition
    ${
      loading
        ? "bg-[#15151b] border-white/5 text-zinc-500 cursor-not-allowed"
        : "bg-gradient-to-b from-[#22222a] to-[#101014] border-white/15 text-white hover:border-white/30"
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

              <span
                className="
      absolute -inset-[1px] rounded-xl blur opacity-0
      group-hover:opacity-40 transition duration-500
      bg-white/20 -z-10
    "
              />

              <span className="relative z-10">
                {loading ? "Loading..." : "Login"}
              </span>
            </motion.button>
          )}
        </div>

        <div
          className="absolute bottom-0 inset-x-0 h-[1px]
          bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
        />
      </div>
    </motion.nav>
  );
}
