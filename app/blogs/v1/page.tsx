import React from "react";
import dp from "@/public/dp.jpg";
import Image from "next/image";
import Link from "next/link";

const BlogArticle = () => {
  return (
    <>
      <div className="mx-auto mt-20 max-w-7xl px-5 pb-12 sm:px-6 lg:mt-20 lg:px-8 ">
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
                    <div className="hs-tooltip inline-block [--placement:bottom] [--trigger:hover]">
                      <div className="hs-tooltip-toggle block cursor-pointer text-start sm:mb-1">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          Amartya Sinha
                        </span>

                        <div
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible invisible absolute z-10 inline-block max-w-xs cursor-default divide-y divide-gray-700 rounded-xl bg-gray-900 opacity-0 shadow-lg transition-opacity dark:bg-black"
                          role="tooltip"
                        >
                          <div className="p-4 sm:p-5">
                            <div className="mb-2 flex w-full gap-x-5 sm:items-center sm:gap-x-3">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                  alt="Image Description"
                                />
                              </div>

                              <div className="grow">
                                <p className="text-lg font-semibold text-gray-200">
                                  Leyla Ludic
                                </p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-400">
                              Leyla is a Customer Success Specialist at Preline
                              and spends her time speaking to in-house
                              recruiters all over the world.
                            </p>
                          </div>

                          <div className="flex items-center justify-between px-4 py-3 sm:px-5">
                            <ul className="space-x-3 text-xs">
                              <li className="inline-block">
                                <span className="font-semibold text-gray-200">
                                  56
                                </span>
                                <span className="text-gray-400">articles</span>
                              </li>
                              <li className="inline-block">
                                <span className="font-semibold text-gray-200">
                                  1k+
                                </span>
                                <span className="text-gray-400">followers</span>
                              </li>
                            </ul>

                            <div>
                              <button
                                type="button"
                                className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              >
                                <svg
                                  className="h-3.5 w-3.5 flex-shrink-0"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                                  />
                                </svg>
                                Follow
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

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
                Announcing a free plan for small teams
              </h2>

              <p className="text-lg text-gray-800 dark:text-gray-200">Hello</p>
            </div>

            <p className="text-lg text-gray-800 dark:text-gray-200">Hello.</p>

            <figure>
              <img
                className="w-full rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                A woman sitting at a table.
              </figcaption>
            </figure>

            <p className="text-lg text-gray-800 dark:text-gray-200">HEllo</p>

            <p className="text-lg text-gray-800 dark:text-gray-200">
              Hello{" "}
              <a
                className="font-medium text-blue-600 decoration-2 hover:underline"
                href="#"
              >
                Hello
              </a>
              , Hello
            </p>

            <blockquote className="p-4 text-center sm:px-7">
              <p className="text-xl font-medium text-gray-800 dark:text-gray-200 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal">
                To say that switching to Preline has been life-changing is an
                understatement. My business has tripled and I got my life back.
              </p>
              <p className="mt-5 text-gray-800 dark:text-gray-200">
                Nicole Grazioso
              </p>
            </blockquote>

            <figure>
              <img
                className="w-full rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
              <figcaption className="mt-3 text-center text-sm text-gray-500">
                A man and a woman looking at a cell phone.
              </figcaption>
            </figure>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold dark:text-white">
                Bringing the culture of sharing to everyone
              </h3>

              <p className="text-lg text-gray-800 dark:text-gray-200">hello.</p>
            </div>

            <ul className="list-outside list-disc space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
              <li className="ps-2">
                Phell{" "}
                <a
                  className="font-medium text-blue-600 decoration-2 hover:underline"
                  href="#"
                >
                  said
                </a>{" "}
                Stewart Scott-Curran, Inte Director of Brand Design.
              </li>
              <li className="ps-2">
                hello{" "}
                <a
                  className="font-medium text-blue-600 decoration-2 hover:underline"
                  href="#"
                >
                  Eventbrite
                </a>
                .
              </li>
            </ul>

            <p className="text-lg text-gray-800 dark:text-gray-200">hello.</p>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-6 text-center">
        <div className="inline-block rounded-full bg-white px-4 py-3 shadow-md dark:bg-gray-800">
          <div className="flex items-center gap-x-1.5">
            <Link href="/" className="scroll-smooth">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      {/* End Blog Article */}
    </>
  );
};

export default BlogArticle;
