import React from 'react';

const SubscribeSection = () => {
    return (
        <section className=' max-w-7xl mx-auto mt-20'>

            <div className=" text-center px-8 py24 md:px-12 lg:px-32 l;g:py-32 mb-10 ">

                <div>
                    <p className="text-4xl font-semibol leading-tight lg:leding-tight tracking-tighter text-gray-800 dark:text-zinc-200 lg:text-6xl">
                        EGr is growing,
                        <span className="text-blue-500  lg:block dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t from-zinc-700 to-zinc-200"> we can keep you notified.</span>
                    </p>
                    <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
                        Elevate your design with a handpicked
                        <span className="lg:block"> selection of vibrant color combinations. </span>
                    </p>
                </div>

                <div className="flex flex-col items-center max-w-sm pt-8 pb-12 mx-auto md:pt-6">
                    <form className="flex flex-col items-center justify-center max-w-sm mx-auto" action="">
                        <div className="flex flex-col w-full gap-4 mt-3 sm:flex-row">
                            <input
                                name="email"
                                type="email"
                                className="w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 dark:bg-zinc-800 border border-gray-300 rounded-lg  focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50"
                                placeholder="Enter your email"
                                required
                            />
<button  className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-300 dark:border-zinc-700  dark:bg-zinc-800 px-4 py-2 text-sm  dark:text-zinc-200 transition-all hover:text-blue-400 bg-blue-500 dark:hover:bg-zinc-700 md:w-auto md:font-semibold text-white" > Subscribe</button>
                        </div>
                    </form>
                </div>
            
            </div>

        </section>
    );
};

export default SubscribeSection;
