"use client"

import React from 'react'
import Navbar from './Navbar'


const HomeClient = ({email}:{email:string}) => {
 

  return (
    <div className='bg-zinc-500 min-h-screen'>
    <Navbar email={email}/>
    

    </div>
  )
}

export default HomeClient