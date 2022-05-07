import { StaticImage } from "gatsby-plugin-image";
import React, { PropsWithChildren } from "react";

import { FancyButton } from "./FancyButton";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { Subtitle } from "./Subtitle";

interface Props {
  image: string;
  title: string;
  paragraph: string;
  className?: string;
}

export const RoadmapRight = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<Props>
>(({ image, title, paragraph, className = "", children }, ref) => {
  return (
    <div
      ref={ref}
      className={`${className} flex flex-col p-8 space-y-8 lg:justify-center lg:space-x-8 lg:flex-row`}
    >
      <img
        className="lg:hidden self-end min-w-min max-w-[20rem] rounded max-h-[20rem]"
        src={image}
        alt=""
      />

      <div className="lg:w-[70%] p-8 border-r-2 flex flex-col space-y-2 text-right items-end">
        <Subtitle>{title}</Subtitle>
        <p className="max-w-xl font-semibold">{paragraph}</p>
        {children}
      </div>

      <img
        className="hidden lg:block lg:w-[30%] min-w-min max-w-[20rem] rounded max-h-[20rem]"
        src={image}
        alt=""
      />
    </div>
  );
});
