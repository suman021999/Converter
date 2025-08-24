"use client"
import { CiGrid41 } from "react-icons/ci";
import React, { useState } from 'react'
import Link from 'next/link'

const Sidebar = () => {
  const [activePage, setActivePage] = useState('imageConverter');
  
  return (
    <>
      <section className='h-screen w-72 flex flex-col bg-gray-300'>

        <div className="flex items-center justify-center mt-4 mb-10">
          <CiGrid41 className="h-8 w-8" />
          <h1 className="text-2xl">Converter</h1>
        </div>

        <div className="flex gap-4 flex-col">

          <button 
            className={`cursor-pointer h-10  ${activePage === 'imageConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('imageConverter')}
          >
            <Link href="/imageConverter">Image Converter</Link>
          </button>

          <button 
            className={`cursor-pointer h-10 ${activePage === 'lengthConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('lengthConverter')}
          >
            <Link href="/lengthConverter">Length Converter</Link>
          </button>

          <button 
            className={`cursor-pointer h-10 ${activePage === 'tempratureConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('tempratureConverter')}
          >
            <Link href="/tempratureConverter">Temprature Converter</Link>
          </button>

          <button 
            className={`cursor-pointer h-10 ${activePage === 'documentConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('documentConverter')}
          >
            <Link href="/documentConverter">Document Converter</Link>
          </button>

          <button 
            className={`cursor-pointer h-10 ${activePage === 'weightConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('weightConverter')}
          >
            <Link href="/weightConverter">Weight Converter</Link>
          </button>

           <button 
            className={`cursor-pointer h-10 ${activePage === 'timeConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('timeConverter')}
          >
            <Link href="/timeConverter">Time Converter</Link>
          </button>


          
        </div>
      </section>
    </>
  )
}

export default Sidebar
