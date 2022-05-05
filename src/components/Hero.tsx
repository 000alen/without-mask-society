import React from "react";
import { FancyButton } from "./FancyButton";
import { DiscordIcon } from "./icons/DiscordIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { Showcase } from "./Showcase";
import { WMSLogo } from "./WMSLogo";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <WMSLogo className="w-[50%]" />

      <p className="text-6xl font-bold text-center">
        THE NFTS THAT <br /> CLEAN THE WORLD
      </p>

      <div className="flex flex-row justify-center space-x-2">
        <FancyButton className="mt-24" label="Buy on OpenSea">
          <OpenseaIcon />
        </FancyButton>

        <FancyButton className="mt-24" label="Go to Discord" color="#5865F2">
          <DiscordIcon />
        </FancyButton>
      </div>

      <Showcase className="mt-24" />
    </section>
  );
};
