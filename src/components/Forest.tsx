import React, { useRef, useState } from "react";
import { lorem } from "../constants";

import { ForestMilestone, ForestShowcase } from "../typings";
import { ForestBackground } from "./backgrounds/ForestBackground";
import { Milestone2 } from "./Milestone2";
import { Paragraph } from "./Paragraph";
import { choose } from "./Showcase";
import { Title } from "./Title";

interface Props {
  forest_title: string;
  forest_text: string;
  forest_milestones: ForestMilestone[];
  forest_showcase: ForestShowcase[];
}

export const Forest: React.FC<Props> = ({
  forest_title,
  forest_milestones,
  forest_showcase,
}) => {
  const [showcase] = useState<ForestShowcase[]>(choose(forest_showcase, 4));

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

        <div className="grid max-w-xl grid-cols-2 gap-8">
          {showcase.map(({ forest_showcase_image }, i) => (
            <img
              key={i}
              className="w-full transition-all border-2 border-green-400 border-solid rounded hover:glow"
              src={forest_showcase_image}
              alt=""
            />
          ))}
        </div>
      </div>

      <ForestBackground className="mt-auto mb-0" style={{ gridArea: "1/1" }} />
    </section>
  );
};
