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

const HorizontalColorCard = ({ color, title, hex, rgb, css, desc }: ColorCardProps) => (
  <div className={`${color} w-[20rem] sm:w-[35rem] h-20 rounded-2xl shadow-md hover:scale-[1.01] duration-200 group relative m-2  `}>


  <div className="invisible group-hover:visible flex items-center justify-center h-full w-full bg-black/20 text-white rounded-2xl backdrop-blur-xl">
  <MyDrawer title={title} description={desc} tailwind={color} css={css} hex={hex}  rgb={rgb}   />
  </div>
  <div className="items-center justify-center flex mx-auto h-full text-black"></div>



   
  </div>
);

export default HorizontalColorCard
