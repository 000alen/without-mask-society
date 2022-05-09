import React from "react";
import { CityMemberSocial } from "../typings";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Subtitle } from "./Subtitle";

interface Props {
  avatar: string;
  name: string;
  description: string;
  socials: CityMemberSocial[];
}

export const Avatar = React.forwardRef<HTMLDivElement, Props>(
  ({ avatar, name, description, socials }, ref) => {
    return (
      <div ref={ref} className="flex flex-col items-center">
        <div className="relative flex justify-center">
          <div className="-z-10 absolute bottom-0 border-2 border-white w-[80%] h-[70%]"></div>

          <img className="w-64" src={avatar} alt={name} />
        </div>

        <Subtitle className="px-8 text-center">{name}</Subtitle>

        <p className="mb-8 font-mono italic">{description}</p>
        <div className="flex flex-row justify-center gap-2">
          {socials &&
            socials.map(
              (
                { city_member_social_name: name, city_member_social_url: url },
                i
              ) =>
                name === "twitter" ? (
                  <a key={i} href={url} target="_blank">
                    <TwitterIcon />
                  </a>
                ) : name === "linkedin" ? (
                  <a key={i} href={url} target="_blank">
                    <LinkedinIcon />
                  </a>
                ) : null
            )}
        </div>
      </div>
    );
  }
);
