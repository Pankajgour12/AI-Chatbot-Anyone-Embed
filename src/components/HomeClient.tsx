"use client";

import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const HomeClient = ({ email }: { email: string }) => {
  const handleLogin = () => {
    window.location.href = "/api/auth/login";
  };

   const features=[
    {
      title:"Easy Integration",
      description:"Integrate our AI chatbot seamlessly into your website with just a few lines of code. No technical expertise required, making it accessible for businesses of all sizes."
    },
    {
      title:"Admin Controlled",
      description:"ake full control of your chatbot's knowledge base. Easily add, edit, or remove information to ensure your customers receive accurate and up-to-date answers."
    },
    {
      title:"Instant Customer Support",
      description:"Provide your customers with instant answers to their queries, improving their experience and increasing satisfaction. Our AI chatbot is available 24/7 to assist your customers whenever they need."
    }


    ]

  return (
    <div className="min-h-screen w-full relative z-10 overflow-hidden">
     
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

      
      <div className="absolute top-40 -left-20 w-72 h-72 bg-amber-500/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-gray-500/20 blur-[120px] rounded-full -z-10" />

      <div className="min-h-screen text-amber-50">
        <Navbar email={email} />

        <section className="pt-36 pb-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-24 items-center">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                AI Customer Support Chatbot <br />
                <span className="text-gray-300 text-xl sm:text-2xl lg:text-3xl font-bold">
                  Build for Modern Websites
                </span>
              </h1>

              <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-xl">
                Add a powerful AI Chatbot to your website in minutes, Let your
                customers get instant answers using your own business knowledge.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                {email ? (
                  <button className="px-7 py-3 rounded-xl bg-gradient-to-br from-gray-600 to-amber-500/30 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md border border-white/10">
                    Go to Dashboard
                  </button>
                ) : (
                  <button 
                    className="px-7 py-3 rounded-xl bg-gradient-to-br from-gray-600 to-amber-500/30 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md border border-white/10"
                    onClick={handleLogin}
                  >
                    Get Started
                  </button>
                )}

                <a href="#feature" className="px-7 py-3 rounded-xl border border-gray-600 text-white font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 backdrop-blur-md">
                  Learn More
                </a>
              </div>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl bg-white/90 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)] border border-white/20 p-6 sm:p-8">
                
                <div className="bg-amber-100/80 rounded-lg px-4 py-2 text-sm text-zinc-800 mb-6 font-medium shadow">
                  Live Chat Preview
                </div>

                <div className="flex flex-col gap-3">
                  <div className="bg-zinc-800 rounded-xl px-4 py-2 text-sm text-white self-end w-fit shadow">
                    Do you offer cash on delivery?
                  </div>

                  <div className="bg-zinc-200 rounded-xl px-4 py-2 text-sm self-start w-fit text-gray-700 shadow">
                    Yes, we offer cash on delivery.
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                  className="absolute -bottom-7 -right-7 w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-zinc-900 text-white flex items-center justify-center shadow-2xl text-xl border border-white/10"
                >
                  🗨️
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
        id="feature"
        className=" py-28 px-6 bg-gradient-to-br from-black/20 to-zinc-900/10   border-t border-white/20 " 
        >
          <div className="max-w-6xl mx-auto">

          <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{once:false}}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-center"> 
            Why Choose Our AI Chatbot?
          </motion.h2>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 " >
            



            </div>

          </div>

        </section>



      </div>
    </div>
  );
};

export default HomeClient;
