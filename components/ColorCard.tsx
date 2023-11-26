"use client"

import {MyDrawer} from "./drawer-modal";
type ColorCardProps={
  color: string;
  title: string;
  hex: string;
  rgb: string;
  css: string;
  desc: string;
}

const ColorCard = ({ color, title, hex, rgb, css, desc }: ColorCardProps) => (
  <div className={`${color} w-24 h-24 sm:w-30 sm:h-30 rounded-2xl m-2 shadow-lg hover:scale-105 duration-200 group relative  `}>


  <div className="invisible group-hover:visible flex items-center justify-center h-full w-full bg-black/20 text-white rounded-2xl backdrop-blur-xl">
  <MyDrawer title={title} description={desc} tailwind={color} css={css} hex={hex}  rgb={rgb}   />
  </div>



   
  </div>
);

export default ColorCard
