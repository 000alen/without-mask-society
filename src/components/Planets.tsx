import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import { ForestMilestone } from "../typings";
import { Blob } from "./Blob";
import { Markdown } from "./Markdown";
import { RoadmapItem } from "./RoadmapItem";
import { Title } from "./Title";

interface Props {
  planets_title: string;
  planets_text: string;
  forest_milestones: ForestMilestone[];
}

export const Planets: React.FC<Props> = ({
  planets_title,
  planets_text,
  forest_milestones,
}) => {
  return (
    <>
      <Blob id="donations">
        <Title>{planets_title}</Title>
        <Markdown>{planets_text}</Markdown>
      </Blob>

      <section className="relative">
        <div className="z-10 flex flex-col items-center max-w-6xl gap-8 p-4 mx-auto pb-96 md:pb-0 h-min">
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
          className="!absolute h-80 -bottom-[2%] md:hidden w-full -z-[9]"
          src="../images/planets/sm_P.png"
          alt=""
        />

        <StaticImage
          className="!absolute -bottom-[10%] lg:-bottom-[20%] w-full -z-10"
          src="../images/planets/sm_empty.png"
          alt=""
        />
      </section>
    </>
  );
};
