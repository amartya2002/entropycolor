import Link from 'next/link';
import React from 'react'

type BadgeProps = {
  version?: string;
  title: string;
  href: string;
  iconHref?: string
};

export default function Badge({ href, version, title, iconHref }: BadgeProps) {
  return (
    <section className='hover:border-blue-500 duration-300 inline-flex flex-nowrap items-center bg-white border border-gray-200 rounded-full py-1 px-2 dark:bg-slate-900 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:border-orange-900 '>
      <Link href={href} className="inline-flex items-center flex-nowrap">
        {iconHref && <img className="me-1.5 inline-block h-6 w-6 rounded-full" src={iconHref} alt="Icon" />}

        <span className="relative flex h-3 w-3 me-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 dark:bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400 dark:bg-orange-400"></span>
        </span>

        <p className="whitespace-nowrap text-xs font-medium text-gray-800 dark:text-zinc-200">
          {version} <span className='text-xs text-blue-400 dark:text-orange-400'>{title}</span>
        </p>
      </Link>


    </section>

  )
}
