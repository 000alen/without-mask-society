import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FancyButton } from "./FancyButton";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { Lorem } from "./Lorem";
import { RoadmapLeft } from "./RoadmapLeft";
import { RoadmapRight } from "./RoadmapRight";

export const Forest = () => {
  return (
    <section className="relative">
      <StaticImage
        className="!absolute z-50 w-[37.6%] left-0 top-[69.6%]"
        src="../images/forest/P1.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[49] w-[32.8%] left-[20.6%] top-[72.8%]"
        src="../images/forest/P2.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[48] w-[32.4%] left-[35.1%] top-[74%]"
        src="../images/forest/P3.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-50 w-[37.8%] left-[46.2%] top-[70.4%]"
        src="../images/forest/P4.png"
        alt=""
      />

      <StaticImage
        className="!absolute z-[49] w-[31.9%] left-[68.3%] top-[72.3%]"
        src="../images/forest/P5.png"
        alt=""
      />

      <div className="absolute z-[100] w-full top-[10%] flex flex-col justify-center">
        <RoadmapLeft title="AAA" paragraph="BBB" />
        <RoadmapRight title="AAA" paragraph="BBB" />
        <RoadmapLeft title="AAA" paragraph="BBB" />
        <RoadmapRight title="AAA" paragraph="BBB" />
      </div>

      <StaticImage
        className="w-full h-auto"
        src="../images/forest/forest.png"
        alt=""
      />
    </section>
  );
};
