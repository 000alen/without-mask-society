import React from "react";

import { Social } from "../typings";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

interface Props {
  className?: string;
  avatar: string;
  name: string;
  description: string;
  socials: Social[];
}

export const Avatar = React.forwardRef<HTMLDivElement, Props>(
  ({ className = "", avatar, name, description, socials }, ref) => {
    return (
      <div
        ref={ref}
        className={`${className} bg-green-400 w-32 md:w-48 lg:w-64 p-2 rounded flex flex-col items-center`}
      >
        <img
          className="w-32 rounded select-none md:w-48 lg:w-64"
          src={avatar}
          alt={name}
        />

        <h1
          className={`lg:max-w-3xl text-center text-2xl lg:text-4xl italic self-center font-bold`}
        >
          {name}
        </h1>

        <p className="font-mono italic text-center">{description}</p>

        {socials && (
          <div className="flex flex-row justify-center gap-2">
            {socials.map(
              (
                { social_name: name, social_url: url },
                i
              ) =>
                name === "twitter" ? (
                  <a key={i} href={url} target="_blank">
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                ) : name === "linkedin" ? (
                  <a key={i} href={url} target="_blank">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                ) : null
            )}
          </div>
        )}
      </div>
    );
  }
);
