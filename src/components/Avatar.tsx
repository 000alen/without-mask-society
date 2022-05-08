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
          <div className="absolute bottom-0 border-2 border-white w-[80%] h-[70%]"></div>

          <img className="w-64" src={avatar} alt={name} />
        </div>

        <Subtitle>{name}</Subtitle>

        <p className="mb-8 italic">{description}</p>
        <div className="flex flex-row justify-center gap-2">
          {/* TODO */}
          {socials &&
            socials.map(
              (
                { city_member_social_name: name, city_member_social_url: url },
                i
              ) =>
                name === "twitter" ? (
                  <TwitterIcon key={i} />
                ) : name === "linkedin" ? (
                  <LinkedinIcon key={i} />
                ) : null
            )}
        </div>
      </div>
    );
  }
);
