import React from "react";
import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const Nav = () => {
  return (
    <nav className="ml-12 my-12 flex flex-row justify-around">
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
