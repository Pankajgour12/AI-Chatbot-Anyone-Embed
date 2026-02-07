"use client"

import React from 'react'
import Navbar from './Navbar'
import { motion } from 'motion/react'


const HomeClient = ({email}:{email:string}) => {
 

  return (
    <div className='bg-zinc-500 min-h-screen'>
    <Navbar email={email}/>

    <section className='pt-36 pb-28 PX-6 '>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center ' >
      <motion.div
      initial ={{opacity:0,y:40}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.7,delay:0.2}}
      
      >
        <h1 className=' ' >
          AI Customer Support Chatbot <br />
          <span className='text-orange-600'>for your business</span>
        </h1>

      </motion.div>

      </div>

    </section>
    

    </div>
  )
}

export default HomeClient