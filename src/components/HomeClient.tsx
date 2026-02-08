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
      description:"full control of your chatbot's knowledge base. Easily add, edit, or remove information to ensure your customers receive accurate and up-to-date answers."
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

      <section className="relative pt-40 pb-36 px-6 overflow-hidden">
  
  
  <div className="absolute -top-24 left-1/3 w-[500px] h-[500px] bg-amber-500/5 blur-[180px] rounded-full" />
  <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/5 blur-[180px] rounded-full" />

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 items-center relative z-10">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     
      <div className="inline-block px-4 py-1 mb-6 text-xs tracking-wider uppercase rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-gray-300">
        AI Powered Support
      </div>

      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
      >
        AI Customer Support Chatbot <br />
        <span className="bg-gradient-to-r from-amber-300 via-white to-orange-400 bg-clip-text text-transparent">
          Built for Modern Websites
        </span>
      </motion.h2>

      
      <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-xl leading-relaxed">
        Add a powerful AI Chatbot to your website in minutes. Let your
        customers get instant answers using your own business knowledge.
      </p>

    
      

      <div className="flex flex-wrap gap-5 mt-12">

  {email ? (
    <button className="
      group relative px-8 py-3 rounded-xl
      text-white font-semibold overflow-hidden
      bg-gradient-to-br from-zinc-700 to-zinc-900
      shadow-[0_10px_40px_rgba(0,0,0,0.6)]
      hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(0,0,0,0.8)]
      transition-all duration-300
      border border-white/10
    ">
    
      <span className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-transparent via-white/20 to-transparent
        transition duration-500
      " />

      
      <span className="
        absolute -inset-[2px] rounded-xl blur-md opacity-0
        group-hover:opacity-100 transition duration-500
        bg-gradient-to-r from-amber-400/30 to-orange-500/30
      " />

      <span className="relative z-10">Go to Dashboard</span>
    </button>
  ) : (
    <button
      onClick={handleLogin}
      className="
      group relative px-8 py-3 rounded-xl
      text-white font-semibold overflow-hidden
      bg-gradient-to-br from-zinc-700 to-zinc-900
      shadow-[0_10px_40px_rgba(0,0,0,0.6)]
      hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(0,0,0,0.8)]
      transition-all duration-300
      border border-white/10
    ">
      <span className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-gradient-to-r from-transparent via-white/20 to-transparent
        transition duration-500
      " />

      <span className="
        absolute -inset-[2px] rounded-xl blur-md opacity-0
        group-hover:opacity-100 transition duration-500
        bg-gradient-to-r from-amber-400/30 to-orange-500/30
      " />

      <span className="relative z-10">Get Started</span>
    </button>
  )}

  {/* SECOND BUTTON */}
  <a
    href="#feature"
    className="
    group relative px-8 py-3 rounded-xl
    font-semibold text-white overflow-hidden
    border border-white/20
    backdrop-blur-md
    hover:-translate-y-1
    hover:border-amber-400/40
    transition-all duration-300
  ">
    
    <span className="
      absolute inset-0 opacity-0 group-hover:opacity-100
      bg-gradient-to-tr from-transparent via-white/10 to-transparent
      transition duration-500
    " />

    <span className="relative z-10">Learn More</span>
  </a>

</div>



    </motion.div>

   
   {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, scale: 0.9, y: 40 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative"
>

 
  <div className="absolute -inset-10 bg-amber-500/10 blur-[140px] rounded-full" />

 
  <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.8)]">

    {/* MAIN CARD */}
    <div className="relative rounded-3xl bg-white/95 backdrop-blur-2xl p-7 sm:p-9 overflow-hidden">

      
      <div className="flex flex-col  justify-between gap-2 mb-6">
         <div className="text-sm px-1.5  rounded-md bg-amber-100 text-amber-700 font-medium shadow w-fit">
          Live Chat Preview
        </div>
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-400 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-400 rounded-full" />
        </div>

       
      </div>

     
      <div className="flex flex-col gap-4">

        <div className="bg-zinc-800 rounded-xl px-4 py-2 text-sm text-white self-end w-fit shadow">
          Do you offer cash on delivery?
        </div>

        <div className="bg-zinc-200 rounded-xl px-4 py-2 text-sm text-gray-700 self-start w-fit shadow">
          Yes, we offer cash on delivery.
        </div>

        
        <div className="flex gap-1 self-start">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.15s]" />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.3s]" />
        </div>
      </div>

    
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent blur-sm" />

    </div>
  </div>

 
  <motion.div
    animate={{ y: [0, -16, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
    className="absolute -bottom-10 -right-6 w-18 h-18 rounded-full bg-gradient-to-br from-zinc-800 to-black text-white flex items-center justify-center shadow-2xl text-2xl border border-white/10"
  >
    🗨️
  </motion.div>

</motion.div>


  </div>
</section>


       
        <section
  id="feature"
  className="
  relative py-28 px-6

  border-t border-white/10
  overflow-hidden
"
>
  
  <div className="absolute top-24 left-1/3 w-96 h-96 bg-amber-500/5 blur-[160px] rounded-full" />
  <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-500/5 blur-[160px] rounded-full" />

  <div className="max-w-7xl mx-auto relative z-10">

    
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center leading-tight"
    >
      
      <span className="bg-gradient-to-r from-amber-300 via-white to-orange-400 bg-clip-text text-transparent">
        Why Choose Our AI Chatbot?
      </span>
    </motion.h2>

    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">

      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.7 }}
          className="
          group relative rounded-3xl p-8
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-[0_15px_60px_rgba(0,0,0,0.6)]
          hover:-translate-y-3
          hover:shadow-[0_25px_90px_rgba(0,0,0,0.8)]
          transition-all duration-500
          overflow-hidden
        "
        >
         
          <div
            className="
            absolute bottom-0 left-1/2 -translate-x-1/2
            w-0 h-[2px]
            bg-gradient-to-r from-transparent via-amber-400 to-transparent
            group-hover:w-3/4
            transition-all duration-500
          "
          />

          
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-amber-500/15 via-transparent to-transparent" />

        
          <h1 className="text-lg font-semibold text-white relative z-10">
            {feature.title}
          </h1>
           <div className="w-16 h-[2px] mt-1 mb-4 bg-gradient-to-r from-amber-400/50 to-transparent" />


          <p className="mt-3 text-gray-400 text-sm leading-relaxed relative z-10">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>



   


  


  </div>
</section>





      </div>
    </div>
  );
};

export default HomeClient;
