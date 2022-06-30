import { OutboundLink } from "gatsby-plugin-google-gtag";
import { StaticImage } from "gatsby-plugin-image";
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
  mailing_text: string;

  landing?: boolean;
}

export const LandingFooter: React.FC<Props> = ({
  twitter_url,
  instagram_url,
  discord_url,
  opensea_url,
  digitalrocket_url,
  mailing_text,
  landing = true,
}) => {
  return (
    <footer className="relative flex flex-col justify-end gap-6 mt-48">
      <div>
        <Mailing text={mailing_text} />

        <div className="flex flex-col gap-2 p-12 lg:flex-row lg:justify-around">
          <WMSLogo className="w-24" />

          {landing && (
            <>
              <OutboundLink className="text-xl italic font-bold" href="#about">
                ABOUT
              </OutboundLink>
              <OutboundLink className="text-xl italic font-bold" href="#team">
                TEAM
              </OutboundLink>
              <OutboundLink
                className="text-xl italic font-bold"
                href={opensea_url}
                target="_blank"
              >
                SHOP
              </OutboundLink>
              <OutboundLink
                className="text-xl italic font-bold"
                href="#roadmap"
              >
                ROADMAP
              </OutboundLink>
              <OutboundLink
                className="text-xl italic font-bold"
                href="#donations"
              >
                DONATIONS
              </OutboundLink>
              <OutboundLink
                className="text-xl italic font-bold"
                href="#benefits"
              >
                BENEFITS
              </OutboundLink>
              <OutboundLink className="text-xl italic font-bold" href="#faq">
                FAQ
              </OutboundLink>
              <OutboundLink className="text-xl italic font-bold" href="#blog">
                BLOG
              </OutboundLink>
            </>
          )}

          <div className="flex flex-row gap-4">
            <OutboundLink href={twitter_url} target="_blank">
              <TwitterIcon />
            </OutboundLink>
            <OutboundLink href={instagram_url} target="_blank">
              <InstagramIcon />
            </OutboundLink>
            <OutboundLink href={discord_url} target="_blank">
              <DiscordIcon />
            </OutboundLink>
            <OutboundLink href={opensea_url} target="_blank">
              <OpenseaIcon />
            </OutboundLink>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center pb-24">
          <span>Brought to you by</span>
          <OutboundLink href={digitalrocket_url} target="_blank">
            <DRLogo className="w-24" />
          </OutboundLink>
        </div>
      </div>

      <StaticImage
        className="!absolute bottom-0 w-full opacity-30 -z-40"
        src="../images/pool/sm_empty.png"
        alt=""
      />
    </footer>
  );
};
