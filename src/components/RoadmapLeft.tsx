import React, { PropsWithChildren } from "react";
import { Subtitle } from "./Subtitle";

interface Props {
  image: string;
  title: string;
  paragraph: string;
  className?: string;
}

export const RoadmapLeft = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<Props>
>(({ image, title, paragraph, className = "", children }, ref) => {
  return (
    <div
      ref={ref}
      className={`${className} flex flex-col justify-center p-8 gap-8 lg:flex-row`}
    >
      <img
        className="lg:w-[30%] min-w-min max-w-[20rem] rounded max-h-[20rem]"
        src={image}
        alt=""
      />

      <div className="lg:w-[70%] p-8 border-l-2 flex flex-col gap-2">
        <Subtitle>{title}</Subtitle>
        <p className="max-w-xl font-mono font-semibold">{paragraph}</p>
        {children}
      </div>
    </div>
  );
});
