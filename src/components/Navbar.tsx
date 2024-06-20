import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import { RiGlobalFill } from 'react-icons/ri'
export default function Navbar() {
  return (
    <div className="w-screen h-screen justify-center pt-2 flex absolute z-10 text-3xl  text-black font-teko flex-row">
      <FaMobileAlt size="35px" />
      <div className="ml-2 -mt-0.5">
        <RiGlobalFill size="40px" />
      </div>
    </div>
  )
}
