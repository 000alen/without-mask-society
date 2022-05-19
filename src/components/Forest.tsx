import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";

import { Blob } from "../components/Blob";
import { ForestMilestone, ForestShowcase } from "../typings";
import { ForestBackground } from "./backgrounds/ForestBackground";
import { Markdown } from "./Markdown";
import { RoadmapItem } from "./RoadmapItem";
import { Title } from "./Title";
import { useAnimations } from "./useAnimations";

interface Props {
  forest_title: string;
  forest_text: string;
  forest_milestones: ForestMilestone[];
}

export const Forest: React.FC<Props> = ({
  forest_title,
  forest_text,
  forest_milestones,
}) => {
  return (
    <>
      <Blob id="roadmap">
        <Title>{forest_title}</Title>
        <Markdown>{forest_text}</Markdown>
      </Blob>

      <section className="relative">
        <div className="z-10 flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto pb-96 lg:pb-0 h-min">
          <div className="w-full gap-2 timeline">
            {forest_milestones &&
              forest_milestones.map(
                (
                  {
                    forest_milestone_text: text,
                    forest_milestone_percent: percent,
                    forest_milestone_icon: icon,
                  },
                  i
                ) => (
                  <RoadmapItem
                    key={i}
                    className={i % 2 === 0 ? "gs_fromLeft" : "gs_fromRight"}
                    title={percent}
                    text={text}
                    icon={icon}
                  />
                )
              )}
          </div>
        </div>

        <StaticImage
          className="!absolute h-80 -bottom-[2%] lg:hidden -z-[9]"
          src="../images/forest/sm_P.png"
          objectFit="contain"
          alt=""
        />

        <StaticImage
          className="!absolute hidden lg:block w-96 rotate-45 -left-24 bottom-0 -z-[9]"
          src="../images/forest/lg_P1.png"
          alt=""
        />

        <StaticImage
          className="!absolute -scale-x-100 hidden lg:block w-96 -rotate-45 -right-36 bottom-96 -z-[9]"
          src="../images/forest/lg_P2.png"
          alt=""
        />

        <StaticImage
          className="!absolute hidden lg:block w-96 rotate-45 -left-36 bottom-[30rem] -z-[9]"
          src="../images/forest/lg_P3.png"
          alt=""
        />

        <StaticImage
          className="!absolute -bottom-[10%] lg:-bottom-[20%] w-full -z-10"
          src="../images/forest/sm_empty.png"
          alt=""
        />
      </section>
    </>
  );
};
