import React from 'react';

const SubscribeSection = () => {
    return (
        <section className=' max-w-7xl mx-auto mt-20 w-full'>

            <div className=" text-center px-8  md:px-12 lg:px-32 mb-10 w-full ">

                <div>
                    <h1 className="text-4xl font-semibol leading-tight lg:leding-tight tracking-tighter text-gray-800 dark:text-zinc-200 sm:text-5xl md:text-6xl lg:text-7xl">
                        As Entropy expands, <br className='hidden sm:block' />
                        <span className="text-blue-500  lg:block dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t from-zinc-700 to-zinc-200">we need your feedback!</span>
                    </h1>

                    <h2 className="mt-4 md:text-lg text-zinc-500 dark:text-zinc-400">
                        Much like the expanding entropy of our universe, our platform is set to grow.<span className="sm:block"> Expect exciting new features every month or two to enhance your experience. </span>
                    </h2>
                </div>

                
                <a className="mt-4 md:mt-7 flex h-10 w-full items-center justify-center rounded-md bg-blue-500 dark:bg-zinc-100 px-4 py-2 text-sm font-semibold text-white dark:text-black transition-all hover:bg-blue-600 dark:hover:bg-zinc-200 md:w-72 mx-auto" href="/#features">Stay in the loop </a>
               

            </div>

        </section>
    );
};

export default SubscribeSection;
