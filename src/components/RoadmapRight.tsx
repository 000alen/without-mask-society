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
    <div className="p-8 flex flex-row justify-center items-center space-x-8">
      <div className="w-[32rem] p-8 border-t-2 border-r-2 flex flex-col space-y-2 text-right items-end">
        <h1 className="text-7xl font-bold italic">{title}</h1>

        <p>{paragraph}</p>

        <FancyButton className="w-64" label="Buy on OpenSea">
          <OpenseaIcon />
        </FancyButton>
      </div>

      <div className="w-[32rem]">
        <StaticImage className="w-64" src="../images/nfts/1.png" alt="" />
        <StaticImage className="w-64" src="../images/nfts/2.png" alt="" />
      </div>
    </div>
  );
};
