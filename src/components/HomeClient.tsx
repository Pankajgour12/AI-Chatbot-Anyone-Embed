"use client";

import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const HomeClient = ({ email }: { email: string }) => {
  const handleLogin = () => {
    window.location.href = "/api/auth/login"
  }
  return (
    <div className="min-h-screen w-full relative z-10">
      {/* Dark Dot Matrix */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: "#0a0a0a",
          backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
          backgroundSize: "10px 10px",
          imageRendering: "pixelated",
        }}
      />
      <div className=" min-h-screen text-amber-50">
        <Navbar email={email} />

        <section className="pt-36 pb-28 PX-6 ">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center ">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                AI Customer Support Chatbot <br />
                <span className="text-gray-200 text-2xl md:text-3xl font-bold">
                  Build for Modern Websites
                </span>
              </h1>

              <p className="text-gray-300 mt-6 text-lg max-w-xl ">
                Add a powerfull AI Chatbot to your website in minutes, Let your
                customers get instant answers using your own business knowledge.
              </p>

              <div className="flex gap-4 mt-10">
                 
                 {email? 
                 <button
                  className="px-6 py-3 rounded-lg bg-gradient-to-br from-gray-500 to-amber-500/25 text-white font-semibold shadow-lg"
                >Go to Dashboard</button>:
                <button className=" px-6 py-3 rounded-lg bg-gradient-to-br from-gray-500 to-amber-500/25 text-white font-semibold shadow-lg"
          onClick={handleLogin}
                >Get Started </button> }
                 

                <button className="px-6 py-3 rounded-lg
                 border border-gray-600 text-white font-semibold hover:bg-gray-700 transition-colors duration-300">
                  Learn More{" "}
                </button>
              </div>
            </motion.div>
             
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
              
             
             >
              <div className="rounded-2xl bg-white shadow-2xl2xl border-zinc-200 p-6   " >
                <div className=" bg-amber-100 rounded-lg px-4 py-2 text-sm text-zinc-800 mb-5 "> Live Chat Preview</div>
                <div className="flex flex-col gap-1">
                  <div className=" bg-zinc-700 rounded-lg px-4 py-2 text-sm text-white self-end w-fit " > Do you offer cash on delivery </div>
                  <div className="bg-zinc-200 rounded-lg px-4 py-2 text-sm  self-start w-fit text-gray-600 " >Yes, we offer cash on delivery.</div>
                </div>

              </div>

             </motion.div>


          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeClient;
