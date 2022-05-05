import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { DiscordIcon } from "./icons/DiscordIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

interface Props {
  name: string;
  description: string;
}

export const Avatar: React.FC<Props> = ({ name, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center">
        <div className="absolute bottom-0 border-2 border-white w-[80%] h-[70%]"></div>
        <StaticImage className="w-64" src="../images/avatars/1.png" alt="" />
      </div>

      <h1 className="text-6xl max-w-3xl font-bold italic">{name}</h1>
      <p className="mb-8 italic">{description}</p>
      <div className="flex flex-row space-x-1">
        <TwitterIcon />
        <DiscordIcon />
      </div>
    </div>
  );
};
