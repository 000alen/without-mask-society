import React from "react";
import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const Nav = () => {
  return (
    <nav className="lg:ml-12 p-12 space-y-2 flex flex-col items-end lg:flex-row lg:justify-around lg:space-x-2">
      <a className="text-xl font-bold italic">ABOUT</a>
      <a className="text-xl font-bold italic">ROADMAP</a>
      <a className="text-xl font-bold italic">FAQ</a>
      <a className="text-xl font-bold italic">TEAM</a>
      <a className="text-xl font-bold italic">SHOP</a>

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
