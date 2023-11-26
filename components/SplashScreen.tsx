// Splash component

import React, { useEffect, useState } from "react";
import SplashIcon from "./SplashIcon";

export default function Splash({ finishLoading }: any) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 2);

        return () => clearTimeout(timeout);
    }, []);

    return (


        <div className="bg-black h-[100vh] flex flex-col justify-center items-center   ">

            <SplashIcon />

            <p className="text-3xl font-semibol leading-tight lg:leding-tight tracking-tighter text-zinc-200 lg:text-6xl text-center">
              Entropy 
              <span className=" text-transparent bg-clip-text bg-gradient-to-t from-zinc-700 to-zinc-200"> Gradient</span>
            </p>
        </div>
    );
}
