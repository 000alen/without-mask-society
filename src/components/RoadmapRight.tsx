import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FancyButton } from "./FancyButton";
import { OpenseaIcon } from "./icons/OpenseaIcon";

interface Props {
  title: string;
  paragraph: string;
}

export const RoadmapRight: React.FC<Props> = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col justify-center p-8 space-y-8 lg:space-x-8 lg:flex-row">
      <StaticImage
        className="lg:hidden min-w-min max-w-[24rem]"
        src="../images/nfts/1.png"
        alt=""
      />

      <div className="lg:w-[70%] p-8 border-r-2 flex flex-col space-y-2 text-right items-end">
        <h1 className="italic font-bold text-7xl">{title}</h1>

        <p>{paragraph}</p>

        <FancyButton className="w-64" label="Buy on OpenSea">
          <OpenseaIcon />
        </FancyButton>
      </div>

      <StaticImage
        className="hidden lg:block lg:w-[30%] min-w-min max-w-[24rem]"
        src="../images/nfts/1.png"
        alt=""
      />
    </div>
  );
};
