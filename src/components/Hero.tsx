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
  hero_showcase_title: string;
  hero_showcase: HeroShowcase[];
}

export const Hero: React.FC<Props> = ({
  hero_title,
  hero_buttons,
  hero_showcase_title,
  hero_showcase,
}) => {
  return (
    <section className="flex flex-col items-center">
      <WMSLogo className="w-[80%] lg:w-[45%]" />

      <h1 className="self-center font-[Aliseo] max-w-lg mt-8 italic font-bold text-center text-5xl lg:max-w-3xl">
        {hero_title}
      </h1>

      <Showcase
        className="mt-8"
        hero_showcase_title={hero_showcase_title}
        hero_showcase={hero_showcase}
      />

      {/* <div className="flex flex-col items-center justify-center gap-2 mt-24 lg:flex-row"> */}
      <div className="flex flex-col items-center justify-center mt-8 gap-x-24 gap-y-2 lg:flex-row">
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
