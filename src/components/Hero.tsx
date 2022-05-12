import React from "react";

import { HeroButton, HeroShowcase } from "../typings";
import { FancyButton } from "./FancyButton";
import { DiscordIcon } from "./icons/DiscordIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { Showcase } from "./Showcase";
import { Title } from "./Title";
import { WMSLogo } from "./WMSLogo";

interface Props {
  hero_title: string;
  hero_buttons: HeroButton[];
  hero_showcase: HeroShowcase[];
}

export const Hero: React.FC<Props> = ({
  hero_title,
  hero_buttons,
  hero_showcase,
}) => {
  return (
    <section id="hero" className="flex flex-col items-center gap-8 p-4">
      <WMSLogo className="w-[80%] lg:w-[45%]" />

      <h1 className="self-center font-[Aliseo] max-w-lg italic font-bold text-center text-5xl lg:max-w-3xl">
        {hero_title}
      </h1>

      <Showcase hero_showcase={hero_showcase} />

      <div className="flex flex-col items-center justify-center gap-x-24 gap-y-2 md:flex-row">
        {hero_buttons &&
          hero_buttons.map(
            (
              {
                hero_button_color: button_color,
                hero_button_icon: button_icon,
                hero_button_text: button_text,
                hero_button_url: button_url,
              },
              i
            ) => (
              <FancyButton
                key={i}
                label={button_text}
                color={button_color}
                url={button_url}
              >
                {button_icon === "opensea" ? (
                  <OpenseaIcon />
                ) : button_icon === "discord" ? (
                  <DiscordIcon />
                ) : null}
              </FancyButton>
            )
          )}
      </div>
    </section>
  );
};
