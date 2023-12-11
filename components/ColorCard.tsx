"use client";

import { MyDrawer } from "./drawer-modal";
type ColorCardProps = {
  color: string;
  title: string;
  hex: string;
  rgb: string;
  css: string;
  desc: string;
};

const ColorCard = ({ color, title, hex, rgb, css, desc }: ColorCardProps) => (
  <div
    className={`${color} sm:w-[6rem] sm:h-[6rem]  group relative m-1.5 h-[5.5rem] w-[5.5rem] rounded-2xl shadow-lg duration-200 hover:scale-105 `}
  >
    <div className="invisible flex h-full w-full items-center justify-center rounded-2xl bg-black/20 text-white backdrop-blur-xl group-hover:visible">
      <MyDrawer
        title={title}
        description={desc}
        tailwind={color}
        css={css}
        hex={hex}
        rgb={rgb}
      />
    </div>

  </div>
);

export default ColorCard;
