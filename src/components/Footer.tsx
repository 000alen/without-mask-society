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

      <div className="flex flex-col p-12 space-y-2 lg:flex-row lg:justify-around lg:space-x-2">
        <WMSLogo className="w-24" />

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
      </div>

      <div className="flex flex-row items-center justify-center pb-24">
        <span>Brought to you by</span>
        <a>
          <DRLogo className="w-24" />
        </a>
      </div>
    </footer>
  );
};
