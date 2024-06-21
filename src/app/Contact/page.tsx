import React from 'react'
import Content from './content.mdx'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <div className="pt-10 my-10 font-bold text-4xl flex justify-center  ">
        <Content />
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <Footer />
      </div>
    </div>
  )
}

export default page
