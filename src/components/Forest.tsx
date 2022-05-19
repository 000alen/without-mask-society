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
        <div className="z-10 flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto h-min">
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
          className="!absolute -bottom-[20%] w-full -z-10"
          src="../images/forest/sm_empty.png"
          alt=""
        />
      </section>
    </>
  );
};
