"use client"
import React, {useState} from "react";
import dp from "@/public/dp.jpg";
import Image from "next/image";
import Link from "next/link";
import Example from "@/components/HeadlessDrawer";

const BlogArticle = () => {
  return (
    <>
      <div className="mx-auto mb-10 mt-6 max-w-7xl px-8  md:px-12  lg:mt-12 lg:px-32  ">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
              <div className="flex-shrink-0">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={dp}
                  alt="Image Description"
                />
              </div>

              <div className="grow">
                <div className="flex items-center justify-between gap-x-2">
                  <div>
                    <ul className="text-xs text-gray-500">
                      <li className="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:text-gray-400 dark:before:bg-gray-600">
                        Jan 18
                      </li>
                      <li className="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:text-gray-400 dark:before:bg-gray-600">
                        8 min read
                      </li>
                    </ul>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                      Tweet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold dark:text-white md:text-3xl">
                Entropy Gradient v1.0 is ready!
              </h2>

              <p className="text-zinc-600  dark:text-zinc-400">
                Embark on a journey of color exploration with our website, a
                treasure trove of handpicked gradients and color palettes
                designed to elevate your creative projects. Whether you&apos;re
                a seasoned designer or simply someone who loves to add a splash
                of color to your work, our collection has something for
                everyone.
              </p>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400">
              We&apos;re constantly expanding our offerings to cater to your
              diverse needs. In the coming days, we&apos;ll be introducing a
              powerful color picker that empowers you to create your own custom
              gradients and palettes, perfectly tailored to your unique vision.
              Stay tuned for more exciting updates! Get ready to unleash your
              creativity with our ever-growing collection of handpicked
              gradients and palettes.
            </p>

            {/* <figure>
              <img
                className="w-full rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                A woman sitting at a table.
              </figcaption>
            </figure> */}

            <h3 className="text-center text-xl font-semibold dark:text-white">
              Explore a World of Colors with Our Handpicked Gradients and
              Palettes.
            </h3>
          </div>
        </div>
      </div>

      <div className=" px-8 text-center">
        <Link
          className="mx-auto mt-4 flex h-10 w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 md:mt-7 md:w-72"
          href="/"
        >
          Start Exploring{" "}
        </Link>
      </div>

      <div className=" px-8 text-center">
        <Link
          className="mx-auto mt-4 flex h-10 w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 md:mt-7 md:w-72"
          href=""
        >
          Open Drawer{" "}
          <Example/>
        </Link>
        
      </div>

      {/* End Blog Article */}
    </>
  );
};

export default BlogArticle;
