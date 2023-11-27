import Link from "next/link";
import React from "react";

type BadgeProps = {
  version?: string;
  title: string;
  href: string;
  iconHref?: string;
};

export default function Badge({ href, version, title, iconHref }: BadgeProps) {
  return (
    <section className="inline-flex flex-nowrap items-center rounded-full border border-gray-200 bg-white px-2 py-1 duration-300 hover:border-blue-500 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-slate-900 dark:hover:border-orange-900 ">
      <Link href={href} className="inline-flex flex-nowrap items-center">
        {iconHref && (
          <img
            className="me-1.5 inline-block h-6 w-6 rounded-full"
            src={iconHref}
            alt="Icon"
          />
        )}

        <span className="relative me-1.5 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75 dark:bg-white"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-400 dark:bg-orange-400"></span>
        </span>

        <p className="whitespace-nowrap text-xs font-medium text-gray-800 dark:text-zinc-200">
          {version}{" "}
          <span className="text-xs text-blue-400 dark:text-orange-400">
            {title}
          </span>
        </p>
      </Link>
    </section>
  );
}
