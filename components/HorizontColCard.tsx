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

const HorizontalColorCard = ({
  color,
  title,
  hex,
  rgb,
  css,
  desc,
}: ColorCardProps) => (
  <div
    className={`${color} group relative h-20 w-[19rem] rounded-2xl shadow-md duration-200 hover:scale-[1.01] sm:w-[35rem]  `}
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
    <div className="mx-auto flex h-full items-center justify-center text-black"></div>
  </div>
);

export default HorizontalColorCard;
