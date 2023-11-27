"use client";
import ColorCard from "@/components/ColorCard";
import colors from "@/data/colors.json";

const ColorCardLayout = () => (
  <div className="mx-8 max-w-7xl md:px-12 lg:px-32 ">
    <p className="  pb-8 text-left text-2xl leading-none tracking-tight text-gray-800  dark:text-zinc-200 md:leading-tight  ">
      Some shades for{" "}
      <span className="block from-zinc-500 to-zinc-200 text-blue-500 dark:bg-gradient-to-t dark:bg-clip-text dark:text-transparent ">
        your new project.
      </span>
    </p>
    <div className=" flex justify-center">
      <div className=" no-scrollbar h-[30rem] overflow-y-scroll rounded-2xl border-4 border-zinc-100  p-2 dark:border-zinc-700 dark:bg-transparent ">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5   ">
          {colors.map((color, index) => (
            <ColorCard
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

export default ColorCardLayout;
