// "use client"
// import React, { useState } from 'react'
// import { CiGrid41 } from "react-icons/ci";
// import { PiImageBold } from "react-icons/pi";
// import { LuRuler } from "react-icons/lu";
// import { FaTemperatureHigh } from "react-icons/fa";
// import { IoDocumentAttachOutline } from "react-icons/io5";
// import { FaScaleUnbalancedFlip } from "react-icons/fa6";
// import { MdAccessTime } from "react-icons/md";


// import Link from 'next/link'

// const Sidebar = () => {
//   const [activePage, setActivePage] = useState('imageConverter');
  
//   return (
//     <>
//       <section className='h-screen w-72 lg:flex hidden flex-col bg-gray-300'>
        

//         <div className="flex items-center justify-center mt-4 mb-10">
//           <CiGrid41 className="h-8 w-8" />
//           <h1 className="text-2xl">Converter</h1>
//         </div>

//         <div className="flex gap-4 flex-col">

//           <button 
//             className={`cursor-pointer h-10 flex justify-center  text-blue-500 items-center gap-2 ${activePage === 'imageConverter' ? 'bg-white' : 'bg-transparent'}`}
//             onClick={() => setActivePage('imageConverter')}
//           >
//             <PiImageBold className='w-8 h-8'/>
//             <Link href="/imageConverter" className='font-semibold'>Image</Link>
//           </button>

//           <button 
//             className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'lengthConverter' ? 'bg-white' : 'bg-transparent'}`}
//             onClick={() => setActivePage('lengthConverter')}
//           >
//             <LuRuler className='w-8 h-8'/>
//             <Link href="/lengthConverter" className='font-semibold'>Length</Link>
//           </button>

//           <button 
//             className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'tempratureConverter' ? 'bg-white' : 'bg-transparent'}`}
//             onClick={() => setActivePage('tempratureConverter')}
//           >
//             <FaTemperatureHigh className='w-8 h-8'/>
//             <Link href="/tempratureConverter" className='font-semibold'>Tempurature</Link>
//           </button>

//           <button 
//             className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'documentConverter' ? 'bg-white' : 'bg-transparent'}`}
//             onClick={() => setActivePage('documentConverter')}
//           >
//             <IoDocumentAttachOutline className='w-8 h-8'/>
//             <Link href="/documentConverter" className='font-semibold'>Document</Link>
//           </button>

//           <button 
//             className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'weightConverter' ? 'bg-white' : 'bg-transparent'}`}
//             onClick={() => setActivePage('weightConverter')}
//           >
//             <FaScaleUnbalancedFlip className='w-8 h-8'/>
//             <Link href="/weightConverter" className='font-semibold'>Weight</Link>
//           </button>

//            <button 
//             className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'timeConverter' ? 'bg-white' : 'bg-transparent'}`}
//             onClick={() => setActivePage('timeConverter')}
//           >
//             <MdAccessTime className='w-8 h-8'/>
//             <Link href="/timeConverter" className='font-semibold'>Time</Link>
//           </button>


          
//         </div>
//       </section>



//       <section className='flex w-screen lg:hidden bottom-0 absolute bg-gray-300 h-20'>

//       </section>
//     </>
//   )
// }

// export default Sidebar



"use client"
import React, { useState } from 'react'
import { CiGrid41 } from "react-icons/ci";
import { PiImageBold } from "react-icons/pi";
import { LuRuler } from "react-icons/lu";
import { FaTemperatureHigh } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import Link from 'next/link'

const Sidebar = () => {
  const [activePage, setActivePage] = useState('imageConverter');
  
  return (
    <>
      {/* Desktop Sidebar */}
      <section className='h-screen w-72 lg:flex hidden flex-col bg-gray-300'>
        <div className="flex items-center justify-center mt-4 mb-10">
          <CiGrid41 className="h-8 w-8" />
          <h1 className="text-2xl">Converter</h1>
        </div>

        <div className="flex gap-4 flex-col">
          <button 
            className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'imageConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('imageConverter')}
          >
            <PiImageBold className='w-8 h-8'/>
            <Link href="/imageConverter" className='font-semibold'>Image</Link>
          </button>

          <button 
            className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'lengthConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('lengthConverter')}
          >
            <LuRuler className='w-8 h-8'/>
            <Link href="/lengthConverter" className='font-semibold'>Length</Link>
          </button>

          <button 
            className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'tempratureConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('tempratureConverter')}
          >
            <FaTemperatureHigh className='w-8 h-8'/>
            <Link href="/tempratureConverter" className='font-semibold'>Temperature</Link>
          </button>

          <button 
            className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'documentConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('documentConverter')}
          >
            <IoDocumentAttachOutline className='w-8 h-8'/>
            <Link href="/documentConverter" className='font-semibold'>Document</Link>
          </button>

          <button 
            className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'weightConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('weightConverter')}
          >
            <FaScaleUnbalancedFlip className='w-8 h-8'/>
            <Link href="/weightConverter" className='font-semibold'>Weight</Link>
          </button>

          <button 
            className={`cursor-pointer h-10 flex justify-center text-blue-500 items-center gap-2 ${activePage === 'timeConverter' ? 'bg-white' : 'bg-transparent'}`}
            onClick={() => setActivePage('timeConverter')}
          >
            <MdAccessTime className='w-8 h-8'/>
            <Link href="/timeConverter" className='font-semibold'>Time</Link>
          </button>
        </div>
      </section>

      {/* Mobile Bottom Bar */}
      <section className='flex w-screen lg:hidden fixed bottom-0 bg-gray-300 h-14 justify-around items-center'>
          <CiGrid41 className="h-8 w-8" />
        <Link href="/imageConverter" onClick={() => setActivePage('imageConverter')}>
          <PiImageBold className={`w-8 h-8 ${activePage === 'imageConverter' ? 'text-blue-500' : 'text-black'}`} />
        </Link>
        <Link href="/lengthConverter" onClick={() => setActivePage('lengthConverter')}>
          <LuRuler className={`w-8 h-8 ${activePage === 'lengthConverter' ? 'text-blue-500' : 'text-black'}`} />
        </Link>
        <Link href="/tempratureConverter" onClick={() => setActivePage('tempratureConverter')}>
          <FaTemperatureHigh className={`w-8 h-8 ${activePage === 'tempratureConverter' ? 'text-blue-500' : 'text-black'}`} />
        </Link>
        <Link href="/documentConverter" onClick={() => setActivePage('documentConverter')}>
          <IoDocumentAttachOutline className={`w-8 h-8 ${activePage === 'documentConverter' ? 'text-blue-500' : 'text-black'}`} />
        </Link>
        <Link href="/weightConverter" onClick={() => setActivePage('weightConverter')}>
          <FaScaleUnbalancedFlip className={`w-8 h-8 ${activePage === 'weightConverter' ? 'text-blue-500' : 'text-black'}`} />
        </Link>
        <Link href="/timeConverter" onClick={() => setActivePage('timeConverter')}>
          <MdAccessTime className={`w-8 h-8 ${activePage === 'timeConverter' ? 'text-blue-500' : 'text-black'}`} />
        </Link>
      </section>
    </>
  )
}

export default Sidebar

