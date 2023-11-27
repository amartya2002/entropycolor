"use client";
import HorizontalColorCard from "./HorizontColCard";
import weekly from "@/data/weekly.json";

const HorizontalCardLayout = () => (
  <div className="mx-8 mb-12 max-w-7xl md:px-12 lg:px-32">
    <p className=" pb-8 text-center text-2xl leading-none md:leading-tight tracking-tight  text-gray-800 dark:text-zinc-200  ">
      Curated hues for{" "}
      <span className="block from-zinc-500 to-zinc-200 text-blue-500 dark:bg-gradient-to-t dark:bg-clip-text dark:text-transparent ">
        the week ahead.
      </span>
    </p>
    <div className=" flex justify-center">
      <div className=" no-scrollbar h-[28rem] overflow-y-scroll rounded-2xl border-4 border-zinc-100  p-2 dark:border-zinc-700 dark:bg-transparent">
        <div className=" flex-col space-y-4 ">
          {weekly.map((color, index) => (
            <HorizontalColorCard
              key={index}
              color={color.color}
              title={color.name}
              desc={color.description}
              css={color.css}
              rgb={color.rgb}
              hex={color.hex}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HorizontalCardLayout;
