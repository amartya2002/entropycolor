"use client"
import React from 'react'
import ColorCardLayout from './ColorCardLayout'
import HeroIcon from './Hero-Icon'




export default function Hero() {
  return (
    <div className='max-w-7xl mx-auto'>
      <HeroIcon/>
      
      <section className=''>

  <div className="mx-auto h-full max-w-7xl px-8 py24 md:px-12 lg:px-32 l;g:py-32 mb-10">


    <div className="text-center">
      <p className="text-4xl font-semibold leading-tight lg:leding-tight tracking-tighter text-gray-800 lg:text-7xl">
        More than a gradient palette,
        <span className="text-blue-500 lg:block"> less than a time machine.</span>
      </p>
      <p className="mt-4 text-base text-zinc-500">
      Elevate your design with a handpicked 
        <span className="lg:block"> selection of vibrant color combinations. </span>
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row"><a className="flex h-10 w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 md:w-auto" href="/#features">Learn more</a><a className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-blue-500 transition-all hover:text-blue-400 md:w-auto md:font-semibold" href="#_"> Color Picker</a></div>
    </div>
  </div>
</section>

      
      <ColorCardLayout />

    </div>
  )
}

