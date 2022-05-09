import React from "react";

import { DRLogo } from "./DRLogo";
import { FancyButton } from "./FancyButton";
import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Mailing } from "./Mailing";
import { WMSLogo } from "./WMSLogo";

interface Props {
  twitter_url: string;
  instagram_url: string;
  discord_url: string;
  opensea_url: string;
  digitalrocket_url: string;
}

export const Footer: React.FC<Props> = ({
  twitter_url,
  instagram_url,
  discord_url,
  opensea_url,
  digitalrocket_url,
}) => {
  return (
    <footer className="flex flex-col justify-around gap-6">
      <Mailing />

      <div className="flex flex-col gap-2 p-12 lg:flex-row lg:justify-around">
        <WMSLogo className="w-24" />

        <a className="text-xl italic font-bold">ABOUT</a>
        <a className="text-xl italic font-bold">ROADMAP</a>
        <a className="text-xl italic font-bold">FAQ</a>
        <a className="text-xl italic font-bold">TEAM</a>
        <a className="text-xl italic font-bold">SHOP</a>

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
      </div>

      <div className="flex flex-row items-center justify-center pb-24">
        <span>Brought to you by</span>
        <a href={digitalrocket_url} target="_blank">
          <DRLogo className="w-24" />
        </a>
      </div>
    </footer>
  );
};
