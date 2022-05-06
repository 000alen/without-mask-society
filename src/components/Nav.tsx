import React from "react";

import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const Nav = () => {
  return (
    <nav className="flex flex-col items-end p-12 space-y-2 lg:ml-12 lg:flex-row lg:justify-around lg:space-x-2">
      <a className="text-xl italic font-bold">ABOUT</a>
      <a className="text-xl italic font-bold">ROADMAP</a>
      <a className="text-xl italic font-bold">FAQ</a>
      <a className="text-xl italic font-bold">TEAM</a>
      <a className="text-xl italic font-bold">SHOP</a>

      <div className="flex flex-row space-x-4">
        <a>
          <TwitterIcon />
        </a>
        <a>
          <InstagramIcon />
        </a>
        <a>
          <DiscordIcon />
        </a>
        <a>
          <OpenseaIcon />
        </a>
      </div>
    </nav>
  );
};
