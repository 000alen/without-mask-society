import React from "react";
import { CityMemberSocial } from "../typings";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Subtitle } from "./Subtitle";

interface Props {
  className?: string;
  avatar: string;
  name: string;
  description: string;
  socials: CityMemberSocial[];
}

export const Avatar = React.forwardRef<HTMLDivElement, Props>(
  ({ className = "", avatar, name, description, socials }, ref) => {
    return (
      <div ref={ref} className={`${className} flex flex-col items-center`}>
        <div className="relative flex justify-center">
          <div className="-z-10 absolute bottom-0 border-2 border-green-400 w-[80%] h-[70%]"></div>

          <img
            className="w-32 select-none md:w-48 lg:w-64"
            src={avatar}
            alt={name}
          />
        </div>

        <h1
          className={`lg:max-w-3xl text-2xl lg:text-6xl italic self-center font-bold`}
        >
          {name}
        </h1>

        <p className="font-mono italic text-center">{description}</p>
        <div className="flex flex-row justify-center gap-2">
          {socials &&
            socials.map(
              (
                { city_member_social_name: name, city_member_social_url: url },
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
      </div>
    );
  }
);
