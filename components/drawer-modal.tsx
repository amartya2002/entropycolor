"use client";

import { Drawer } from "vaul";

type MyDrawerProps={
  title: string;
  hex: string;
  rgb: string;
  css: string;
  description: string;
  tailwind: string
}

export function MyDrawer({ title, hex, description, rgb, tailwind, css }: MyDrawerProps) {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button>Explore</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-zinc-900/20 dark:bg-black/60 backdrop-blur-2xl" />
        <Drawer.Content className="bg-zinc-100 dark:bg-black flex flex-col rounded-t-[1.5rem]  h-[56%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white dark:bg-zinc-800 rounded-t-[1.5rem] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gradient-to-l from-zinc-300 to-black/50 mb-8 " />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium text-lg mb-4">
                {title}
              </Drawer.Title>
              <Drawer.Description className="text-zinc-600 dark:text-zinc-400 mb-2">
                {description}
              </Drawer.Description>
              <div className="border-b my-4 dark:border-zinc-700 border-zinc-300"></div>

              <p  className=" mb-2 font-medium text-zinc-700 dark:text-zinc-300">
                HEX: <span  className=" text-zinc-500 font-normal dark:text-zinc-400">{hex}</span>
              </p>
              <p className=" mb-2 font-medium text-zinc-700 dark:text-zinc-300">
                Tailwind: <span className="text-zinc-500 dark:text-zinc-400 font-normal">{tailwind}</span>
              </p>
              <p className=" mb-2 font-medium text-zinc-700 dark:text-zinc-300">
                CSS: <span className="text-zinc-500 dark:text-zinc-400 font-normal">{css}</span>
              </p>
              <p className=" mb-2 font-medium text-zinc-700 dark:text-zinc-300">
                RGB: <span className="text-zinc-500 dark:text-zinc-400 font-normal">{rgb}</span>
              </p>

            </div>
          </div>

          {/* <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
              <div className="flex gap-6 justify-end max-w-md mx-auto">
                <a
                  className="text-xs text-zinc-600 flex items-center gap-0.25"
                  href="https://github.com/emilkowalski/vaul"
                  target="_blank"
                >
                  GitHub
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="w-3 h-3 ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
                <a
                  className="text-xs text-zinc-600 flex items-center gap-0.25"
                  href="https://twitter.com/emilkowalski_"
                  target="_blank"
                >
                  Twitter
                  <svg
                    fill="none"
                    height="16"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="16"
                    aria-hidden="true"
                    className="w-3 h-3 ml-1"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14L21 3"></path>
                  </svg>
                </a>
              </div>
            </div> */}

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
