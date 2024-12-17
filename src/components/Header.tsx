"use client"

import React, { useRef } from 'react'

function Header({change}) {

    const ref = useRef()

    const handleclick = () =>{
        change(ref.current.value)
    }
    


  return (
    <header>
      <nav className='w-[100%] flex justify-center items-center bg-slate-300 py-3 px-5'>
        <input type="search" className='border-black w-[400px] py-1 px-3 rounded-md' placeholder='Search' ref={ref}/>
        <button className='px-3 py-1 rounded-md bg-white ml-2' onClick={handleclick}>search</button>
      </nav>
    </header>
  )
}

export default Header
