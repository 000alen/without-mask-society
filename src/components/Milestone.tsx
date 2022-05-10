import React, { PropsWithChildren } from "react";
import { Subtitle } from "./Subtitle";

interface Props {
  image: string;
  title: string;
  paragraph: string;
  direction?: "left" | "right";
  className?: string;
}

export const Milestone = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<Props>
>(
  (
    { image, title, paragraph, direction = "left", className = "", children },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${className} ${
          direction === "left" ? "flex-row" : "flex-row-reverse"
        } flex justify-center p-2 gap-2`}
      >
        {/* <img
          className="hidden md:block w-[30%] min-w-min max-w-[20rem] rounded max-h-[20rem]"
          src={image}
          alt=""
        /> */}

        <div className="w-[70%] p-2 border-2 bg-green-400 bg-opacity-30 rounded-md flex flex-col gap-2">
          <Subtitle>{title}</Subtitle>
          <p className="max-w-xl font-mono font-semibold truncate">
            {paragraph}
          </p>
          {children}
        </div>
      </div>
    );
  }
);
