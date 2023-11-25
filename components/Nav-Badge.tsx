import React from 'react'

export default function NavBadge() {
  return (
    <section>
        <div className="inline-flex flex-nowrap items-center bg-white border border-gray-200 rounded-full py-1 px-2 dark:b-slate-900 dark:border-zinc-300">
  {/* <img className="me-1.5 inline-block h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/> */}
  <div className="whitespace-nowrap text-xs font-medium text-gray-800 dalrk:text-white">
    v1.0 <span className='text-xs text-blue-400'>Know More</span>
  </div>
</div>


    </section>
    
  )
}
