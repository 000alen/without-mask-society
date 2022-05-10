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
      <a
        className="text-xl italic font-bold transition-all hover:text-green-400"
        href="#about"
      >
        ABOUT
      </a>
      <a
        className="text-xl italic font-bold transition-all hover:text-green-400"
        href="#team"
      >
        TEAM
      </a>
      <a
        className="text-xl italic font-bold transition-all hover:text-green-400"
        href="#roadmap"
      >
        ROADMAP
      </a>
      <a
        className="text-xl italic font-bold transition-all hover:text-green-400"
        href="#shop"
      >
        SHOP
      </a>
      <a
        className="text-xl italic font-bold transition-all hover:text-green-400"
        href="#faq"
      >
        FAQ
      </a>
      <a
        className="text-xl italic font-bold transition-all hover:text-green-400"
        href="#blogs"
      >
        BLOGS
      </a>

      <div className="flex flex-row gap-4">
        <a
          className="transition-all hover:text-green-400"
          href={twitter_url}
          target="_blank"
        >
          <TwitterIcon className="w-6 h-6 transition-all hover:fill-green-400" />
        </a>
        <a
          className="transition-all hover:text-green-400"
          href={instagram_url}
          target="_blank"
        >
          <InstagramIcon className="w-6 h-6 transition-all hover:fill-green-400" />
        </a>
        <a
          className="transition-all hover:text-green-400"
          href={discord_url}
          target="_blank"
        >
          <DiscordIcon className="w-6 h-6 transition-all hover:fill-green-400" />
        </a>
        <a href={opensea_url} target="_blank">
          <OpenseaIcon className="w-6 h-6 transition-all hover:fill-green-400" />
        </a>
      </div>
    </nav>
  );
};
