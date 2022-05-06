import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FancyButton } from "./FancyButton";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { Subtitle } from "./Subtitle";

interface Props {
  id: string;
  title: string;
  paragraph: string;
}

export const RoadmapLeft: React.FC<Props> = ({
  id,
  title,
  paragraph,
  children,
}) => {
  return (
    <div className="flex flex-col justify-center p-8 space-y-8 lg:space-x-8 lg:flex-row">
      {id === "1" ? (
        <StaticImage
          className="lg:w-[30%] min-w-min max-w-[20rem] rounded max-h-[20rem]"
          src="../images/nfts/1.png"
          alt=""
        />
      ) : id === "2" ? (
        <StaticImage
          className="lg:w-[30%] min-w-min max-w-[20rem] rounded max-h-[20rem]"
          src="../images/nfts/2.png"
          alt=""
        />
      ) : id === "3" ? (
        <StaticImage
          className="lg:w-[30%] min-w-min max-w-[20rem] rounded max-h-[20rem]"
          src="../images/nfts/3.png"
          alt=""
        />
      ) : id === "4" ? (
        <StaticImage
          className="lg:w-[30%] min-w-min max-w-[20rem] rounded max-h-[20rem]"
          src="../images/nfts/4.png"
          alt=""
        />
      ) : null}

      <div className="lg:w-[70%] p-8 border-l-2 flex flex-col space-y-2">
        <Subtitle>{title}</Subtitle>
        <p className="max-w-xl font-semibold">{paragraph}</p>
        {children}
      </div>
    </div>
  );
};
