import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { DiscordIcon } from "./icons/DiscordIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Subtitle } from "./Subtitle";

interface Props {
  name: string;
  description: string;
  id: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, Props>(
  ({ name, description, id }, ref) => {
    return (
      <div ref={ref} className="flex flex-col items-center">
        <div className="relative flex justify-center">
          <div className="absolute bottom-0 border-2 border-white w-[80%] h-[70%]"></div>

          {id === "1" ? (
            <StaticImage
              className="w-64"
              src="../images/avatars/1.png"
              alt=""
            />
          ) : id === "2" ? (
            <StaticImage
              className="w-64"
              src="../images/avatars/2.png"
              alt=""
            />
          ) : id === "3" ? (
            <StaticImage
              className="w-64"
              src="../images/avatars/3.png"
              alt=""
            />
          ) : id === "4" ? (
            <StaticImage
              className="w-64"
              src="../images/avatars/4.png"
              alt=""
            />
          ) : id === "5" ? (
            <StaticImage
              className="w-64"
              src="../images/avatars/5.png"
              alt=""
            />
          ) : id === "6" ? (
            <StaticImage
              className="w-64"
              src="../images/avatars/6.png"
              alt=""
            />
          ) : null}
        </div>

        <Subtitle>{name}</Subtitle>

        <p className="mb-8 italic">{description}</p>
        <div className="flex flex-row justify-center space-x-2">
          <TwitterIcon />
          <LinkedinIcon />
        </div>
      </div>
    );
  }
);
