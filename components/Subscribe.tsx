import React from "react";

const SubscribeSection = () => {
  return (
    <section className=" mx-auto mt-20 w-full max-w-7xl">
      <div className=" mb-10 w-full  px-8 text-center md:px-12 lg:px-32 ">
        <div>
          <h1 className="text-4xl leading-tight tracking-tighter text-gray-800 dark:text-zinc-200 sm:text-5xl md:text-6xl lg:text-7xl">
            As Entropy expands, <br className="hidden sm:block" />
            <span className="from-zinc-700  to-zinc-200 text-blue-500 dark:bg-gradient-to-t dark:bg-clip-text dark:text-transparent lg:block">
              we need your feedback!
            </span>
          </h1>

          <h2 className="mt-4 text-zinc-500 dark:text-zinc-400 md:text-lg">
            Much like the expanding entropy of our universe, our platform is set
            to grow.
            <span className="sm:block">
              {" "}
              Expect exciting new features every month or two to enhance your
              experience.{" "}
            </span>
          </h2>
        </div>

        <a
          className="mx-auto mt-4 flex h-10 w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 md:mt-7 md:w-72"
          href="/#features"
        >
          Stay in the loop{" "}
        </a>
      </div>
    </section>
  );
};

export default SubscribeSection;
