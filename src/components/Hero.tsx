import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-[1] loop"
      >
        <source src="/gradient.webm" type="video/webm" />
      </video>
    </div>
  )
}

export default Hero
