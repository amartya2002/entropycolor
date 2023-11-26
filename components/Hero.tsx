"use client"
import React, { useState } from 'react'
import ColorCardLayout from './ColorCardLayout' 
import HeroIcon from './Hero-Icon'  
import ColorPick from './ColorPick'
import HorizontalCardLayout from './HorizontCardLay'




export default function Hero() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const handleButtonClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (

    <div className='max-w-7xl mx-auto bg-white dark:bg-gradient-to-br from-black to-zinc-800'>
      <HeroIcon />

      <section className=''>

        <div className="mx-auto h-full max-w-7xl px-8 py24 md:px-12 lg:px-32 l;g:py-32 mb-10">


          <div className="text-center">
            <h1 className="text-4xl font-semibol leading-tight lg:leding-tight tracking-tighter text-gray-800 dark:text-zinc-200 sm:text-5xl md:text-6xl lg:text-7xl">
              More than a gradient palette, <br className='hidden sm:block' />
              <span className="text-blue-500  lg:block dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t from-zinc-700 to-zinc-200"> less than a Genie.</span>
            </h1>
            <p className="mt-4 md:text-lg text-zinc-500 dark:text-zinc-400">
              Elevate your design with a handpicked
              <span className="sm:block"> selection of vibrant color combinations. </span>
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row"><a className="flex h-10 w-full items-center justify-center rounded-md bg-blue-500 dark:bg-zinc-100 px-4 py-2 text-sm font-semibold text-white dark:text-black transition-all hover:bg-blue-600 dark:hover:bg-zinc-200 md:w-auto" href="/#features">Learn more</a><button onClick={handleButtonClick} className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-sm text-blue-500 dark:text-zinc-200 transition-all hover:text-blue-400 dark:hover:bg-zinc-700 md:w-auto md:font-semibold" > Pick a Color</button>


            </div>
            <div >
              {isComponentVisible && <ColorPick />}
            </div>
          </div>

        </div>
      </section>


      <HorizontalCardLayout/>
      <ColorCardLayout />



    </div>
  )
}

