import React from "react";

import { PlanetsBackground } from "./backgrounds/PlanetsBackground";
import { Title } from "./Title";
import { NftGallery } from "react-nft-gallery";

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

        <p className="max-w-2xl text-center">{planets_text}</p>

        <div className="p-8">
          <NftGallery ownerAddress="vitalik.eth" darkMode={true} />;
        </div>
      </div>

      <PlanetsBackground />
    </section>
  );
};
