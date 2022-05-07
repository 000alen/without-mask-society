import React from "react";

import { HeroButton } from "../typings";
import { FancyButton } from "./FancyButton";
import { DiscordIcon } from "./icons/DiscordIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { Showcase } from "./Showcase";
import { WMSLogo } from "./WMSLogo";

interface Props {
  hero_title: string;
  hero_buttons: HeroButton[];
}

export const Hero: React.FC<Props> = ({ hero_title, hero_buttons }) => {
  return (
    <section className="flex flex-col items-center">
      <WMSLogo className="w-[50%]" />

      <p className="text-6xl font-bold text-center">
        {/* THE NFTS THAT <br /> CLEAN THE WORLD */}
        {hero_title}
      </p>

      <div className="flex flex-col justify-center mt-24 space-y-2 lg:flex-row lg:space-x-2">
        {/* <FancyButton label="Buy on OpenSea">
          <OpenseaIcon />
        </FancyButton>

        <FancyButton label="Go to Discord" color="#5865F2">
          <DiscordIcon />
        </FancyButton> */}

        {/* TODO: Urls */}
        {hero_buttons &&
          hero_buttons.map(
            ({ hero_button_color: button_color, hero_button_icon: button_icon, hero_button_text: button_text, hero_button_url: button_url }) => (
              <FancyButton label={button_text} color={button_color}>
                {button_icon === "opensea" ? (
                  <OpenseaIcon />
                ) : button_icon === "discord" ? (
                  <DiscordIcon />
                ) : null}
              </FancyButton>
            )
          )}
      </div>

      <Showcase className="mt-24" />
    </section>
  );
};
