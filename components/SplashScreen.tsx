import React, { useEffect, useState } from "react";
import SplashIcon from "./SplashIcon";

export default function Splash({ finishLoading }: any) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-black">
      <SplashIcon />
      <p className="font-semibol lg:leding-tight text-center text-3xl leading-tight tracking-tighter text-zinc-200 lg:text-6xl">
        Entropy
        <span className=" bg-gradient-to-t from-zinc-700 to-zinc-200 bg-clip-text text-transparent">
          {" "}
          Gradient
        </span>
      </p>
    </div>
  );
}
