"use client"
import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <div className='h-screen bg-amber-300 w-72'>
            <Link href="/imageConverter">Image Converter</Link>
      </div>
    </>
  )
}

export default Sidebar
