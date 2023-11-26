"use client"
import React, { useState } from 'react';
import NavBadge from './Nav-Badge';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="justify-center w-full mx-auto bg-white/60 sticky top-0 backdrop-blur-lg  nav">
      <div className="flex w-full px-6 py-2 mx-auto md:px-12 md:items-center justify-between flex-row lg:px-32 max-w-7xl z-99">
        <div className="flex flex-row items-center justify-between text-accent-500">
          <a className=" text-xl font-bold tracking-tight text-black" href="/">Entropy<span className='font-normal text-zinc-500'> Gradient</span></a>
          {/* <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path className={open ? 'hidden' : 'inline-flex'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path className={open ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button> */}
        </div>
        {/* <nav className={`flex-col items-center flex-grow ${open ? 'flex' : 'hidden'} p-4 px-5 opacity-100 md:px-0 md:pb-0 md:flex md:justify-start md:flex-row lg:p-0 md:mt-0`}>
          <a className="px-4 py-2 text-sm text-gray-500 hover:text-blue-400 focus:outline-none focus:shadow-none focus:text-black/90 md:ml-auto" href="#features">Features</a>
          <a className="flex items-center justify-center h-8 px-4 py-2 text-xs font-semibold transition-all bg-white border border-gray-300 rounded-lg text-accent-600 hover:text-accent-500" href="#_" role="button">Download Saasify</a>
        </nav> */}
        <nav className='flex-col'>

        <NavBadge/>
        </nav>

      </div>
    </div>
  );
};

export default Navbar;
