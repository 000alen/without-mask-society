import React, { useRef } from "react";
import { lorem } from "../constants";

import { ForestMilestone } from "../typings";
import { ForestBackground } from "./backgrounds/ForestBackground";
import { Milestone2 } from "./Milestone2";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

interface Props {
  forest_title: string;
  forest_milestones: ForestMilestone[];
}

export const Forest: React.FC<Props> = ({
  forest_title,
  forest_milestones,
}) => {
  const itemsRef = useRef<Array<HTMLDivElement | null>>(
    Array.from({ length: forest_milestones.length }, () => null)
  );

  return (
    <section className="grid" id="roadmap">
      <div
        className="z-10 flex flex-col items-center h-min max-w-6xl gap-8 p-4 mx-auto pb-96 md:pb-[40rem] lg:pb-0"
        style={{ gridArea: "1/1" }}
      >
        <Title>{forest_title}</Title>

        <Paragraph>{lorem}</Paragraph>

        <div className="flex flex-col gap-8">
          {forest_milestones &&
            forest_milestones.map(({ forest_milestone_text: text }, i) => (
              <Milestone2 key={i} percent="50%" text={text} />
            ))}
        </div>

        <div className={`grid grid-cols-2 gap-4`}>
          <div className="relative transition-all border-2 border-green-400 border-solid rounded hover:glow">
            <img
              className={`max-w-[8rem] lg:max-w-[12rem] transition-all`}
              src={forest_milestones[0].forest_milestone_image}
              alt=""
            />
          </div>
          <div className="relative transition-all border-2 border-green-400 border-solid rounded hover:glow">
            <img
              className={`max-w-[8rem] lg:max-w-[12rem] transition-all`}
              src={forest_milestones[0].forest_milestone_image}
              alt=""
            />
          </div>
          <div className="relative transition-all border-2 border-green-400 border-solid rounded hover:glow">
            <img
              className={`max-w-[8rem] lg:max-w-[12rem] transition-all`}
              src={forest_milestones[0].forest_milestone_image}
              alt=""
            />
          </div>
          <div className="relative transition-all border-2 border-green-400 border-solid rounded hover:glow">
            <img
              className={`max-w-[8rem] lg:max-w-[12rem] transition-all`}
              src={forest_milestones[0].forest_milestone_image}
              alt=""
            />
          </div>
        </div>
      </div>

      <ForestBackground className="mt-auto mb-0" style={{ gridArea: "1/1" }} />
    </section>
  );
};
