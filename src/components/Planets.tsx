import React from "react";

import { PlanetsBackground } from "./backgrounds/PlanetsBackground";
import { Title } from "./Title";
import { NftGallery } from "react-nft-gallery";
import { Paragraph } from "./Paragraph";

interface Props {
  planets_title: string;
  planets_text: string;
}

export const Planets: React.FC<Props> = ({ planets_title, planets_text }) => {
  return (
    <section className="relative" id="shop">
      <div
        className={`top-[10%] lg:absolute z-[100] inset-x-0 flex flex-col gap-2 items-center`}
      >
        <Title>{planets_title}</Title>
        <Paragraph>{planets_text}</Paragraph>

        <div className="p-8">
          <NftGallery ownerAddress="vitalik.eth" darkMode={true} />;
        </div>
      </div>

      <PlanetsBackground />
    </section>
  );
};
