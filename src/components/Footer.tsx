import React from "react";
import { DRLogo } from "./DRLogo";
import { FancyButton } from "./FancyButton";
import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Mailing } from "./Mailing";
import { WMSLogo } from "./WMSLogo";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-around space-y-6">
      <Mailing />

      <div className="flex flex-row justify-around">
        <WMSLogo className="w-24" />

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
      </div>
      <div className="pb-24 flex flex-row justify-center items-center">
        <span>Brought to you by</span>
        <a>
          <DRLogo className="w-24" />
        </a>
      </div>
    </footer>
  );
};
