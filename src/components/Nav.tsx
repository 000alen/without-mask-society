import React from "react";

import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

interface Props {
  twitter_url: string;
  instagram_url: string;
  discord_url: string;
  opensea_url: string;
  digitalrocket_url: string;
}

export const Nav: React.FC<Props> = ({
  twitter_url,
  instagram_url,
  discord_url,
  opensea_url,
}) => {
  return (
    <nav className="flex flex-col items-end gap-2 p-12 lg:ml-12 lg:flex-row lg:justify-around">
      <a className="text-xl italic font-bold" href="#about">
        ABOUT
      </a>
      <a className="text-xl italic font-bold" href="#team">
        TEAM
      </a>
      <a className="text-xl italic font-bold" href="#roadmap">
        ROADMAP
      </a>
      <a className="text-xl italic font-bold" href="#shop">
        SHOP
      </a>
      <a className="text-xl italic font-bold" href="#faq">
        FAQ
      </a>

      <div className="flex flex-row gap-4">
        <a href={twitter_url} target="_blank">
          <TwitterIcon />
        </a>
        <a href={instagram_url} target="_blank">
          <InstagramIcon />
        </a>
        <a href={discord_url} target="_blank">
          <DiscordIcon />
        </a>
        <a href={opensea_url} target="_blank">
          <OpenseaIcon />
        </a>
      </div>
    </nav>
  );
};
